import React, { useRef, useState, useEffect } from 'react';
import YorRestItem from './RestaurentListAdmin';
import image1 from "./Img/addrast.png"
// import Map from './Map';

const RestaurantList = (props) => {

    const RestInitial = []
    const [YourRestList, YoursetRestList] = useState(RestInitial);
    const getYourRestaurant = async () => {

        const response = await fetch("http://localhost:5000/api/admin/allres", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token-admin": localStorage.getItem("AToken")
            },
        });
        const json = await response.json();
        console.log(json);
        YoursetRestList(json);
    };

    useEffect(() => {
        getYourRestaurant();
    }, []);
    const deleteRest = async (id) => {
        const response = await fetch(`http://localhost:5000/api/admin/deleteres/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token-admin": localStorage.getItem("AToken"),
            },
        });
        const json = await response.json();
        console.log(json);
        const newrestlist = YourRestList.filter((rest) => {
            return rest._id !== id;
        });
        YoursetRestList(newrestlist);
    }

    return (
        <>
            <div className="container">
                <div className="row" >
                    <h1><center>Restaurant List</center></h1>
                    <hr />
                    <div className="container mx-3">
                        {YourRestList.length === 0 && 'No Restaurant Added'}
                    </div>
                    {YourRestList.map((YourRestItem) => {
                        return <YorRestItem key={YourRestList._id} YourRestItem={YourRestItem}deleteRest={deleteRest} />
                    })}
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};
export default RestaurantList;
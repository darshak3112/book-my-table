import React from 'react'
import { useState, useEffect } from 'react';
import YorRestItem from './RestaurentPendingListAdmin';

const RestaurantPending= (props) => {

    const RestInitial = []
    const [YourRestList, YoursetRestList] = useState(RestInitial);
    const getYourPendingRestaurant = async () => {

        const response = await fetch("http://localhost:5000/api/admin/pendingres", {
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
        getYourPendingRestaurant();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row" >
                    <h1><center>Pending Restaurant List</center></h1>
                    <hr />
                    <div className="container mx-3">
                        {YourRestList.length === 0 && 'No Restaurant Added'}
                    </div>
                    {YourRestList.map((YourRestItem) => {
                        return <YorRestItem key={YourRestList._id} YourRestItem={YourRestItem} />
                    })}
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};
export default RestaurantPending;
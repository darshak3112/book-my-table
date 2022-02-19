import React from 'react'
import { useState, useEffect } from 'react';
import YorRestItem from './AdminActiveResList';

const AdminActiveRes = (props) => {

    const RestInitial = []
    const [YourRestList, YoursetRestList] = useState(RestInitial);
    const getYourActiveRestaurant = async () => {

        const response = await fetch("http://localhost:5000/api/admin/activeres", {
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
        getYourActiveRestaurant();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row" >
                    <h1><center>Active Restaurant List</center></h1>
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
export default AdminActiveRes;
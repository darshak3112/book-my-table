import React from 'react'
import { useState, useEffect } from 'react';
import YorRestItem from './RestaurentPendingListAdmin';
import { toast } from 'react-toastify';

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
        YoursetRestList(json);
    };

    useEffect(() => {
        getYourPendingRestaurant();
    }, []);

    const UpdateRes = async (id) => {

        const response = await fetch(`http://localhost:5000/api/admin/verifyres/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "auth-token-admin": localStorage.getItem("AToken"),
            },
            body: JSON.stringify({ id }),
        });
        const json = await response.json();
        toast.success("Update successfully and restaurent Activated Successfully",{autoClose:1000});
        getYourPendingRestaurant();
    };

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
                        return <YorRestItem key={YourRestList._id} YourRestItem={YourRestItem} Update={UpdateRes}/>
                    })}
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};
export default RestaurantPending;
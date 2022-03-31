import React from 'react'
import { useState, useEffect } from 'react';
import YorRestItem from './AdminActiveResList';
import { toast } from 'react-toastify';

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
        YoursetRestList(json);
    };

    useEffect(() => {
        getYourActiveRestaurant();
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
        toast.success("Update successfully and restaurent DeActivated",{autoClose:1000});
        getYourActiveRestaurant();
    };

    return (
        <>
            <div className="container">
                <div className="row" >
                    <h1><center>Active Restaurant List</center></h1>
                    <hr />
                    {YourRestList.map((YourRestItem) => {
                        return <YorRestItem key={YourRestList._id} YourRestItem={YourRestItem} Update={UpdateRes}/>
                    })}
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};
export default AdminActiveRes;
import React, { useState, useEffect } from 'react';
import YorRestItem from './History_Vendors';

const UserHistory = () => {
    const RestInitial = []
    const [YourRestList, YoursetRestList] = useState(RestInitial);

    const getYourRestaurant = async () => {

        const response = await fetch("http://localhost:5000/api/table/bookinghistoryvendor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token-vendor": localStorage.getItem("vToken")
            },
        });
        const json = await response.json();
        YoursetRestList(json);
    };

    useEffect(() => {
        getYourRestaurant();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row" >
                    <h1><center>Booked Tables</center></h1>
                    <hr />
                    <div className="container mx-3">
                        {YourRestList.length === 0 && 'No Restaurant is Booked'}
                    </div>
                    {YourRestList.map((YourRestList) => {
                        return <YorRestItem key={YourRestList._id} YourRestItem={YourRestList} />
                    })}
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};

export default UserHistory;
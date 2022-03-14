import React, { useState, useEffect } from 'react';
import YorRestItem from './History_Users';

const UserHistory = () => {
    const RestInitial = []
    const [YourRestList, YoursetRestList] = useState(RestInitial);
    const [json, setJson] = useState('');

    const getYourRestaurant = async () => {

        const response = await fetch("http://localhost:5000/api/table/bookinghistory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token-user": localStorage.getItem("uToken")
            },
        });
        const json = await response.json();
        console.log(json);
        YoursetRestList(json);
        setJson(json); 
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
                    {YourRestList.map((YourRestItem) => {
                        return <YorRestItem key={YourRestList._id} YourRestItem={json} />
                    })}
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};

export default UserHistory;
import React, { useState, useEffect } from 'react';
import YorRestItem from './History_Users';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserHistory = () => {
    const RestInitial = []
    const [YourRestList, YoursetRestList] = useState(RestInitial);

    const getYourRestaurant = async () => {

        const response = await fetch("http://localhost:5000/api/table/bookinghistory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token-user": localStorage.getItem("uToken")
            },
        });
        const json = await response.json();
        YoursetRestList(json);
    };

    useEffect(() => {
        getYourRestaurant();
    }, []);

    const deleteBooking = async (id) => {
        // Api call 
        const response = await fetch(`http://localhost:5000/api/table/cancelbooking/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token-user": localStorage.getItem("uToken"),
            },
        });
        const json = await response.json();
        // if(json==="booking cancelled"){
        toast.success("Booking canceled successfully", { autoClose: 1000 });
        // }
        // else{
        //     toast.error("Booking not cancele successfully", { autoClose: 1000 });
        // }
        getYourRestaurant();
        console.log(json.status);
        const newrestlist = YourRestList.filter((rest) => {
            return rest._id !== id;
        });
        YoursetRestList(newrestlist);
    }

    const checkTableTime = (bookingDate, Time) => {
        let bookinTime = parseInt(Time) - 1;
        let today = new Date();
        let todayDateAndTime = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + " " + today.getHours();
        let bookingDateAndTime = bookingDate + " " + bookinTime;
        console.log(todayDateAndTime)
        console.log(bookingDateAndTime)
        if (todayDateAndTime < bookingDateAndTime) {
            return true;
        }
        else {
            return false;
        }
    }

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
                        return <YorRestItem key={YourRestList._id} YourRestItem={YourRestList} deleteBooking={deleteBooking} checkTableTime={checkTableTime} />
                    })}
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};

export default UserHistory;
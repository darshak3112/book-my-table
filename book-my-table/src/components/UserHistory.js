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
        if (json.success === true) {
            toast.success("Booking canceled successfully", { autoClose: 1000 });
            getYourRestaurant();
            const newrestlist = YourRestList.filter((rest) => {
                return rest._id !== id;
            });
            YoursetRestList(newrestlist);
        }
        else {
            toast.error("you Can't cancle booking", { autoClose: 1000 });
        }
    }

    const bookingDateOfTable = (date) => {
        let d = date.split("T");
        let t = d[1].split(".");
        return d[0]
    }

    const checkTableTime = (bookingDate, Time) => {
        let bookingTime = parseInt(Time) - 1 //).toString();
        let today = new Date();
        let todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let todaytime = parseInt(today.getHours())  //.toString();
        let bookingD = bookingDate.split("/")
        let bookingdate = bookingD[2] + '-' + bookingD[1] + '-' + bookingD[0];
        if (todayDate < bookingdate) {
            console.log(todayDate, bookingdate, "true")
            return true;
        }else {
            // console.log(todayDate, bookingdate, "false")
            // return false;
            if (todayDate == bookingdate) {
                if (todaytime < bookingTime) {
                    console.log(todaytime, bookingTime, "true")
                    return true;
                }
                else {
                    console.log(todaytime, bookingTime, "false")
                    return false;
                }
            }
            else{
                return false;
            }
        }
    }

    return (
        <>
            <div className="container">
                <div className="row" >
                    <h1><center>Booked Tables</center></h1>
                    <hr />
                    {YourRestList.map((YourRestList) => {
                        return <YorRestItem key={YourRestList._id} YourRestItem={YourRestList} deleteBooking={deleteBooking} checkTableTime={checkTableTime} bookingDateOfTable={bookingDateOfTable} />
                    })}
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};

export default UserHistory;
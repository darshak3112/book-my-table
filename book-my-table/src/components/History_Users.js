import React from 'react';
import image1 from "./Img/rastLogo.jpg";

const History_Users = (props) => {
    const { YourRestItem, deleteBooking ,checkTableTime} = props;
    const bookingDateOfTable = (date) => {
        let d = date.split("T");
        let t = d[1].split(".");
        return d[0] + " " + t[0];
    }

    return (
        <>
            <div className="card border-dark my-3 mx-3" style={{ border: "light", width: "93%" }}>
                <div className="card border-dark my-3 mx-2" style={{ border: "light" }}>

                    <div className="row g-0">
                        <div className="col-md-4">
                            <center><img src={image1} className="img-fluid rounded-start" alt="..." style={{ height: "230px", width: "300px", marginTop: "20px" }} /></center>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="card-text" style={{ marginTop: "5px" }}>
                                    <table>
                                        <tbody>
                                            <tr><td style={{ width: "170px", textAlign: "center", fontSize: "30px", paddingBottom: "10px" }} colSpan="3"><b>{YourRestItem.Restaurant_Name}</b></td></tr>
                                            <tr><td style={{ width: "170px" }}><b> Guest Name </b></td><td> : </td><td style={{ paddingLeft: "10px" }}> {YourRestItem.Guest_Name}</td></tr>
                                            <tr><td style={{ width: "170px" }}><b> Guest Mobile Number </b></td><td> : </td><td style={{ paddingLeft: "10px" }}> {YourRestItem.Mobile_no_guest}</td></tr>
                                            <tr><td style={{ width: "170px" }}><b> Totle Guest </b></td><td> : </td><td style={{ paddingLeft: "10px" }}> {YourRestItem.Guest_Total}</td></tr>
                                            <tr><td style={{ width: "170px" }}><b> Bookig Date </b></td><td> : </td><td style={{ paddingLeft: "10px" }}> {bookingDateOfTable(YourRestItem.Boking_Date)}<br /></td></tr>
                                            <tr><td style={{ width: "170px" }}><b> Date </b></td><td> : </td><td style={{ paddingLeft: "10px" }}> {YourRestItem.Date}</td></tr>
                                            <tr><td style={{ width: "170px" }}><b> Time </b></td><td> : </td><td style={{ paddingLeft: "10px" }}> {YourRestItem.Time}</td></tr>
                                            {YourRestItem.Request !== "" ?
                                                <>
                                                    <tr><td style={{ width: "170px" }}><b> Special Request </b></td><td> : </td><td style={{ paddingLeft: "10px" }}> {YourRestItem.Request}</td></tr>
                                                </>
                                                : ""}
                                            <tr><td style={{ width: "170px" }}><b> Table Number</b></td><td> : </td><td style={{ paddingLeft: "10px" }}> {YourRestItem.Table_No}</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row" style={{ textAlign: "end" }}>
                                <p>You Can Cancel Your Booking Before 1 hour Of Booking Time
                                    {checkTableTime(YourRestItem.Date,YourRestItem.Time) ?
                                        <button type="button" style={{ marginRight: "10px", markerEnd: "1px" }} onClick={() => deleteBooking(YourRestItem._id)} className="btn btn-outline-danger">Cancle</button> : <button type="button" style={{ marginRight: "10px", markerEnd: "1px" }} disabled className="btn btn-outline-danger">Cancle</button>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default History_Users
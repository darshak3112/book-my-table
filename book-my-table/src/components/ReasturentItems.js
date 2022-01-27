import React from "react";
import image1 from "./Img/rastLogo.jpg";
import { Link } from "react-router-dom";


export const ReasturentItems = (props) => {
    const { RestItem } = props;

    return (
        <>
            <div className="card border-dark my-2" style={{ border: "light" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <center><img src={image1} className="img-fluid rounded-start" alt="..." style={{ height: "230px", width: "300px" }} /></center>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-9">
                                    <h5 className="card-title">{RestItem.Name}</h5>
                                </div>
                                <div className="col-3">
                                    <div style={{ textAlign: "end" }}>
                                        <span className={`badge bg-${RestItem.Active ? "success" : "danger"}`}>{RestItem.Active ? "Active" : "Pading"}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-text">
                                <table>
                                    <tr><td><b> Food Type :</b> {RestItem.FoodType}</td>
                                        <td><div style={{marginLeft:"10px"}}><b> FoodCategory : </b>{RestItem.FoodCategory}</div></td></tr>
                                    <tr><td><b> Facility : </b>Entrance Lobby,Queue,Serving Area,Cashier Station,Dining</td>
                                        <td><div style={{marginLeft:"10px"}}><b> Opening Time :</b> {RestItem.TimeOpen}</div></td></tr>
                                    <tr><td><b> Cloding Time :</b> {RestItem.TimeClose}</td>
                                        <td><div style={{marginLeft:"10px"}}><b> Table require :</b> {RestItem.Table_require}</div></td></tr>
                                    <tr><td><b> Address :</b> {RestItem.City},{RestItem.Area}<br /></td>
                                        <td><div style={{marginLeft:"10px"}}><b> Contact No :</b> {RestItem.Contact}</div></td></tr>
                                    <tr><td><b> Holiday :</b> {RestItem.Holiday}</td></tr>
                                    <tr><td><Link type="button" className={`btn btn-dark my-2 ${!localStorage.getItem("uToken")?"disabled":""}`} to="/tablebooking">Book Table</Link></td></tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReasturentItems;
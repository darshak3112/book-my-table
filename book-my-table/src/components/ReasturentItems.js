import React from "react";
import image1 from "./Img/rastLogo.jpg";
import { Link } from "react-router-dom";


export const ReasturentItems = (props) => {
    const { RestItem } = props;

    return (
        <>
            <div className="card border-dark my-2 mx-1" style={{ border: "light" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <center><img src={image1} className="img-fluid rounded-start" alt="..." style={{ height: "230px", width: "300px" }} /></center>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-9">
                                    <h4 className="card-title"><center>{RestItem.Name}</center></h4>
                                </div>
                                <div className="col-3">
                                    <div style={{ textAlign: "end" }}>
                                        <span className={`badge bg-${RestItem.Active ? "success" : "danger"}`}>{RestItem.Active ? "Active" : "Pading"}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="card-text"><b>Food Type:</b> {RestItem.FoodType}</div>
                                </div>
                                <div className="col-6">
                                    <div className="card-text"><b>Food Category:</b> {RestItem.FoodCategory}</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="card-text"><b>Opening Time:</b> {RestItem.TimeOpen}</div>
                                </div>
                                <div className="col-6">
                                    <div className="card-text"><b>Cloding Time:</b> {RestItem.TimeClose}</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="card-text"><b>Table require:</b> {RestItem.Table_require}</div>
                                </div>
                                <div className="col-6">
                                    <div className="card-text"><b>Holiday:</b> {RestItem.Holiday}</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="card-text"><b>Address:</b> {RestItem.City},{RestItem.Area}</div>
                                </div>
                                <div className="col-6">
                                    <div className="card-text"><b>Contact No :</b> {RestItem.Contact}</div>
                                </div>
                            </div>
                            <div className="card-text"><b>Facility:</b> {RestItem.Facility}</div>
                            <div className="card-text">                      
                                <Link type="button" className="btn btn-dark my-2" to="/tablebooking">Book Table</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReasturentItems;
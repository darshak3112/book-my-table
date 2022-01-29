import React from 'react';
import image1 from "./Img/rastLogo.jpg";

const YorRestItem = () => {
    return (
        <>
            <div className="card border-dark my-3" style={{ border: "light" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <center><img src={image1} className="img-fluid rounded-start" alt="..." style={{ height: "230px", width: "300px" }} /></center>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-9">
                                    <center><h2 className="card-title">Restaurant Name</h2></center>
                                </div>
                                <div className="col-3">
                                    <div style={{ textAlign: "end" }}>
                                        <span className="badge bg-success">Active</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-text">
                                <table>
                                    <tr className="my-3"><td><b> Food Type :</b> RestItem.FoodType</td></tr>
                                    <tr className="my-3"><td><b> FoodCategory : </b>RestItem.FoodCategory</td></tr>
                                    <tr className="my-3"><td><b> Facility : </b>Entrance Lobby,Queue,Serving Area,Cashier Station,Dining</td></tr>
                                    <tr className="my-3"><td><b> Opening Time :</b> RestItem.TimeOpen</td></tr>
                                    <tr className="my-3"><td><b> Cloding Time :</b> RestItem.TimeClose</td></tr>
                                    <tr className="my-3"><td><b> Table require :</b> RestItem.Table_require</td></tr>
                                    <tr className="my-3"><td><b> Address :</b> RestItem.City,RestItem.Area<br /></td></tr>
                                    <tr className="my-3"><td><b> Contact No :</b> RestItem.Contact</td></tr>
                                    <tr className="my-3"><td><b> Holiday :</b> RestItem.Holiday</td></tr>
                                </table>
                                <div style={{ textAlign: "end" }} className="row mx-3 my-3">
                                    <i className="fas fa-edit mx-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default YorRestItem;

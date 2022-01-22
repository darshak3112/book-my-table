import React from "react";
import image1 from "./Img/rastLogo.jpg";
import { Link } from "react-router-dom";


export const ReasturentItems = () => {
    return (
        <>
            <div className="card border-dark my-2" style={{border: "light" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <center><img src={image1} className="img-fluid rounded-start" alt="..." style={{ height: "230px", width: "300px" }} /></center>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-9">
                                    <h5 className="card-title">Rasturent Name</h5>
                                </div>
                                <div className="col-3">
                                    <div style={{ textAlign: "end" }}>
                                        <span className="badge bg-success">Active</span>
                                    </div>
                                </div>
                            </div>
                            <p className="card-text">Food Type: Veg/Non-Veg/Both<br />
                                Facility:Entrance Lobby,Queue,Serving Area,Cashier Station,Dining<br />
                                Opening Time: 6 pm<br />
                                Table require: 5<br />
                                Address: Sarthan ,Surat<br />
                                <div className="my-2">
                                    <Link type="button" className="btn btn-dark" to="/tablebooking">Book Table</Link>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card border-dark my-2" style={{ border: "light" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <center><img src={image1} className="img-fluid rounded-start" alt="..." style={{ height: "230px", width: "300px" }} /></center>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-9">
                                    <h5 className="card-title">Rasturent Name</h5>
                                </div>
                                <div className="col-3">
                                    <div style={{ textAlign: "end" }}>
                                        <span className="badge bg-success">Active</span>
                                    </div>
                                </div>
                            </div>
                            <p className="card-text">Food Type: Veg/Non-Veg/Both<br />
                                Facility:Entrance Lobby,Queue,Serving Area,Cashier Station,Dining<br />
                                Opening Time: 6 pm<br />
                                Table require: 5<br />
                                Address: Sarthan ,Surat<br />
                                <div className="my-2">
                                    <Link type="button" className="btn btn-dark" to="/tablebooking">Book Table</Link>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReasturentItems;
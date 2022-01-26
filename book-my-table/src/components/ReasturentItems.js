import React from "react";
import image1 from "./Img/rastLogo.jpg";
import { Link } from "react-router-dom";


export const ReasturentItems = (props) => {
    const {RestItem} = props;
    
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
                                    <h5 className="card-title">{RestItem.Name}</h5>
                                </div>
                                <div className="col-3">
                                    <div style={{ textAlign: "end" }}>
                                        <span className={`badge bg-${RestItem.Active?"success":"danger"}`}>{RestItem.Active?"Active":"Panding"}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-text">Food Type: {RestItem.FoodType}<br />
                                FoodCategory:{RestItem.FoodCategory}<br/>
                                Facility:Entrance Lobby,Queue,Serving Area,Cashier Station,Dining<br />
                                Opening Time: {RestItem.TimeOpen}<br />
                                Cloding Time: {RestItem.TimeClose}<br/>
                                Table require: {RestItem.Table_require}<br />
                                Address: {RestItem.City},{RestItem.Area}<br />
                                Contact No : {RestItem.Contact}<br/>
                                Holiday: {RestItem.Holiday}<br/>
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
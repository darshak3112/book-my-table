import React from 'react';
import image1 from "./Img/rastLogo.jpg";

const YorRestItem = (props) => {
    const { YourRestItem, updateRest,deleteRest } = props;
    return (
        <>
            <div className="card border-dark my-3 mx-2" style={{ border: "light" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <center><img src={image1} className="img-fluid rounded-start" alt="..." style={{ height: "230px", width: "300px" }} /></center>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-9">
                                    <center><h2 className="card-title">{YourRestItem.Name}</h2></center>
                                </div>
                                <div className="col-3">
                                    <div style={{ textAlign: "end" }}>
                                        <span className={`badge bg-${YourRestItem.Active ? "success" : "danger"}`}>{YourRestItem.Active ? "Active" : "Pading"}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-text">
                                <table>
                                    <tr className="my-3"><td><b> Food Type :</b> {YourRestItem.FoodType}</td></tr>
                                    <tr className="my-3"><td><b> FoodCategory : </b>{YourRestItem.FoodCategory}</td></tr>
                                    <tr className="my-3"><td><b> Facility : </b>{YourRestItem.Facility}</td></tr>
                                    <tr className="my-3"><td><b> Opening Time :</b> {YourRestItem.TimeOpen}</td></tr>
                                    <tr className="my-3"><td><b> Cloding Time :</b> {YourRestItem.TimeClose}</td></tr>
                                    <tr className="my-3"><td><b> Table require :</b> {YourRestItem.Table_require}</td></tr>
                                    <tr className="my-3"><td><b> Address :</b>{YourRestItem.Address} {YourRestItem.City},{YourRestItem.Area}<br /></td></tr>
                                    <tr className="my-3"><td><b> Contact No :</b> {YourRestItem.Contact}</td></tr>
                                    <tr className="my-3"><td><b> Holiday :</b> {YourRestItem.Holiday}</td></tr>
                                </table>
                                <div style={{ textAlign: "end" }} className="row">
                                    <p>
                                        <i style={{ cursor: 'pointer' }} className="fas fa-edit mx-2" onClick={() => updateRest(YourRestItem)}></i>
                                        <i style={{ cursor: 'pointer' }} className="fas fa-trash mx-2" onClick={() => deleteRest(YourRestItem._id)}></i>
                                    </p>
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

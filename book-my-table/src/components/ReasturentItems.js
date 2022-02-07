import React from "react";
import image1 from "./Img/rastLogo.jpg";
import { Link } from "react-router-dom";


export const ReasturentItems = (props) => {
    const { RestItem } = props;

    return (
        <>
            <div className="card border-dark my-2 mx-2" style={{ width: "97%", border: "light" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <center><img src={image1} className="img-fluid rounded-start" alt="..." style={{ marginTop: "30px", height: "230px", width: "300px" }} /></center>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-9">
                                    <h2 className="card-title" style={{ marginLeft: "120px" }}>{RestItem.Name}</h2>
                                </div>
                                <div className="col-3">
                                    <div style={{ textAlign: "end" }}>
                                        <span className={`badge bg-${RestItem.Active ? "success" : "danger"}`}>{RestItem.Active ? "Active" : "Panding"}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-text my-3">
                                <table>
                                    <tr>
                                        <td>
                                            <table>
                                                <tbody>
                                                    <tr><td><b> Food Type :</b> {RestItem.FoodType}</td></tr>
                                                    <tr><td style={{ width: "400px" }}><b> Facility : </b>{RestItem.Facility}</td></tr>
                                                    <tr><td><b> Cloding Time :</b> {RestItem.TimeClose}</td></tr>
                                                    <tr><td><b> Address :</b> {RestItem.City},{RestItem.Area}<br /></td></tr>
                                                    <tr><td><b> Holiday :</b> {RestItem.Holiday}</td></tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td>
                                            <table>
                                                <tbody>
                                                    <tr><td><div style={{ marginLeft: "10px" }}><b> FoodCategory : </b>{RestItem.FoodCategory}</div></td></tr>
                                                    <tr><td><div style={{ marginLeft: "10px" }}><b> Opening Time :</b> {RestItem.TimeOpen}</div></td></tr>
                                                    <tr><td><div style={{ marginLeft: "10px" }}><b> Table require :</b> {RestItem.Table_require}</div></td></tr>
                                                    <tr><td><div style={{ marginLeft: "10px" }}><b> Contact No :</b> {RestItem.Contact}</div></td></tr>
                                                    <tr><td style={{ height: "49px" }}></td></tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr><td style={{ columnSpan: "2" }}><Link type="button" className={`btn btn-dark my-2 ${!localStorage.getItem("uToken") ? "disabled" : ""}`} to="/tablebooking">Book Table</Link></td></tr>
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
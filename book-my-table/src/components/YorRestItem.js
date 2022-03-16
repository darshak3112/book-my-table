import React from 'react';
import image1 from "./Img/rastLogo.jpg";
const YorRestItem = (props) => {
    const { YourRestItem, updateRest, deleteRest } = props;
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
                                <div className="row">
                                    <div className="col-9">
                                        <center><h2 className="card-title" style={{ marginRight: "120px" }}>{YourRestItem.Name}</h2></center>
                                    </div>
                                    <div className="col-3">
                                        <div style={{ textAlign: "end" }}>
                                            <span className={`badge bg-${YourRestItem.Active ? "success" : "danger"}`}>{YourRestItem.Active ? "Active" : "Panding"}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-text" style={{ marginTop: "5px" }}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table>
                                                        <tbody>
                                                            <tr><td><b> Food Type :</b> {YourRestItem.FoodType}</td></tr>
                                                            <tr><td style={{ width: "400px" }}><b> Facility : </b>{YourRestItem.Facility}</td></tr>
                                                            <tr><td><b> Closing Time :</b> {YourRestItem.TimeClose}</td></tr>
                                                            <tr><td><b> Address :</b> {YourRestItem.City},{YourRestItem.Area}<br /></td></tr>
                                                            <tr><td><b> Holiday :</b> {YourRestItem.Holiday}</td></tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td>
                                                    <table>
                                                        <tbody>
                                                            <tr><td><div style={{ marginLeft: "10px" }}><b> FoodCategory : </b>{YourRestItem.FoodCategory}</div></td></tr>
                                                            <tr><td><div style={{ marginLeft: "10px" }}><b> Opening Time :</b> {YourRestItem.TimeOpen}</div></td></tr>
                                                            <tr><td><div style={{ marginLeft: "10px" }}><b> Table require :</b> {YourRestItem.Table_require}</div></td></tr>
                                                            <tr><td><div style={{ marginLeft: "10px" }}><b> Contact No :</b> {YourRestItem.Contact}</div></td></tr>
                                                            <tr><td></td></tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
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
            </div>
        </>
    );
};

export default YorRestItem;

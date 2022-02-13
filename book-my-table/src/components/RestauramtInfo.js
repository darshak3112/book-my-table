import React from 'react';
import image1 from "./Img/RestImg.jpg";
import image2 from "./Img/veg.png";
import image3 from "./Img/non-veg.png";
import "./css/RestaurantInfo.css"
import image11 from "./Img/1.jpg"
import image22 from "./Img/2.jpg"
import image33 from "./Img/3.jpg"
import image44 from "./Img/4.jpg"
import image55 from "./Img/5.jpg"
import { Carousel } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";


const RestauramtInfo = () => {
    let location = useLocation();
    const myparam = location.state.RestItem;

    const capitalize = (word) => {
        const l = word.toLowerCase();
        return l.charAt(0).toUpperCase() + word.slice(1)
    }

    return (
        <>
            <div className="container-fluid" style={{ fontFamily: 'Cormorant Garamond' }}>
                <div className="row" style={{ backgroundColor: "#ff9c4e" }}>
                    <div className="col-md-3">
                        <center><img src={image1} className="my-2" alt="..." style={{ minHeight: "100px", minWidth: "100px", maxHeight: "248px", maxWidth: "264px", borderRadius: "10px" }} /></center>
                    </div>
                    <div className="col-md-5">
                        <h2 className='my-2 textanim' >{capitalize(myparam.Name)}</h2><br />
                        <p>
                            {capitalize(myparam.FoodType) === 'Veg' ?
                                <>
                                    <img src={image2} className="me-1" alt="..." style={{ width: "20px", height: "20px" }} />
                                    <b>{capitalize(myparam.FoodType)} </b>
                                </> :
                                capitalize(myparam.FoodType) === 'Non-Veg' ?
                                    <>
                                        <img src={image3} className="me-1" alt="..." style={{ width: "20px", height: "20px" }} />
                                        <b>{capitalize(myparam.FoodType)} </b>
                                    </> :
                                    capitalize(myparam.FoodType) === 'Both' ?
                                        <>
                                            <img src={image2} className="me-1" alt="..." style={{ width: "20px", height: "20px" }} /><img src={image3} className="me-1" alt="..." style={{ width: "20px", height: "20px" }} />
                                            <b>{capitalize(myparam.FoodType)} </b>
                                        </> : ""}
                        </p>
                        <p className="card-text">
                            <i className="fas fa-map-marker-alt mx-1"></i>
                            {capitalize(myparam.Address)} , {capitalize(myparam.Area)} , {capitalize(myparam.City)}
                        </p>
                        <div className="row mx-1" style={{ height: "70px", fontFamily: 'Cormorant Garamond' }}>
                            {/* Todo In future */}
                            <div className="col-3 mx-1" style={{ border: "1px solid black", borderRadius: "10px", textAlign: "center" }}>
                                <div className='mt-2'><i class="fa fa-star mx-1"></i><b>4.3</b></div>
                                <div style={{ fontSize: "12px" }}>50+ Ratings</div>
                            </div>

                            <div className="col-3 mx-1" style={{ border: "1px solid black", borderRadius: "10px", textAlign: "center" }}>
                                <div className='mt-2'>Open At</div>
                                <div style={{ fontSize: "12px" }}><i class="far fa-clock mx-1"></i><b>{myparam.TimeOpen}</b></div>
                            </div>
                            <div className="col-3 mx-1" style={{ border: "1px solid black", borderRadius: "10px", textAlign: "center" }}>
                                <div className='mt-2'>Close At</div>
                                <div style={{ fontSize: "12px" }}><i class="far fa-clock mx-1"></i><b>{myparam.TimeClose}</b></div>
                            </div>
                        </div>
                    </div>
                    {/* In future TO DO */}
                    <div className="col-md-4 my-3" >
                        <b><label style={{ zIndex: 2, marginTop: "3.6%", marginLeft: "1%", position: "absolute", backgroundColor: "#ff9c4e", fontSize: "30px" }}>#Offers</label>
                            <div className="card" style={{ zIndex: 1, marginTop: "15%", marginBottom: "3%", marginRight: "15%", background: "#ff9c4e", border: "2px solid black", borderRadius: "10px" }}>
                                <div className="card-body">
                                    <ul>
                                        <br />
                                        <li>15% off in first booking</li>
                                        <li>exclusive rewords in orders</li>
                                    </ul>
                                </div>
                            </div>
                        </b>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            <center>
                                <Carousel>
                                    <Carousel.Item style={{ color: "black", fontSize: "15px" }}>
                                        <img
                                            className="d-block w-100" style={{ minHeight: "100px", maxHeight: "600px", maxWidth: "1200px" }}
                                            src={image11}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item style={{ color: "black", fontSize: "15px" }}>
                                        <img
                                            className="d-block w-100" style={{ minHeight: "100px", maxHeight: "600px", maxWidth: "1200px" }}
                                            src={image22}
                                            alt="Second slide"
                                        />

                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item style={{ color: "black", fontSize: "15px" }}>
                                        <img
                                            className="d-block w-100" style={{ minHeight: "100px", maxHeight: "600px", maxWidth: "1200px" }}
                                            src={image33}
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item style={{ color: "black", fontSize: "15px" }}>
                                        <img
                                            className="d-block w-100" style={{ minHeight: "100px", maxHeight: "600px", maxWidth: "1200px" }}
                                            src={image44}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item style={{ color: "black", fontSize: "15px" }}>
                                        <img
                                            className="d-block w-100" style={{ minHeight: "100px", maxHeight: "600px", maxWidth: "1200px" }}
                                            src={image55}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </center>
                        </div>
                        <div className="row mx-2 my-3" >
                            <div style={{ fontSize: "20px" }}>Facility in Our restaurant</div>
                            <div style={{ fontSize: "15px" }}>{myparam.Facility}</div>
                            <hr />
                            <div style={{ fontSize: "15px" }}><i className="fas fa-map-marker-alt mx-1"></i> {capitalize(myparam.Address)} , {capitalize(myparam.Area)} , {capitalize(myparam.City)}</div>
                            <hr />
                            <div style={{ fontSize: "20px" }}>Food</div>
                            <div style={{ fontSize: "15px" }}>{myparam.FoodCategory}</div>
                            <hr />
                            <div style={{ fontSize: "15px" }}><i class="fa fa-phone"></i> {myparam.Contact}</div>
                            <hr />
                            <div style={{ fontSize: "15px" }}>Holiday At {myparam.Holiday}</div>
                            <hr />
                            <div style={{ fontSize: "15px" }}>Total Table Occupancy: {myparam.Table_require}</div>
                            {/* <Link type="button" className={`btn btn-dark my-2 ${!localStorage.getItem("uToken") ? "disabled" : ""}`} to="/tablebooking">Book Table</Link> */}
                        </div>
                    </div>
                    <div className="col-md-3 my-2" style={{ border: "2px solid black", borderRadius: "10px", textAlign: "center", height: "600px" }}>
                        <b>advertisement</b>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RestauramtInfo;

import React, { useEffect } from 'react';
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
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RestauramtInfo = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
    let history = useHistory();
    let location = useLocation();
    const myparam = location.state.RestItem;

    const handle = () => {
        if(!localStorage.getItem("uToken")){
            toast.warning("You have to login first",{autoClose:1000});
            history.push("/SignIn");
        }
        else{
            history.push("/tablebooking", { RestItem: myparam });
        }
    }

    const capitalize = (word) => {
        const l = word.toLowerCase();
        return l.charAt(0).toUpperCase() + word.slice(1)
    }

    return (
        <>
            <div className="container-fluid" style={{ fontFamily: 'Cormorant Garamond' }}>
                <div className="row" style={{ backgroundColor: "#ff9c4e" }}>
                    <div className="col-md-3">
                        <center><img src={image1} className="my-2" alt="..." style={{ maxHeight: "264px", maxWidth: "100%", borderRadius: "10px" }} /></center>
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
                        <div className="row mx-1 mb-2" style={{ height: "20%", fontFamily: 'Cormorant Garamond' }}>
                            {/* Todo In future */}
                            <div className="col-3 mx-1" style={{ border: "1px solid black", height: "150%" ,borderRadius: "10px", textAlign: "center" }}>
                                <div className='mt-2'><i className="fa fa-star mx-1"></i><b>4.3</b></div>
                                <div style={{ fontSize: "12px" }}>50+ Ratings</div>
                            </div>

                            <div className="col-3 mx-1" style={{ border: "1px solid black", height: "150%" ,borderRadius: "10px", textAlign: "center" }}>
                                <div className='mt-2'>Open At</div>
                                <div style={{ fontSize: "12px" }}><i className="far fa-clock mx-1"></i><b>{myparam.TimeOpen}</b></div>
                            </div>
                            <div className="col-3 mx-1" style={{ border: "1px solid black", height: "150%" ,borderRadius: "10px", textAlign: "center" }}>
                                <div className='mt-2'>Close At</div>
                                <div style={{ fontSize: "12px" }}><i className="far fa-clock mx-1"></i><b>{myparam.TimeClose}</b></div>
                            </div>
                        </div>
                    </div>
                    {/* In future TO DO */}
                    <div className="col-md-4 my-4" >
                        <b><label style={{ zIndex: 2, marginTop: "1px", marginLeft: "10px", position: "absolute", backgroundColor: "#ff9c4e", fontSize: "30px" }}>#Offers</label>
                            <div className="card mb-2" style={{ zIndex: 1, marginTop: "23px", background: "#ff9c4e", border: "2px solid black", borderRadius: "10px" }}>
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
            <div className="container my-3">
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
                        <div className="card my-2">
                            <div className='card-header' style={{ fontSize: "20px", background: "#3e4a50", color: "white", fontFamily: "Cormorant Garamond" }}>Facility  of Restaurant</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{ fontSize: "15px", fontFamily: "Cormorant Garamond" }}>{myparam.Facility}</li>
                            </ul>
                        </div>

                        <div className="card my-2">
                            <div className='card-header' style={{ fontSize: "20px", background: "#3e4a50", color: "white", fontFamily: "Cormorant Garamond" }}>Address of Restaurant</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{ fontSize: "15px", fontFamily: "Cormorant Garamond" }}> {capitalize(myparam.Address)} , {capitalize(myparam.Area)} , {capitalize(myparam.City)}</li>
                            </ul>
                        </div>

                        <div className="card my-2">
                            <div className='card-header' style={{ fontSize: "20px", background: "#3e4a50", color: "white", fontFamily: "Cormorant Garamond" }}>Foods in Restaurant</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{ fontSize: "15px", fontFamily: "Cormorant Garamond" }}> {myparam.FoodCategory}</li>
                            </ul>
                        </div>

                        <div className="card my-2">
                            <div className='card-header' style={{ fontSize: "20px", background: "#3e4a50", color: "white", fontFamily: "Cormorant Garamond" }}>Contact Details of Restaurant</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{ fontSize: "15px", fontFamily: "Cormorant Garamond" }}> {myparam.Contact}</li>
                            </ul>
                        </div>

                        <div className="card my-2">
                            <div className='card-header' style={{ fontSize: "20px", background: "#3e4a50", color: "white", fontFamily: "Cormorant Garamond" }}>Holidays of Restaurant</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{ fontSize: "15px", fontFamily: "Cormorant Garamond" }}> {myparam.Holiday === "" ? "No Holidays" : myparam.Holiday}</li>
                            </ul>
                        </div>

                        <div className="card my-2">
                            <div className='card-header' style={{ fontSize: "20px", background: "#3e4a50", color: "white", fontFamily: "Cormorant Garamond" }}>Tables Occupancy of Restaurant</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{ fontSize: "15px", fontFamily: "Cormorant Garamond" }}> {myparam.Table_require}</li>
                            </ul>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <button type="button" className={"btn btn-dark my-2"} style={{ width: "100%", fontSize: "20px" }} onClick={handle}>Book Table</button></div>
                    </div>
                    <div className="col-md-3" style={{ border: "2px solid black", borderRadius: "10px", textAlign: "center", height: "600px" }}>
                        <b>advertisement</b>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RestauramtInfo;
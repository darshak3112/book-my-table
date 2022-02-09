import React from 'react';
import { useLocation } from "react-router-dom";
import image1 from "./Img/RestImg.jpg";
import image2 from "./Img/veg.png";
import image3 from "./Img/non-veg.png";

const RestauramtInfo = () => {
    let location = useLocation();
    const myparam = location.state.RestItem;

    const capitalize = (word) => {
        const l = word.toLowerCase();
        return l.charAt(0).toUpperCase() + word.slice(1)
    }

    return (
        <><div className="container" style={{ width: "67%" }}>
            <div className="row" style={{ backgroundColor: "#ff9c4e" }}>
                <div className="col-3">
                    <center><img src={image1} className="my-2" alt="..." style={{ width: "280px", height: "240px", borderRadius: "10px" }} /></center>
                </div>
                <div className="col-5">
                    <h2 className='my-2' style={{ fontFamily: 'Cormorant Garamond' }}>{capitalize(myparam.Name)}</h2><br />
                    <p style={{ fontFamily: 'Cormorant Garamond' }}>
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
                                <img src={image2} className="me-1" alt="..." style={{ width: "20px", height: "20px" }} /><img src={image3} className="me-1" alt="..." style={{ width: "20px",height: "20px" }} />
                                <b>{capitalize(myparam.FoodType)} </b>
                            </> : ""}
                    </p>
                    <p className="card-text" style={{ fontFamily: 'Cormorant Garamond' }}>
                        <i className="fas fa-map-marker-alt mx-1"></i>
                        {capitalize(myparam.Address)} , {capitalize(myparam.Area)} , {capitalize(myparam.City)}
                    </p>
                    <div className="row" style={{ height: "70px", fontFamily: 'Cormorant Garamond' }}>

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
                <div className="col-4" style={{ border: "1px solid black", borderRadius: "10px", textAlign: "center" }}>

                </div>
            </div>
        </div>
        </>
    );
};

export default RestauramtInfo;

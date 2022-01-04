import React from "react";
import image1 from "./Img/1.jpg"
import image2 from "./Img/2.jpg"
import image3 from "./Img/3.jpg"
import image4 from "./Img/4.jpg"
import image5 from "./Img/5.jpg"
import image6 from "./Img/restaurant icon.jpg"
import image7 from "./Img/digital restaurant.jpg"
import image8 from "./Img/t & c.jpg"


export const Home = () => {
    return (
        <>
            <div className="container my-1">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image1} className="d-block w-100 h-10" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image2} className="d-block w-100 h-10" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image3} className="d-block w-100 h-10" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image4} className="d-block w-100 h-10" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image5} className="d-block w-100 h-10" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <center>
                            <h2>Our features
                            </h2>
                            <p>
                                Our Three features
                            </p>
                        </center>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <center>
                            <img width="150px" src={image7} />
                            <h4>Digital restaurants Inventory</h4>
                            <p className="text-justify">
                                In Digital restaurants Inventory There is so many restaurants are avalilabale, you can simply login or sign up on entire web site then
                                you can freely book your table without waiting
                            </p>
                        </center>
                    </div>
                    <div className="col-md-4">
                        <center>
                            <img width="150px" src={image6} />
                            <h4>Searching Restaurants</h4>
                            <p className="text-justify">
                                You can search the restaurants you have to prefer on this website Here large scale restaurants
                                owner provide you to there facility
                            </p>
                        </center>
                    </div>
                    <div className="col-md-4">
                        <center>
                            <img width="250px" src={image8} />
                            <h4>Terms and Conditions</h4>
                            <p className="text-justify">
                                In the default list you can see local restaurants and locak librarys restaurants. you have to see all
                                librarys restaurants so login or sign-up on website
                            </p>
                        </center>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
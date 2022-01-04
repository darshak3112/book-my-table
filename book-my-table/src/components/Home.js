import React from "react";
import image1 from "./Img/1.jpg"
import image2 from "./Img/2.jpg"
import image3 from "./Img/3.jpg"
import image4 from "./Img/4.jpg"
import image5 from "./Img/5.jpg"

export const Home = () => {
    return (
        <>
            <div className="container">
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
            </div>
        </>
    );
};

export default Home;
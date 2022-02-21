import React from "react";
import { Carousel } from 'react-bootstrap';
import image1 from "./Img/1.jpg"
import image2 from "./Img/2.jpg"
import image3 from "./Img/3.jpg"
import image4 from "./Img/4.jpg"
import image5 from "./Img/5.jpg"
import image6 from "./Img/rest icon.png"
import image7 from "./Img/table icon.png"
import image8 from "./Img/t & c.jpg"


export const Home = () => {

  return (
    <div className="container my-1">
      <center>
        <Carousel>
          <Carousel.Item style={{ color: "black", fontSize: "15px" }}>
            <img
              className="d-block w-100" style={{ minHeight: "100px", maxHeight: "600px", maxWidth: "1200px" }}
              src={image1}
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ color: "black", fontSize: "15px" }}>
            <img
              className="d-block w-100" style={{ minHeight: "100px", maxHeight: "600px", maxWidth: "1200px" }}
              src={image2}
              alt="Second slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ color: "black", fontSize: "15px" }}>
            <img
              className="d-block w-100" style={{ minHeight: "100px", maxHeight: "600px", maxWidth: "1200px" }}
              src={image3}
              alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ color: "black", fontSize: "15px" }}>
            <img
              className="d-block w-100" style={{ minHeight: "100px", maxHeight: "600px", maxWidth: "1200px" }}
              src={image4}
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ color: "black", fontSize: "15px" }}>
            <img
              className="d-block w-100" style={{ minHeight: "100px", maxHeight: "600px", maxWidth: "1200px" }}
              src={image5}
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </center>
      <div className="row">
        <div className="col-md-12">
          <center>
            <h2 style={{ fontFamily: "times new roman", marginTop: "15px" }}><b>Our features</b></h2>
          </center>
        </div>
        <div className="row">
          <div className="col-md-4">
            <center>
              <img width="150px" src={image7} alt="..." />
              <h4>Digital restaurants Inventory</h4>
              <p className="text-justify">
                In Digital restaurants Inventory There is so many restaurants are avalilabale, you can simply login or sign up on entire web site then
                you can freely book your table without waiting
              </p>
            </center>
          </div>
          <div className="col-md-4">
            <center>
              <img width="150px" src={image6} alt="..." />
              <h4>Searching Restaurants</h4>
              <p className="text-justify">
                You can search the restaurants you have to prefer on this website Here large scale restaurants
                owner provide you to there facility
              </p>
            </center>
          </div>
          <div className="col-md-4">
            <center>
              <img width="250px" height="150px" src={image8} alt="..." />
              <h4>Terms and Conditions</h4>
              <p className="text-justify">
                You have to pre book your table. you have to pay only 100 rupees per person for booked your table. If you will canceled you booking so you have to canceled within 15 minutes other wise owner will take some charges for late canceled
              </p>
            </center>
          </div>
        </div>
      </div>
      <div style={{ height: "40px" }}></div>
    </div>
  );
};

export default Home;
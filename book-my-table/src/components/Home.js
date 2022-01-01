import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "./Img/First.jpg"
import image2 from "./Img/Second.jpg"
import image3 from "./Img/3.jpg"
import image4 from "./Img/4.jpg"
import image5 from "./Img/5.jpg"

const images = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 }
];
export const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <center>

                    <SimpleImageSlider
                        width={1315}
                        height={504}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        autoPlay={true}
                    />
                </center>
            </div>
        </>
    );
};

export default Home;
import React from "react";
import image1 from "./Img/Rest.jpg";
import { useHistory } from "react-router-dom";
import "./css/RestItem.css";


export const ReasturentItems = (props) => {
    let history = useHistory();
    const { RestItem } = props;
    
    const handelclick = () => {
        history.push("/RestInfo", { RestItem: RestItem });
    }

    const capitalize = (word) => {
        const l = word.toLowerCase();
        return l.charAt(0).toUpperCase() + word.slice(1)
    }
    return (
        <>
            <div className="col my-4">
                <div className="Restcard card cardEffect mx-auto" onClick={handelclick} style={{ width: "23rem", height: "23rem", borderRadius: "10px" }}>
                    <img src={image1} className="card-img-top" alt="..." style={{
                        width: "23rem", height: "15rem"
                        , borderTopRightRadius: "5%", borderTopLeftRadius: "5%"
                    }} />
                    <div className="card-body cardBody">
                        <h5 className="card-title" style={{ fontFamily: 'Cormorant Garamond' }}>{capitalize(RestItem.Name)}</h5>
                        <p className="card-text" style={{ fontFamily: 'Cormorant Garamond' }}>
                            <i className="fas fa-map-marker-alt mx-1"></i>
                            {capitalize(RestItem.Area)} , {capitalize(RestItem.City)}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReasturentItems;
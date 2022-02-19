import React from 'react'
import "./css/Nav.css";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div style={{position:"sticky",zIndex:3,marginTop:"40px"}}>
            <footer className='fixed-bottom'>
                <div id="footer1" className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                            <p style={{color:"white"}}>
                                <Link style={{color: "white"}} to="/AdminPanel"> Welcome in BookMyTable</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
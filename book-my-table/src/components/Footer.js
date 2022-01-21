import React from 'react'
import { Link } from "react-router-dom";
import "./css/Nav.css";


const Footer = () => {
    return (
        <div style={{position:"sticky"}}>
            <footer className='fixed-bottom'>
                <div id="footer1" className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                            <p>
                                <Link className="footerlinks mx-2" to="/vSignin">Vendor SignIn</Link>
                                <Link className="footerlinks mx-2" to="/vSignup">Vendor SignUp</Link>
                                <Link className="footerlinks mx-2" to="/addRast">Add Rasturent</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div id="footer2" className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                            <p style={{color:"white"}}>
                                Welcome in Our site
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
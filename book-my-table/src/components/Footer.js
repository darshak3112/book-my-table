import React from 'react'
import { Link } from "react-router-dom";
import "./css/Nav.css";

const Footer = () => {
    return (
        <div>
            <footer>
                <div id="footer1" className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                            <p>
                                <Link className="footerlinks mx-2" to="/vSignin">Vendor SignIn</Link>
                                <Link className="footerlinks" to="/vSignup">Vendor SignUp</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div id="footer2" className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                            <p>
                                <Link className="footerlinks" to="#">Wellcome in Our site</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
import React from 'react'
import "./css/Nav.css";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div style={{ position: "sticky", zIndex: 3, marginTop: "40px" }}>
            <footer className='fixed-bottom'>
                <div id="footer1" className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                            <form className="d-flex" style={{ justifyContent: "center", color: "white", cursor: "pointer", height: "30px" }}>
                                {!localStorage.getItem("AToken") && !localStorage.getItem("vToken") && !localStorage.getItem("uToken")
                                    ? <>
                                        <Link style={{ color: "white", marginTop: "5px" }} to="/AdminPanel"> Welcome in BookMyTable</Link>
                                    </>
                                    : <>
                                        Welcome in BookMyTable
                                    </>
                                }   
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
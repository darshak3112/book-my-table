import React from "react";
import "./css/Nav.css";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
    let location = useLocation();
    return (
        <>
            {/* <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">BookMyTable</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/reasturent' ? "active" : ""}`} to="/reasturent">Restaurants</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <Link className="btn btn-outline-light mx-1" to="/SignUp">SignUp</Link>
                                <Link className="btn btn-outline-light mx-1" to="/SignIn">SignIn</Link>
                            </form>
                        </div>
                    </div>
                </nav>
            </div> */}


            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link className="navbar-brand" to="/">BookMyTable</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link class="navbar-brand" to="#">Hidden brand</Link>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/reasturent' ? "active" : ""}`} to="/reasturent">Restaurants</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <Link className="btn btn-outline-light mx-1" to="/SignUp">SignUp</Link>
                            <Link className="btn btn-outline-light mx-1" to="/SignIn">SignIn</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
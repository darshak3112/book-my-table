import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/Nav.css";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid" style={{ height: "60px" }}>
                    <NavLink exact to="/" className="nav-logo">
                        BookMyTable
                        <i className="fas fa-code"></i>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/reasturent"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Reasturent
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/SignUp"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Sign Up
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/SignIn"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Sign In
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
import React from "react";
import "./css/Nav.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

const Navbar = (props) => {
    let location = useLocation();
    let history = useHistory();
    const handleLogout = () => {
        if (localStorage.getItem("vToken")) {
            localStorage.removeItem("vToken")
            history.push("/");
        }
        if (localStorage.getItem("vTokenUp")) {
            localStorage.removeItem("vTokenUp")
        }
        if (localStorage.getItem("uToken")) {
            localStorage.removeItem("uToken")
            history.push("/");
        }
        if (localStorage.getItem("uTokenUp")) {
            localStorage.removeItem("uTokenUp")
        }
        if (localStorage.getItem("AToken")) {
            localStorage.removeItem("AToken")
            history.push("/");
        }
    }
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" style={{ fontFamily: "math" }} to="/">BookMyTable</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {localStorage.getItem("AToken") ?
                                    <>
                                        <Nav>
                                            <Nav.Item>
                                                <Nav.Link eventKey="2" title="Item">
                                                    All Users
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="2" title="Item">
                                                    All Vendors
                                                </Nav.Link>
                                            </Nav.Item>
                                            <NavDropdown title="For Restaurants" id="nav-dropdown">
                                                <NavDropdown.Item eventKey="4.1">All Restaurants</NavDropdown.Item>
                                                <NavDropdown.Item eventKey="4.2">Pending Restaurants</NavDropdown.Item>
                                                <NavDropdown.Item eventKey="4.3">Active Restaurants</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>

                                    </>
                                    :
                                    <>
                                        {!localStorage.getItem("vToken") ?
                                            <li className="nav-item">
                                                <Link className={`nav-link ${location.pathname === '/reasturent' ? "active" : ""}`} to="/reasturent">Restaurants</Link>
                                            </li>
                                            : <><li className="nav-item">
                                                <Link className={`nav-link ${location.pathname === '/addRast' ? "active" : ""}`} to="/addRast">Add Restaurant</Link>
                                            </li>
                                                <li className="nav-item">
                                                    <Link className={`nav-link ${location.pathname === '/image' ? "active" : ""}`} to="/image">Images</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className={`nav-link ${location.pathname === '/yourRest' ? "active" : ""}`} to="/yourRest">Your Restaurant</Link>
                                                </li></>}
                                    </>
                                }
                            </ul>

                            {localStorage.getItem("AToken")
                                ?
                                <div></div>
                                :
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                                </li>
                            }
                            <form className="d-flex">
                                {!localStorage.getItem("vToken") && !localStorage.getItem("uToken") && !localStorage.getItem("AToken")
                                    ? <>
                                        <Link style={{ height: "30px" }} className="btn btn-sm btn-outline-light mx-1" to="/CheckingUp">SignUp</Link>
                                        <Link style={{ height: "30px" }} className="btn btn-sm btn-outline-light mx-1" to="/CheckingIn">SignIn</Link>
                                    </>
                                    : <button className="btn btn-sm btn-outline-light mx-1" onClick={handleLogout}>Logout</button>}
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
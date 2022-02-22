import React from "react";
import "./css/Nav.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = (props) => {
    let history = useHistory();
    let location = useLocation();

    const handleLogout = () => {
        if (localStorage.getItem("vToken")) {
            localStorage.removeItem("vToken")
            toast.success("Logout successfully", { autoClose: 3000 });
            history.push("/");
        }
        if (localStorage.getItem("vTokenUp")) {
            localStorage.removeItem("vTokenUp")
        }
        if (localStorage.getItem("uToken")) {
            localStorage.removeItem("uToken")
            toast.success("Logout successfully", { autoClose: 3000 });
            history.push("/");
        }
        if (localStorage.getItem("uTokenUp")) {
            localStorage.removeItem("uTokenUp")
        }
        if (localStorage.getItem("AToken")) {
            localStorage.removeItem("AToken")
            toast.success("Logout successfully", { autoClose: 3000 });
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
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <Link className={`nav-link ${location.pathname === '/AdminAllUser' ? "active" : ""}`} to="/AdminAllUser">All Users</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`nav-link ${location.pathname === '/AdminAllVendor' ? "active" : ""}`} to="/AdminAllVendor">All Vendors</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Restaurant
                                                </Link>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><Link className={`dropdown-item ${location.pathname === '/RestaurantList' ? "active" : ""}`} to="/RestaurantList">All Restaurants</Link></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><Link className={`dropdown-item ${location.pathname === '/RestaurantPending' ? "active" : ""}`} to="/RestaurantPending">Pending Restaurants</Link></li>
                                                    <li><Link className={`dropdown-item ${location.pathname === '/AdminActiveRes' ? "active" : ""}`} to="/AdminActiveRes">Active Restaurants</Link></li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </>
                                    :
                                    <>
                                        {!localStorage.getItem("vToken") ?
                                            <>
                                                <li className="nav-item">
                                                    <Link className={`nav-link ${location.pathname === '/reasturent' ? "active" : ""}`} to="/reasturent">Restaurants</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                                                </li>
                                            </>
                                            : <>
                                                <li className="nav-item">
                                                    <Link className={`nav-link ${location.pathname === '/addRast' ? "active" : ""}`} to="/addRast">Add Restaurant</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className={`nav-link ${location.pathname === '/image' ? "active" : ""}`} to="/image">Images</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className={`nav-link ${location.pathname === '/yourRest' ? "active" : ""}`} to="/yourRest">Your Restaurant</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                                                </li>
                                            </>}
                                    </>
                                }
                            </ul>
                            <form className="d-flex">
                                {localStorage.getItem("vToken") || localStorage.getItem("uToken")
                                    ? <>
                                        <button className="btn btn-sm btn-outline-light mx-1" onClick={handleLogout} style={{ borderRadius: "20px", width: "33px" }}><i class='fas fa-user-alt' style={{ fontSize: "16px" }}></i></button>
                                    </>
                                    : <> </>
                                }
                                {!localStorage.getItem("vToken") && !localStorage.getItem("uToken") && !localStorage.getItem("AToken")
                                    ? <>
                                        <Link style={{ height: "30px" }} className="btn btn-sm btn-outline-light mx-1" to="/CheckingUp">SignUp</Link>
                                        <Link style={{ height: "30px" }} className="btn btn-sm btn-outline-light mx-1" to="/CheckingIn">SignIn</Link>
                                    </>
                                    : <>                                    
                                        <button className="btn btn-sm btn-outline-light mx-1" onClick={handleLogout}>Logout</button>
                                    </>
                                }
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
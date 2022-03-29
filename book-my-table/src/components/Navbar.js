import React, { useRef, useState } from "react";
import "./css/Nav.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image1 from "./Img/Login.png"


const Navbar = () => {
    let history = useHistory();
    let location = useLocation();
    const ref = useRef(null);
    const refClose = useRef(null);

    const [UandV, setUandV] = useState({
        _id:"",
        Name: "",
        Email: "",
        Password: "",
        Mobile_no: ""
    })

    const handleLogout = () => {
        localStorage.clear();
        toast.success("Logout successfully", { autoClose: 1000 });
        history.push("/")
    }

    const updateUandV = async () => {
        ref.current.click();
        if (localStorage.getItem("vToken")) {
            const response = await fetch("http://localhost:5000/api/vendorAuth/getvendor", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token-vendor": localStorage.getItem("vToken")
                },
            });
            const json = await response.json();
            setUandV(json);
        }
        else if (localStorage.getItem("uToken")) {
            const response = await fetch("http://localhost:5000/api/userAuth/getuser", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token-user": localStorage.getItem("uToken")
                },
            });
            const json = await response.json();
            setUandV(json);
        }
    }

    const handleSubmit = (e) => {
        if(localStorage.getItem("vToken")){
            updateVendor(UandV._id,UandV.Name,UandV.Email);
        }
        else if(localStorage.getItem("uToken")){
            updateUser(UandV._id,UandV.Name,UandV.Email);
        }
        refClose.current.click();
    }

    const onChange = (e) => {
        setUandV({ ...UandV, [e.target.name]: e.target.value })
    }

    const updateUser = async (id,Name,Email) => {
        const response = await fetch(`http://localhost:5000/api/userAuth/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "auth-token-user": localStorage.getItem("uToken"),
            },
            body: JSON.stringify({Name,Email}),
        });
        const json = await response.json();
        let newuandv = JSON.parse(JSON.stringify(UandV))
        for (let index = 0; index < newuandv.length; index++) {
            const element = newuandv[index];
            if (element._id === id) {
                newuandv[index].Name = Name;
                newuandv[index].Email = Email;
                break;
            }
        }
        setUandV(newuandv);
        toast.success("Update successfully", { autoClose: 1000 });
    }

    const updateVendor = async (id,Name,Email) => {
        const response = await fetch(`http://localhost:5000/api/vendorAuth/updatevendor/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "auth-token-vendor": localStorage.getItem("vToken"),
            },
            body: JSON.stringify({Name,Email}),
        });
        const json = await response.json();
        let newuandv = JSON.parse(JSON.stringify(UandV))
        for (let index = 0; index < newuandv.length; index++) {
            const element = newuandv[index];
            if (element._id === id) {
                newuandv[index].Name = Name;
                newuandv[index].Email = Email;
                break;
            }
        }
        setUandV(newuandv);
        toast.success("Update successfully", { autoClose: 1000 });
    }
    return (
        <>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: "600px" }}>
                    <div className="modal-content" style={{ minWidth: "400px" }}>
                        <div className="modal-header">
                            <div style={{ width: "728px", textAlign: "center" }}><h5 className="modal-title" id="exampleModalLabel">Update Your Datails</h5></div>
                            <button type="button" className="btn-close" style={{ margin: "0" }} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card my-3">
                                <div className="card-body">
                                    <form>
                                        <center>
                                            <img width="150px" src={image1} alt="..." />
                                        </center>
                                        <center><h1>Hello {UandV.Name}</h1></center>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputName" className="form-label">User Name</label>
                                            <input type="text" className="form-control" name="Name" value={UandV.Name} id="exampleInputName" onChange={onChange} placeholder='Enter User Name' />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" name="Email" value={UandV.Email} id="exampleInputEmail1" onChange={onChange} placeholder="Enter E-Mail Id" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPhone" className="form-label">Phone No</label>
                                            <input type="text" className="form-control" name="Mobile_no" readOnly value={UandV.Mobile_no} id="exampleInputPhone" onChange={onChange} placeholder='Enter phone No' aria-describedby="phoneHelp" />
                                            <div id="phoneHelp" className="form-text">We'll never share your Phone No with anyone else.</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-dark" onClick={handleSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

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
                                    {localStorage.getItem("uToken") ? 
                                    <>
                                        <li className="nav-item">
                                            <Link className={`nav-link ${location.pathname === '/reasturent' ? "active" : ""}`} to="/reasturent">Restaurants</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link ${location.pathname === '/BookingHistory' ? "active" : ""}`} to="/BookingHistory">Booked tables</Link>
                                        </li>                            
                                    </>
                                    : 
                                        !localStorage.getItem("vToken") ?
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
                                                {/* <li className="nav-item">
                                                    <Link className={`nav-link ${location.pathname === '/image' ? "active" : ""}`} to="/image">Images</Link>
                                                </li> */}
                                                <li className="nav-item">
                                                    <Link className={`nav-link ${location.pathname === '/yourRest' ? "active" : ""}`} to="/yourRest">Your Restaurant</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className={`nav-link ${location.pathname === '/BookingHistoryVendors' ? "active" : ""}`} to="/BookingHistoryVendors">Booked tables</Link>
                                                </li>                                        
                                            </>
                                    }
                                    
                                    </>
                                }
                            </ul>
                            <form className="d-flex">
                                {!localStorage.getItem("vToken") && !localStorage.getItem("uToken") && !localStorage.getItem("AToken")
                                    ? <>
                                        <Link style={{ height: "30px" }} className="btn btn-sm btn-outline-light mx-1" to="/CheckingUp">SignUp</Link>
                                        <Link style={{ height: "30px" }} className="btn btn-sm btn-outline-light mx-1" to="/CheckingIn">SignIn</Link>
                                    </>
                                    : <>
                                        <button type="button" className="btn btn-outline-light me-2" onClick={updateUandV} style={{ borderRadius: "50px", width: "38px" }}>
                                            <center><i className='fas fa-user-alt' style={{ fontSize: "14px" }}></i></center>
                                        </button>
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
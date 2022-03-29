import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import image1 from "./Img/Login.png"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const VendorSingIn = () => {
    const [credentials, setCredentials] = useState({ Password: "", Mobile_no: "" });
    let history = useHistory();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const { Mobile_no, Password } = credentials;
        const response = await fetch("http://localhost:5000/api/vendorAuth/loginvendor", {
            method: 'POST',
            body: JSON.stringify({ Mobile_no, Password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
        if (json.authtoken) {
            localStorage.setItem('vToken', json.authtoken);
            toast.success("Login successfully", { autoClose: 1000 });
            history.push("/");

        }
        else {
            toast.error("Invalid Details", { autoClose: 1000 });

        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className="container w-25" style={{ marginBottom: "20px", minWidth: "350px" }} >
                <div className="card my-5">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <center>
                                    <img width="150px" src={image1} alt="..." />
                                </center>
                                <center><h1>Vendor SignIn</h1></center>
                                <label htmlFor="exampleInputPhone" className="form-label">Phone No</label>
                                <input type="text" className="form-control" id="exampleInputPhone" name="Mobile_no" onChange={onChange} placeholder='Enter phone No' />
                                <div id="emailHelp" className="form-text">We'll never share your Phone No with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="Password" onChange={onChange} placeholder='Password' />
                            </div>
                            <center><button type="submit" className="btn btn-primary">Submit</button></center>
                        </form>
                        <center><label style={{ marginTop: "5px" }} htmlFor="signin" className="form-label">Don't have the account? </label>
                            <Link className="card-link my-2" to="/vSignup"> Sign Up</Link><br /></center>
                    </div>
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    )
}

export default VendorSingIn
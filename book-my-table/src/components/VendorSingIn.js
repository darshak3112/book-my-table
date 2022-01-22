import React from 'react'
import { Link } from "react-router-dom";
import image1 from "./Img/Login.png"

const VendorSingIn = () => {
    return (
        <>
            <div className="container w-25" style={{marginBottom:"20px", minWidth:"350px"}} >
                <div className="card my-5">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <center>
                                    <img width="150px" src={image1} alt="..." />
                                </center>
                                <center><h1>Vendor SignIn</h1></center>
                                <label for="exampleInputPhone" className="form-label">Phone No</label>
                                <input type="text" className="form-control" id="exampleInputPhone" placeholder='Enter phone No' />
                                <div id="emailHelp" className="form-text">We'll never share your Phone No with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                            </div>
                            <center><button type="submit" className="btn btn-primary">Submit</button></center>
                        </form>
                        <center><label style={{marginTop:"5px"}} for="signin" className="form-label">Don't have the account? </label>
                        <Link className="card-link my-2" to="/vSignup"> Sign Up</Link><br/></center>
                    </div>
                </div>
            </div>
            <div style={{height:"40px"}}></div>
        </>
    )
}

export default VendorSingIn
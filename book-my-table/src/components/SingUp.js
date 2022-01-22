import React from "react";
import image1 from "./Img/Login.png"
import { Link } from "react-router-dom";

export const SingUp = () => {
  return (
    <>
      <div className="container w-50 h-75" style={{marginBottom:"20px", minWidth:"350px"}} >
        <div className="card my-3">
          <div className="card-body">
            <form>
              <center>
                <img width="150px" src={image1} alt="..." />
              </center>
              <center><h1>User SignUp</h1></center>
              <div className="mb-3">
                <label for="exampleInputName" className="form-label">User Name</label>
                <input type="text" className="form-control" name="Name" id="exampleInputName" placeholder='Enter User Name' />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control"  name="Email" id="exampleInputEmail1" placeholder="Enter E-Mail Id" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPhone" className="form-label">Phone No</label>
                <input type="text" className="form-control"  name="mobile_no" id="exampleInputPhone" placeholder='Enter phone No' aria-describedby="phoneHelp"/>
                <div id="phoneHelp" className="form-text">We'll never share your Phone No with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control"  name="pass" id="exampleInputPassword1" placeholder='Password' />
              </div>
              <center><button type="submit" className="btn btn-primary">Submit</button></center>
            </form>
            <center><label style={{marginTop:"8px"}} for="signin" className="form-label">Already have account? </label>
            <Link className="card-link my-2" to="/Signin"> Sign In</Link><br/></center>
          </div>
        </div>
      </div>
      <div style={{height:"40px"}}></div>
    </>
  );
};

export default SingUp;
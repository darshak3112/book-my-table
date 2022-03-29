import React, { useState } from "react";
import image1 from "./Img/Login.png"
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SingUp = () => {
  const [credentials, setCredentials] = useState({ Name: "", Email: "", Password: "", Mobile_no: "" });
  let history = useHistory();

  const handleSubmit = async (e) => {

    e.preventDefault();
    const { Name, Email, Mobile_no, Password } = credentials;
    const response = await fetch("http://localhost:5000/api/userAuth/createuser", {
      method: 'POST',
      body: JSON.stringify({ Name, Email, Mobile_no, Password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();
    if (json.authtoken) {
      localStorage.setItem('uTokenUp', json.authtoken);
      toast.success("Sign Up successfully",{autoClose:1000});
      history.push("/SignIn");
    }
    else {
      toast.error("Please Fill all details",{autoClose:1000});
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="container w-50 h-75" style={{ marginBottom: "20px", minWidth: "350px" }} >
        <div className="card my-3">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <center>
                <img width="150px" src={image1} alt="..." />
              </center>
              <center><h1>User SignUp</h1></center>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">User Name</label>
                <input type="text" className="form-control" name="Name" id="exampleInputName" onChange={onChange} placeholder='Enter User Name' />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" name="Email" id="exampleInputEmail1" onChange={onChange} placeholder="Enter E-Mail Id" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPhone" className="form-label">Phone No</label>
                <input type="text" className="form-control" name="Mobile_no" id="exampleInputPhone" onChange={onChange} placeholder='Enter phone No' aria-describedby="phoneHelp" />
                <div id="phoneHelp" className="form-text">We'll never share your Phone No with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name="Password" id="exampleInputPassword1" onChange={onChange} placeholder='Password' />
              </div>
              <center><button type="submit" className="btn btn-primary">Submit</button></center>
            </form>
            <center><label style={{ marginTop: "8px" }} htmlFor="signin" className="form-label">Already have account? </label>
              <Link className="card-link my-2" to="/Signin"> Sign In</Link><br /></center>
          </div>
        </div>
      </div>
      <div style={{ height: "40px" }}></div>
    </>
  );
};

export default SingUp;
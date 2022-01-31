import React, { useState } from 'react'
import image1 from "./Img/Login.png"
import { Link, useHistory } from "react-router-dom";


const VendorSighUp = () => {
  const [credentials, setCredentials] = useState({ Name: "", Email: "", Password: "", Mobile_no: "" });
  let history = useHistory();

  const handleSubmit = async (e) => {

    e.preventDefault();
    const { Name, Email, Mobile_no, Password } = credentials;
    const response = await fetch("http://localhost:5000/api/vendorAuth/createvendor", {
      method: 'POST',
      body: JSON.stringify({ Name, Email, Mobile_no, Password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();
    //console.log(json.authtoken);
    if (json.authtoken) {
      console.log(json.authtoken);
      localStorage.setItem('vTokenUp', json.authtoken);
      history.push("/vSignIn");
      //console.log(json);

    }
    else {
      console.log("deny");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="container w-50 h-75" style={{ marginBottom: "20px", minWidth: "350px" }} >
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <center>
                <img width="150px" src={image1} alt="..." />
              </center>
              <center><h1>Vendor SignUp</h1></center>
              <div className="mb-3">
                <label for="exampleInputName" className="form-label">Vendor Name</label>
                <input type="text" className="form-control" id="exampleInputName" name="Name" onChange={onChange} placeholder='Enter User Name' />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="Email" onChange={onChange} placeholder="Enter E-Mail Id" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPhone" className="form-label">Phone No</label>
                <input type="text" className="form-control" id="exampleInputPhone" name="Mobile_no" onChange={onChange} placeholder='Enter phone No' aria-describedby="phoneHelp" />
                <div id="phoneHelp" className="form-text">We'll never share your Phone No with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="Password" onChange={onChange} placeholder='Password' />
              </div>
              <center><button type="submit" className="btn btn-primary">Submit</button></center>
            </form>
            <center><label style={{ marginTop: "5px" }} for="signin" className="form-label">Already have account? </label>
              <Link className="card-link my-2" to="/vSignin"> Sign In</Link><br /></center>
          </div>
        </div>
      </div>
      <div style={{ height: "40px" }}></div>
    </>
  )
}

export default VendorSighUp

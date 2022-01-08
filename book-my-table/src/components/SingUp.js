import React from "react";
import image1 from "./Img/Login.png"

export const SingUp = () => {
  return (
    <>
      <div className="container">
        <div className="card my-5">
          <div className="card-body">
            <form>
              <center>
                <img width="150px" src={image1} alt="..." />
              </center>
              <center><h1>User SignUp</h1></center>
              <div className="mb-3">
                <label for="exampleInputName" className="form-label">User Name</label>
                <input type="text" className="form-control" id="exampleInputName" placeholder='Enter User Name' />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter E-Mail Id" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPhone" className="form-label">Phone No</label>
                <input type="text" className="form-control" id="exampleInputPhone" placeholder='Enter phone No' aria-describedby="phoneHelp"/>
                <div id="phoneHelp" className="form-text">We'll never share your Phone No with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
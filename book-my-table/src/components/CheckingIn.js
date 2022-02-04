import React from 'react';
import { Link } from "react-router-dom";

const CheckingUp = () => {
  return (
    <div className='container'>
        <center><h1 style={{marginTop:"100px"}}>Select Your SignIn</h1>
        <Link type="button" className="btn btn-secondary mx-2 my-3" to="/SignIn">Customer SignIn</Link>
        <Link type="button" className="btn btn-secondary mx-2 my-3" to="/vSignIn">Vendor SignIn</Link></center>
    </div>
  )
};

export default CheckingUp;

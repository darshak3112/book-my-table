import React from 'react';
import { Link } from "react-router-dom";

const CheckingUp = () => {
  return (
    <div className='container'>
        <center><h1 style={{marginTop:"100px"}}>Select Your SignUp</h1>
        <Link type="button" className="btn btn-secondary mx-2 my-3" to="/SignUp">Customer SignUp</Link>
        <Link type="button" className="btn btn-secondary mx-2 my-3" to="/vSignUp">Vendor SignUp</Link></center>
    </div>
  )
};

export default CheckingUp;

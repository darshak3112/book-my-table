import React, { useState } from 'react'
import image1 from "./Img/Login.png"
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const [credentials, setCredentials] = useState({ Password: "", Mobile_no: "" });
    let history = useHistory();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const { Mobile_no, Password } = credentials;
        const response = await fetch("http://localhost:5000/api/admin/login", {
            method: 'POST',
            body: JSON.stringify({ Mobile_no, Password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
        if (json.authtoken) {
            localStorage.setItem('AToken', json.authtoken);
            history.push("/RestaurantList");
            toast.success("Login successfully", { autoClose: 1000 });
        }
        else {
            toast.error("Please enter valid details", { autoClose: 1000 });
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <>
            {!localStorage.getItem("AToken")
                ?
                <>
                    <div className="container w-25" style={{ marginBottom: "20px", minWidth: "350px" }} >
                        <div className="card my-5">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <center>
                                            <img width="150px" src={image1} alt="..." />
                                        </center>
                                        <center><h1>Admin</h1></center>
                                        <label htmlFor="exampleInputPhone" className="form-label">Phone No</label>
                                        <input type="text" className="form-control" id="exampleInputPhone" name="Mobile_no" onChange={onChange} placeholder='Enter phone No' />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" name="Password" onChange={onChange} placeholder='Password' />
                                    </div>
                                    <center><button type="submit" className="btn btn-primary">Submit</button></center>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: "40px" }}></div>
                </>
                :
                history.push("/RestaurantList")
        }
        </>
    )
}

export default SignIn

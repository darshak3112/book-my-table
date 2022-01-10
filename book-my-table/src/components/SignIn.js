import React from 'react'
import image1 from "./Img/Login.png"


const SignIn = () => {
    return (
        <>
            <div className="container">
                <div className="card my-5">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <center>
                                    <img width="150px" src={image1} alt="..." />
                                </center>
                                <center><h1>User SignIn</h1></center>
                                <label for="exampleInputPhone" className="form-label">Phone No</label>
                                <input type="text" className="form-control" id="exampleInputPhone" placeholder='Enter phone No' />
                                <div id="emailHelp" className="form-text">We'll never share your Phone No with anyone else.</div>
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
    )
}

export default SignIn

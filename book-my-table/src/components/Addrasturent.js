import React from 'react';
import image1 from "./Img/addrast.png"

const Addrasturent = () => {
    return (
        <>
            <div className="container  w-50 h-75" style={{marginBottom:"20px", minWidth:"350px"}}>
                <div className="card my-5">
                    <div className="card-body">
                        <form>
                            <center>
                                <img width="150px" src={image1} alt="..." />
                            </center>
                            <center><h1>Add Rasturent</h1></center>
                            <hr />
                            <div className="mb-3">
                                <label for="exampleInputName" className="form-label">Rasturent Name</label>
                                <input type="text" className="form-control" id="exampleInputName" placeholder='Enter Rasturent Name' />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputName" className="form-label">Opening Time</label>
                                <input type="text" className="form-control" id="exampleInputName" placeholder='Opening time (hh:mm:yyyy)' />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputName" className="form-label">Closing Time</label>
                                <input type="text" className="form-control" id="exampleInputName" placeholder='Closing time (hh:mm:yyyy)' />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputName" className="form-label">Facility</label>
                                <input type="text" className="form-control" id="exampleInputName" placeholder='Enter Facility' />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputName" className="form-label">Table_require</label>
                                <input type="text" className="form-control" id="exampleInputName" placeholder='Enter Table_require' />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputName" className="form-label">City</label>
                                <input type="text" className="form-control" id="exampleInputName" placeholder='Enter City' />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputName" className="form-label">Area</label>
                                <input type="text" className="form-control" id="exampleInputName" placeholder='Enter Area' />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPhone" className="form-label">contact No</label>
                                <input type="text" className="form-control" id="exampleInputPhone" placeholder='Enter Contact No' aria-describedby="phoneHelp" />
                                <div id="phoneHelp" className="form-text">We'll never share your Phone No with anyone else.</div>
                            </div>
                            <center><button type="submit" className="btn btn-primary">Submit</button></center>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{height:"40px"}}></div>
        </>
    );
};

export default Addrasturent;

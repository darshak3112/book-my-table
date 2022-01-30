import React, { useRef } from 'react';
import YorRestItem from './YorRestItem';
import image1 from "./Img/addrast.png"
import Map from './Map';

const YourRest = (props) => {
    const ref = useRef(null);
    const updateRest = () => {
        ref.current.click();
    }
    const handleSubmit = () => {

    }
    const onChange = (e) => {
        // setInfo({ ...info, [e.target.name]: e.target.value });
    }
    return (
        <>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" style={{paddingRight:"344px"}} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{width:"178%"}}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Your Restaurant Datails</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="card my-5">
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit} >
                                            <center>
                                                <img width="150px" src={image1} alt="..." />
                                            </center>
                                            <center><h1>Add Rasturent</h1></center>
                                            <hr />
                                            <div className="mb-3">
                                                <label for="exampleInputName" className="form-label">Rasturent Name</label>
                                                <input type="text" name="Name" className="form-control" onChange={onChange} id="exampleInputName" placeholder='Enter Rasturent Name' />
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputName" className="form-label">City</label>
                                                <input type="text" name="City" className="form-control" onChange={onChange} id="exampleInputName" placeholder='Enter City' />
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputName" className="form-label">Area</label>
                                                <input type="text" name="Area" className="form-control" onChange={onChange} id="exampleInputName" placeholder='Enter Area' />
                                            </div>
                                            <div className="mb-3">
                                                <label style={{ marginRight: 10 }} for="exampleInputName" className="form-label">Food-Type : </label>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" onChange={onChange} type="radio" name="FoodType" id="inlineRadio1" value="Veg" />
                                                    <label className="form-check-label" for="inlineRadio1">Veg</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" onChange={onChange} type="radio" name="FoodType" id="inlineRadio2" value="Non-Veg" />
                                                    <label className="form-check-label" for="inlineRadio2">Non-Veg</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" onChange={onChange} type="radio" name="FoodType" id="inlineRadio3" value="Both" />
                                                    <label className="form-check-label" for="inlineRadio3">Both</label>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label style={{ marginRight: 10 }} for="exampleInputName" className="form-label">Food-Category : </label>
                                                <div style={{ marginLeft: 120 }}>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={onChange} name='FoodCategory' type="checkbox" value="Gujarati" id="flexCheckDefault" />
                                                        <label className="form-check-label" for="flexCheckDefault">
                                                            Gujarati
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={onChange} name='FoodCategory' type="checkbox" value="Punjabi" id="flexCheckChecked" />
                                                        <label className="form-check-label" for="flexCheckChecked">
                                                            Punjabi
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={onChange} name='FoodCategory' type="checkbox" value="Italian" id="flexCheckChecked" />
                                                        <label className="form-check-label" for="flexCheckChecked">
                                                            Italian
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={onChange} name='FoodCategory' type="checkbox" value="South-Indian" id="flexCheckChecked" />
                                                        <label className="form-check-label" for="flexCheckChecked">
                                                            South-Indian
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={onChange} name='FoodCategory' type="checkbox" value="Maxican" id="flexCheckChecked" />
                                                        <label className="form-check-label" for="flexCheckChecked">
                                                            Maxican
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={onChange} name='FoodCategory' type="checkbox" value="Chanise" id="flexCheckChecked" />
                                                        <label className="form-check-label" for="flexCheckChecked">
                                                            Chanise
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={onChange} name='FoodCategory' type="checkbox" value="Other" id="flexCheckChecked" />
                                                        <label className="form-check-label" for="flexCheckChecked">
                                                            Other
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3 my-2">
                                                <Map
                                                    google={props.google}
                                                    center={{ lat: 21.170240, lng: 72.831062 }}
                                                    height='300px'
                                                    zoom={15}
                                                />
                                            </div>
                                            <br />
                                            <div className="row my-2">
                                                <div className="col-6">
                                                    <center>
                                                        <div className="mb-3">
                                                            <label for="exampleInputName" className="form-label mx-2">Opening Time :</label>
                                                            <select style={{ marginLeft: 10, width: "100px" }} onChange={onChange} className='btn btn-outline-dark' name="TimeOpen" id="Otime">
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                                <option value="9">9</option>
                                                                <option value="10">10</option>
                                                                <option value="11">11</option>
                                                                <option value="11">12</option>
                                                            </select>
                                                            <select style={{ marginLeft: 10 }} onChange={onChange} className='btn btn-outline-dark' name="TimeOpen" id="OTimeZone">
                                                                <option value="AM">AM</option>
                                                                <option value="PM">PM</option>
                                                            </select>
                                                        </div>
                                                    </center>
                                                </div>
                                                <div className="col-6">
                                                    <center>
                                                        <div className="mb-3">
                                                            <label for="exampleInputName" className="form-label mx-2">Closing Time :</label>
                                                            <select style={{ marginLeft: 10, width: "100px" }} onChange={onChange} className='btn btn-outline-dark' name="TimeClose" id="Ctime">
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                                <option value="9">9</option>
                                                                <option value="10">10</option>
                                                                <option value="11">11</option>
                                                                <option value="11">12</option>
                                                            </select>
                                                            <select style={{ marginLeft: 10 }} onChange={onChange} className='btn btn-outline-dark' name="TimeClose" id="CTimeZone">
                                                                <option value="AM">AM</option>
                                                                <option value="PM">PM</option>
                                                            </select>
                                                        </div>
                                                    </center>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputName" className="form-label mx-2">Holiday : </label>
                                                <select style={{ marginLeft: 10, width: "150px" }} onChange={onChange} className='btn btn-outline-dark' name="Holiday" id="Holiday">
                                                    <option value="No-Holiday" selected>No-Holiday</option>
                                                    <option value="Sunday">Sunday</option>
                                                    <option value="Monday">Monday</option>
                                                    <option value="Tuesday">Tuesday</option>
                                                    <option value="Wednesday">Wednesday</option>
                                                    <option value="Thursday">Thursday</option>
                                                    <option value="Friday">Friday</option>
                                                    <option value="Saturday">Saturday</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputPhone" className="form-label">contact No</label>
                                                <input type="text" name="Contact" onChange={onChange} className="form-control" id="exampleInputPhone" placeholder='Enter Contact No' aria-describedby="phoneHelp" />
                                                <div id="phoneHelp" className="form-text">We'll never share your Phone No with anyone else.</div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputName" className="form-label">Facility</label>
                                                <input type="text" name="Facility" onChange={onChange} className="form-control" id="exampleInputName" placeholder='Enter Facility' />
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputName" className="form-label">Number of table</label>
                                                <input type="text" name="Table_require" onChange={onChange} className="form-control" id="exampleInputName" placeholder='Enter Number of table you want to show on website' />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <h1><center>Your Rasturent List</center></h1>
                    <hr />
                    <div className="container mx-3">
                        <YorRestItem updateRest={updateRest} />
                    </div>
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};

export default YourRest;

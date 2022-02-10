import React, { useState } from 'react';
import image1 from "./Img/addrast.png"

import { useHistory } from "react-router-dom"

let t1, t2, t3, t4, food = "";
const Addrasturent = (props) => {

    let history = useHistory();
    const [info, setInfo] = useState({ Name: "", City: "", Area: "", FoodType: "", FoodCategory: "", TimeOpen: "", TimeClose: "", Contact: "", Facility: "", Holiday: "", Table_require: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();

        let { Name, City, Area, FoodType, FoodCategory, Address, TimeOpen, TimeClose, Contact, Facility, Holiday, Table_require } = info;
        TimeOpen = Time();
        TimeClose = Time2();

        const response = await fetch("http://localhost:5000/api/restaurent/addres", {
            method: 'POST',
            body: JSON.stringify({ Name, City, Area, FoodType, FoodCategory, Address, TimeOpen, TimeClose, Contact, Facility, Holiday, Table_require }),
            headers: {
                'Content-Type': 'application/json',
                "auth-token-vendor": localStorage.getItem("vToken")
            }
        });
        const json = await response.json();
        console.log(json);
        history.push("/");
        if (!Error)
            history.push("/");
    }

    const onChange = (e) => {
        if (e.target.name === "FoodCategory") {
            food = food + e.target.value + ", ";
            setInfo({ ...info, [e.target.name]: food });
        }
        else {
            setInfo({ ...info, [e.target.name]: e.target.value });
        }
    }


    const onChangeOpen = (e) => {
        t1 = e.target.value;
    }

    const onChangeOpenAp = (e) => {
        t2 = e.target.value;
    }

    const Time = () => {
        const str = t1 + " " + t2;
        return str;
    }

    const onChangeClose = (e) => {
        t3 = e.target.value;
    }

    const onChangeCloseAp = (e) => {
        t4 = e.target.value;
    }

    const Time2 = () => {
        const str = t3 + " " + t4;
        return str;
    }

    return (
        <>
            <div className="container w-50 h-75" style={{ marginBottom: "20px", minWidth: "350px" }}>
                <div className="card my-5">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} >
                            <center>
                                <img width="150px" src={image1} alt="..." />
                            </center>
                            <center><h1>Add Rasturent</h1></center>
                            <hr />
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Rasturent Name</label>
                                <input type="text" name="Name" className="form-control" onChange={onChange} id="exampleInputName" placeholder='Enter Rasturent Name' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">City</label>
                                <input type="text" name="City" className="form-control" onChange={onChange} id="exampleInputName" placeholder='Enter City' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Area</label>
                                <input type="text" name="Area" className="form-control" onChange={onChange} id="exampleInputName" placeholder='Enter Area' />
                            </div>
                            <div className="mb-3">
                                <label style={{ marginRight: 10 }} htmlFor="exampleInputName" className="form-label">Food-Type : </label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" onChange={onChange} type="radio" name="FoodType" id="inlineRadio1" value="Veg" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Veg</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" onChange={onChange} type="radio" name="FoodType" id="inlineRadio2" value="Non-Veg" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Non-Veg</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" onChange={onChange} type="radio" name="FoodType" id="inlineRadio3" value="Both" />
                                    <label className="form-check-label" htmlFor="inlineRadio3">Both</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label style={{ marginRight: 10 }} htmlFor="exampleInputName" className="form-label">Food-Category : </label>
                                <div style={{ marginLeft: 120 }}>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={onChange} name='FoodCategory' type="checkbox" value="Gujarati" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Gujarati
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={onChange} name='FoodCategory' type="checkbox" value="Punjabi" id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Punjabi
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={onChange} name='FoodCategory' type="checkbox" value="Italian" id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Italian
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={onChange} name='FoodCategory' type="checkbox" value="South-Indian" id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            South-Indian
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={onChange} name='FoodCategory' type="checkbox" value="Maxican" id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Maxican
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={onChange} name='FoodCategory' type="checkbox" value="Chanise" id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Chanise
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={onChange} name='FoodCategory' type="checkbox" value="Other" id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Other
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="mb-3 my-2">
                                <Map
                                    google={props.google}
                                    center={{ lat: 21.170240, lng: 72.831062 }}
                                    height='300px'
                                    zoom={15}
                                />
                            </div> */}
                            <br />
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Address</label>
                                <input type="text" name="Address" className="form-control" onChange={onChange} id="exampleInputName" placeholder='Enter Rasturent Address' />
                            </div>
                            <div className="row my-2">
                                <div className="col-6">
                                    <center>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputName" className="form-label mx-2">Opening Time :</label>
                                            <select style={{ marginLeft: 10, width: "100px" }} onChange={onChangeOpen} className='btn btn-outline-dark' name="TimeOpen" id="Otime">
                                                <option value="none" selected="selected">-- Select --</option>
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
                                                <option value="12">12</option>
                                            </select>
                                            <select style={{ marginLeft: 10 }} onChange={onChangeOpenAp} className='btn btn-outline-dark' name="TimeOpenAp" id="OTimeZone">
                                                <option value="none" selected="selected">-- Select --</option>
                                                <option value="AM">AM</option>
                                                <option value="PM">PM</option>
                                            </select>
                                        </div>
                                    </center>
                                </div>
                                <div className="col-6">
                                    <center>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputName" className="form-label mx-2">Closing Time :</label>
                                            <select style={{ marginLeft: 10, width: "100px" }} onChange={onChangeClose} className='btn btn-outline-dark' name="TimeClose" id="Ctime">
                                                <option value="none" selected="selected">-- Select --</option>
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
                                                <option value="12">12</option>
                                            </select>
                                            <select style={{ marginLeft: 10 }} onChange={onChangeCloseAp} className='btn btn-outline-dark' name="TimeCloseAp" id="CTimeZone">
                                                <option value="none" selected="selected">-- Select --</option>
                                                <option value="AM">AM</option>
                                                <option value="PM">PM</option>
                                            </select>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label mx-2">Holiday : </label>
                                <select style={{ marginLeft: 10, width: "150px" }} onChange={onChange} className='btn btn-outline-dark' name="Holiday" id="Holiday">
                                    <option value="No-Holiday" selected="selected">-- Select Holiday --</option>
                                    <option value="No-Holiday">No-Holiday</option>
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
                                <label htmlFor="exampleInputPhone" className="form-label">contact No</label>
                                <input type="text" name="Contact" onChange={onChange} className="form-control" id="exampleInputPhone" placeholder='Enter Contact No' aria-describedby="phoneHelp" />
                                <div id="phoneHelp" className="form-text">We'll never share your Phone No with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Facility</label>
                                <input type="text" name="Facility" onChange={onChange} className="form-control" id="exampleInputName" placeholder='Enter Facility' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Number of table</label>
                                <input type="text" name="Table_require" onChange={onChange} className="form-control" id="exampleInputName" placeholder='Enter Number of table you want to show on website' />
                            </div>
                            <center><button type="submit" className="btn btn-primary">Submit</button></center>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};

export default Addrasturent;
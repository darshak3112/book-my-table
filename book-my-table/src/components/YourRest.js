import React, { useRef, useState, useEffect } from 'react';
import YorRestItem from './YorRestItem';
import image1 from "./Img/addrast.png"
// import Map from './Map';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let t1, t2, t3, t4, food = "";

const YourRest = (props) => {

    const RestInitial = []
    const [YourRestList, YoursetRestList] = useState(RestInitial);
    let table_no = 0;

    const [UpDateRest, setUpDateRest] = useState({
        id: "",
        Name: "",
        City: "",
        Area: "",
        FoodType: "",
        FoodCategory: "",
        Address: "",
        TimeOpen: "",
        TimeClose: "",
        Contact: "",
        Facility: "",
        Holiday: "",
        Active: "",
        Table_require: "",
    });

    const getYourRestaurant = async () => {
        //Api call Fetch all restaurant
        const response = await fetch("http://localhost:5000/api/restaurent/fetchallres", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token-vendor": localStorage.getItem("vToken")
            },
        });
        const json = await response.json();
        YoursetRestList(json);
    };

    useEffect(() => {
        getYourRestaurant();
    }, []);

    const ref = useRef(null);
    const refClose = useRef(null);

    const updateRest = (currentRest) => {
        ref.current.click();
        setUpDateRest({
            id: currentRest._id,
            Name: currentRest.Name,
            City: currentRest.City,
            Area: currentRest.Area,
            FoodType: currentRest.FoodType,
            FoodCategory: "",
            Address: currentRest.Address,
            TimeOpen: currentRest.TimeOpen,
            TimeClose: currentRest.TimeClose,
            Contact: currentRest.Contact,
            Facility: currentRest.Facility,
            Holiday: currentRest.Holiday,
            Active: currentRest.Active,
            Table_require: currentRest.Table_require
        })
    }
    const handleSubmit = (e) => {
        UpdateRest(UpDateRest.id,
            UpDateRest.Name,
            UpDateRest.City,
            UpDateRest.Area,
            UpDateRest.FoodType,
            UpDateRest.FoodCategory,
            UpDateRest.Address,
            UpDateRest.TimeOpen,
            UpDateRest.TimeClose,
            UpDateRest.Contact,
            UpDateRest.Facility,
            UpDateRest.Holiday,
            UpDateRest.Active,
            UpDateRest.Table_require);
        refClose.current.click();


    }

    const onChangeOpen = (e) => {
        if (e.target.name === "TimeOpen") {
            t1 = e.target.value;
        }
    }
    const onChangeOpenAP = (e) => {
        if (e.target.name === "TimeOpenAp") {
            t2 = e.target.value;
        }
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


    const UpdateRest = async (id, Name, City, Area, FoodType, FoodCategory, Address, TimeOpen, TimeClose, Contact, Facility, Holiday, Active, Table_require) => {
        // Api call
        TimeOpen = Time();
        TimeClose = Time2();
        if (t1 !== "" && t2 !== "" && t3 !== "" && t4 !== "") {
            if (Time() !== Time2()) {
                if ((t2 === t4 && parseInt(t1) < parseInt(t3)) || (t2 !== t4)) {
                    if (Table_require < 0 || (!(Table_require >= 'a' && Table_require <= 'z'))) {
                        table_no = Table_require;
                        const response = await fetch(`http://localhost:5000/api/restaurent/updateres/${id}`, {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json",
                                "auth-token-vendor": localStorage.getItem("vToken"),
                            },
                            body: JSON.stringify({ Name, City, Area, FoodType, FoodCategory, Address, TimeOpen, TimeClose, Contact, Facility, Holiday, Active, Table_require }),
                        });


                        const tresponse = await fetch(`http://localhost:5000/api/table/updatetable/${id}`, {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json",
                                "auth-token-vendor": localStorage.getItem("vToken"),
                            },
                            body: JSON.stringify({ table_no }),
                        });
                        const json1 = await tresponse.json();
                        console.log(json1)


                        const json = await response.json();
                        let newRest = JSON.parse(JSON.stringify(YourRestList))
                        for (let index = 0; index < newRest.length; index++) {
                            const element = newRest[index];
                            if (element._id === id) {
                                newRest[index].Name = Name;
                                newRest[index].City = City;
                                newRest[index].Area = Area;
                                newRest[index].FoodType = FoodType;
                                newRest[index].FooFoodCategory = FoodCategory;
                                newRest[index].Address = Address;
                                newRest[index].TimeOpen = TimeOpen;
                                newRest[index].TimeClose = TimeClose;
                                newRest[index].Contact = Contact;
                                newRest[index].Facility = Facility;
                                newRest[index].Holiday = Holiday;
                                newRest[index].Active = Active;
                                newRest[index].Table_require = Table_require;
                                newRest[index].Holiday = Holiday;
                                break;
                            }

                        }
                        YoursetRestList(newRest);
                        toast.success("Update successfully", { autoClose: 1000 });
                        // useEffect(() => {
                        getYourRestaurant();
                        // }, []);
                    } else {
                        toast.error("Please enter correct number of tables", { autoClose: 1000 });
                    }
                } else {
                    toast.error("Please enter opening time less than closing time", { autoClose: 1000 });
                }
            } else {
                toast.error("Please enter different times", { autoClose: 1000 });
            }
        } else {
            toast.error("Please enter all timing detail", { autoClose: 1000 });
        }
    };

    const updateTable = async (id) => {
        const response = await fetch(`http://localhost:5000/api/table/updatetable/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "auth-token-vendor": localStorage.getItem("vToken"),
            },
            body: JSON.stringify({ table_no }),
        });
    }

    const deleteRest = async (id) => {
        // Api call 
        const response = await fetch(`http://localhost:5000/api/restaurent/deleteres/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token-vendor": localStorage.getItem("vToken"),
            },
        });
        const json = await response.json();
        const newrestlist = YourRestList.filter((rest) => {
            return rest._id !== id;
        });
        YoursetRestList(newrestlist);
        toast.success("Delete successfully", { autoClose: 1000 });
    }


    const onChange = (e) => {
        if (e.target.name === "FoodCategory") {
            food = food + e.target.value + ", ";
            setUpDateRest({ ...UpDateRest, [e.target.name]: food });
        }
        else {
            setUpDateRest({ ...UpDateRest, [e.target.name]: e.target.value });
        }
    }

    return (
        <>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: "800px" }}>
                    <div className="modal-content" style={{ minWidth: "450px" }}>
                        <div className="modal-header">
                            <div style={{ width: "728px", textAlign: "center" }}><h5 className="modal-title" id="exampleModalLabel">Update Your Restaurant Datails</h5></div>
                            <button type="button" className="btn-close" style={{ margin: "0" }} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="card my-5">
                                    <div className="card-body">
                                        <form>
                                            <center>
                                                <img width="150px" src={image1} alt="..." />
                                            </center>
                                            <center><h1>Update Your Rasturent</h1></center>
                                            <hr />
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputName" className="form-label">Rasturent Name</label>
                                                <input type="text" name="Name" className="form-control" required onChange={onChange} value={UpDateRest.Name} id="exampleInputName" placeholder='Enter Rasturent Name' />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputName" className="form-label">City</label>
                                                <input type="text" name="City" className="form-control" required onChange={onChange} value={UpDateRest.City} id="exampleInputName" placeholder='Enter City' />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputName" className="form-label">Area</label>
                                                <input type="text" name="Area" className="form-control" required onChange={onChange} value={UpDateRest.Area} id="exampleInputName" placeholder='Enter Area' />
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
                                                    <input className="form-check-input" defaultChecked="checked" onChange={onChange} type="radio" name="FoodType" id="inlineRadio3" value="Both" />
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
                                                <input type="text" name="Address" className="form-control" onChange={onChange} value={UpDateRest.Address} id="exampleInputName" placeholder='Enter Rasturent Address' />
                                            </div>
                                            <div className="row my-2">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleInputName" className="form-label mx-2">Opening Time :</label>
                                                        <br /><select style={{ marginLeft: 10, width: "100px" }} onChange={onChangeOpen} className='btn btn-outline-dark' name="TimeOpen" id="Otime">
                                                            <option value="1" selected="selected">1</option>
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
                                                        <select style={{ marginLeft: 10 }} onChange={onChangeOpenAP} className='btn btn-outline-dark' name="TimeOpenAp" id="OTimeZone">
                                                            <option value="AM" selected="selected">AM</option>
                                                            <option value="PM">PM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleInputName" className="form-label mx-2">Closing Time :</label>
                                                        <br /><select style={{ marginLeft: 10, width: "100px" }} onChange={onChangeClose} className='btn btn-outline-dark' name="TimeClose" id="Ctime">
                                                            <option value="1" selected="selected">1</option>
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
                                                            <option value="AM" selected="selected">AM</option>
                                                            <option value="PM">PM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputName" className="form-label mx-2">Holiday : </label>
                                                <select style={{ marginLeft: 10, width: "150px" }} onChange={onChange} className='btn btn-outline-dark' name="Holiday" id="Holiday">
                                                    <option value="No-Holiday" selected="selected">No-Holiday</option>
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
                                                <input type="text" name="Contact" required onChange={onChange} className="form-control" id="exampleInputPhone" value={UpDateRest.Contact} placeholder='Enter Contact No' aria-describedby="phoneHelp" />
                                                <div id="phoneHelp" className="form-text">We'll never share your Phone No with anyone else.</div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputName" className="form-label">Facility</label>
                                                <input type="text" name="Facility" required onChange={onChange} className="form-control" value={UpDateRest.Facility} id="exampleInputName" placeholder='Enter Facility' />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputName" className="form-label">Number of table</label>
                                                <input type="text" name="Table_require" required onChange={onChange} className="form-control" value={UpDateRest.Table_require} id="exampleInputName" placeholder='Enter Number of table you want to show on website' />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-dark" onClick={handleSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
                <div style={{ height: "40px" }}></div>
            </div>
            <div className="container">
                <div className="row" >
                    <h1><center>Your Restaurant List</center></h1>
                    <hr />
                    {YourRestList.map((YourRestItem) => {
                        return <YorRestItem key={YourRestList._id} YourRestItem={YourRestItem} updateRest={updateRest} deleteRest={deleteRest} />
                    })}
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};

export default YourRest;
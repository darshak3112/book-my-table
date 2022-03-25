import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./css/Tablebooking.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Tablebooking = () => {
  const [timeArray, setTimeArray] = useState([]);
  const [dateArray, setDateArray] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [passingDate, setPassingDate] = useState('');
  const [info, setInfo] = useState({ Person: "", Name: "", Mobile: "", Request: "", Date: "", Time: "", Restaurant1: "" });
  const [timeInfo, setTimeInfo] = useState({ restaurent1: "", Date: "", oTime: "", cTime: "" });
  const [fullTables, setFullTables] = useState('');
  const [opening_Time, setopening_Time] = useState('');
  const [closing_Time, setclosing_Time] = useState('');

  let location = useLocation();

  const myparam = location.state.RestItem;
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dateObj = new Date();
  var month = dateObj.getMonth() + 1;
  var day = dateObj.getDate() - 1;
  var year = dateObj.getFullYear();
  let da, currentDay;

  const getDate = () => {
    var dateObj2 = day + 1;
    dateObj.setDate(dateObj2);
    month = dateObj.getMonth() + 1;
    day = dateObj.getDate();
    year = dateObj.getFullYear();
    var date2 = day + "/" + month + "/" + year;
    da = days[dateObj.getDay()];
    currentDay = days[dateObj.getDay() + 1];
    return date2;
  }

  useEffect(() => {
    let timeOpenStamps = myparam.TimeOpen;
    let timeCloseStamps = myparam.TimeClose;
    let Onum = 0, Cnum = 0;
    let tempArray = [];
    let dateArray = [];

    for (let i = 0; timeOpenStamps[i] !== '\0'; i++) {
      if (timeOpenStamps[i] === "A") {
        Onum = parseInt(timeOpenStamps);
        break;
      }
      else if (timeOpenStamps[i] === "P") {
        Onum = parseInt(timeOpenStamps) + 12;
        if (Onum === 24) { Onum = 1; break; }
        break;
      }
    }
    for (let i = 0; timeCloseStamps[i] !== '\0'; i++) {
      if (timeCloseStamps[i] === "A") {
        Cnum = parseInt(timeCloseStamps);
        break;
      }
      else if (timeCloseStamps[i] === "P") {
        Cnum = parseInt(timeCloseStamps) + 12;
        break;
      }
    }

    let temp = 0;
    for (let i = Onum; i <= Cnum; i++) {
      var today = new Date(),
      currentHour = today.getHours();

        if(i > currentHour) {
          if(temp === 0) { 
            setopening_Time(i); 
            temp++; 
          }
          tempArray.push(i);
          setclosing_Time(i);
        }
    }

    setTimeArray(tempArray);

    for (let i = 1; i <= 7; i++) {
      dateArray.push(i);
    }
    setDateArray(dateArray);
  }, [myparam.TimeClose, myparam.TimeOpen]);

  const handleChange = (time) => {
    setSelectedTime(time);
  }

  const handleDateChange = (date) => {
    var dateObj = new Date();
    var month = dateObj.getMonth() + 1;
    var day = dateObj.getDate() + (date - 1);
    var year = dateObj.getFullYear();

    var d = day + "/" + month + "/" + year;
    setPassingDate(d);

    setSelectedDate(date);

    getTimeSlots(d);
  }

  const getTimeSlots = async (d) => {

    let { restaurent1, Date, oTime, cTime } = timeInfo;

    Date = d;
    restaurent1 = myparam._id;
    oTime = opening_Time;
    cTime = closing_Time;

    //comment
    const response = await fetch("http://localhost:5000/api/table/showbooking", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token-user": localStorage.getItem("uToken"),
      },
      body: JSON.stringify({ restaurent1, Date, oTime, cTime }),
    });

    const json = await response.json();
    setFullTables(json);
    console.log(json);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let { Person, Name, Mobile, Request, Date, Time, Restaurant1 } = info;
    Date = opening_Time;
    Time = closing_Time;
    Restaurant1 = myparam._id;

    //comment
    const response = await fetch("http://localhost:5000/api/table/tablebooking", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token-user": localStorage.getItem("uToken"),
      },
      body: JSON.stringify({ Person, Name, Mobile, Request, Date, Time, Restaurant1 }),
    });
    const json = await response.json();
    if(json.success==="completed"){
      toast.success("Your Table is successfully book",{autoClose:1000});
    }
    else if(json.fill==="please fill all details"){
      toast.error("please fill all details",{autoClose:1000});
    }
    else{
      toast.error("Booking not available",{autoClose:1000});
    }
  }

  const onChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  return ( //With changes
    <>
      <div className="table-booking">
        <div className="card mx-3">
          <div className="card-body">
            <center><h1>Table Booking</h1></center><hr />

            <h5 className="card-title">Select Date</h5>
            {dateArray.map((date, i) => (
              <>
                {currentDay !== myparam.Holiday  ?
                  <button type="button" className={`btn ${selectedDate === date ? 'btn-success' : 'btn-outline-secondary'} btn-lg mx-2`} onClick={() => handleDateChange(date)} style={{ marginTop: "10px", width: "130px", height : "110px" }}>{getDate()}<br />{da}</button>                
                : <button type="button" className={`btn ${selectedDate === date ? 'btn-success' : 'btn-outline-secondary'} btn-lg mx-2`} onClick={() => handleDateChange(date)} style={{ marginTop: "10px", width: "130px", height : "110px" }} disabled>{getDate()}<br />{da}<br /><b><u>Holiday</u></b></button>}</>
            ))}
          </div>
        </div>
        <div className="card my-3 mx-3 w-50" style={{ float: "left" }}>
          <div className="card-body">
            <h5 className="card-title">Select People</h5>
            <h6 className="card-subtitle mb-2 text-muted">Select how many Persons you are come for meal</h6>
            <div className="mb-3">
              <input type="text" className="form-control" required style={{ marginTop: "15px" }} id="exampleInputPerson" onChange={onChange} name="Person" placeholder='Enter Guests' />
              <h6 className="card-subtitle mb-2 text-muted my-4">Details Of Guest</h6>
              <input type="text" className="form-control" required style={{ marginTop: "15px" }} id="exampleInputName" onChange={onChange} name="Name" placeholder='Enter Guest Name' />
              <input type="text" className="form-control" required style={{ marginTop: "15px" }} id="exampleInputNum" onChange={onChange} name="Mobile" placeholder='Enter Guest Mobile Number' />
              <input type="text" className="form-control" minLength={10} style={{ marginTop: "15px" }} id="exampleInputReq" onChange={onChange} name="Request" placeholder='Any Special Request (Optional)' />
            </div>
          </div>
        </div>
        <div className="card my-3 mx-3">
          <div className="card-body">
            <h5 className="card-title">Select Time</h5>
            <h6 className="card-subtitle mb-2 text-muted">Select which time do you want</h6>
            {
            selectedDate !== "" ?
              timeArray.map((time, i) => (
              <button type="button" className={`btn ${selectedTime === time ? 'btn-success' : 'btn-outline-secondary'} btn-lg mx-2`} onClick={() => handleChange(time)} style={{ marginTop: "10px", width: "100px" }}>{time} : 00</button>
            )) : <p></p>}

          </div>
        </div>
        <div>
          <button type="button" className={"btn btn-dark my-2"} style={{ width: "95%", fontSize: "20px", textAlign: "center", marginLeft : "2.5%" }} onClick={handleSubmit}>Booking Confirm</button></div>
      </div>
      <div style={{ height: "80px" }}></div>
    </>
  );
};

export default Tablebooking;
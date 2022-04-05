import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./css/Tablebooking.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Tablebooking = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

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
  const [date, setdate] = useState('');
  const [prevSelectedDate, setprev] = useState('');
  let today = 0;

  let location = useLocation();

  const myparam = location.state.RestItem;
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dateObj = new Date();
  var month = dateObj.getMonth() + 1;
  var day = dateObj.getDate() - 1;
  var year = dateObj.getFullYear();
  today = (day + 1) + "/" + month + "/" + year;
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

  const incDate = (da) => {
    var di = da+1;
    let date = new Date();
    let day = date.getDate(date.setDate(date.getDate() + (di)));
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let d = day + "/" + month + "/" + year;
    setPassingDate(d);

    setPassingDate(d);
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

      var temp = 0, j = 0;
      if(Onum > Cnum) {
        Cnum =  12 - Cnum+1;

        j = Onum;
        for (let i = Onum; i > Cnum; i--) {

          if(j === 24) { 
            j = 1; 
          }
          if(j >= 24) {
            incDate(date);
          }
          var todays = new Date();
          var currentHour = todays.getHours();
  
          if (passingDate === today) {
  
            if(i === Onum) {
              if (j >= currentHour) {
                if (temp === 0) {
                  setopening_Time(i);
                  temp++;
                } else {
                  tempArray.push(j);
                }
                setclosing_Time(i);
                j++;
              }
            } else {
              if (temp === 0) {
                setopening_Time(i);
                temp++;
              } else {
                tempArray.push(j);
              }
              setclosing_Time(i);
              j++;
            }
          } else {
            if (temp === 0) {
              setopening_Time(j);
              temp++;
            }
            tempArray.push(j);
            setclosing_Time(j);
            j++;
          }
  
        }
      } else {
        for (let i = Onum; i < Cnum; i++) {
          var todays = new Date();
          var currentHour = todays.getHours();
  
          if (passingDate === today) {
  
            if (i >= currentHour) {
              if (temp === 0) {
                setopening_Time(i);
                temp++;
              } else {
                tempArray.push(i);
              }
              setclosing_Time(i);
            }
          } else {
            if (temp === 0) {
              setopening_Time(i);
              temp++;
            }
            tempArray.push(i);
            setclosing_Time(i);
          }
  
        }
      }
      

      setTimeArray(tempArray);

      for (let i = 1; i <= 7; i++) {
        dateArray.push(i);
      }
      setDateArray(dateArray);

  }, [date, myparam.TimeClose, myparam.TimeOpen, passingDate, today]);

  const handleChange = (time) => {
    setSelectedTime(time);
  }

  const handleDateChange = (e) => {
    let date = new Date();
    let day = date.getDate(date.setDate(date.getDate() + (e - 1)));
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let d = day + "/" + month + "/" + year;
    setPassingDate(d);

    setSelectedDate(e);
    setdate(day);
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (info.Person <= 0 || info.Person === "" || (info.Person >= 'a' && info.Person <= 'z')) {
      toast.error("Invalid persons entry", { autoClose: 1000 });
    } else {
      getTimeSlots(passingDate);

      var flag = true;

      for (let element of fullTables) {
        if (parseInt(element.time) === parseInt(selectedTime)) {
          flag = false;
          break;
        } else {
          flag = true;
        }
      };

      if (flag === false) {
        toast.error("It is already full!", { autoClose: 1000 });
      } else {
        let { Person, Name, Mobile, Request, Date, Time, Restaurant1 } = info;
        Date = passingDate;
        Time = selectedTime;
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
        if (json.success === "completed") {
          toast.success("Your Table is successfully book", { autoClose: 1000 });
        }
        else if (json.fill === "please fill all details") {
          toast.error("please fill all details", { autoClose: 1000 });
        }
        else {
          toast.error("Booking not available", { autoClose: 1000 });
        }
      }
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
                {currentDay !== myparam.Holiday ?
                  <button type="button" className={`btn ${selectedDate === date ? 'btn-success' : 'btn-outline-secondary'} btn-lg mx-2`} onClick={() => handleDateChange(date)} style={{ marginTop: "10px", width: "130px", height: "110px" }}>{getDate()}<br />{da}</button>
                  : <button type="button" className={`btn ${selectedDate === date ? 'btn-success' : 'btn-outline-secondary'} btn-lg mx-2`} onClick={() => handleDateChange(date)} style={{ marginTop: "10px", width: "130px", height: "110px" }} disabled>{getDate()}<br />{da}<br /><b><u>Holiday</u></b></button>}</>
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
            {timeArray.map((time, i) => (
              <>
                {selectedDate !== prevSelectedDate ?
                  <button type="button" className={`btn ${selectedTime === time ? 'btn-success' : 'btn-outline-secondary'} btn-lg mx-2`} onClick={() => handleChange(time)} style={{ marginTop: "10px", width: "100px" }}>{time} : 00</button>
                  : <p></p>}</>
            ))}

          </div>
        </div>
        <div>
          <button type="button" className={"btn btn-dark my-2"} style={{ width: "95%", fontSize: "20px", textAlign: "center", marginLeft: "2.5%" }} onClick={handleSubmit}>Booking Confirm</button></div>
      </div>
      <div style={{ height: "80px" }}></div>
    </>
  );
};

export default Tablebooking;
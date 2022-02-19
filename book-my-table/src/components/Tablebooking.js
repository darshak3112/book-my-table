import React from "react";
import { useLocation } from "react-router-dom";


export const Tablebooking = () => {
  let location = useLocation();
  const myparam = location.state.RestItem;

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dateObj = new Date();
  var month = dateObj.getMonth() + 1;
  var day = dateObj.getDate();
  var year = dateObj.getFullYear();

  var date = day + "/" + month + "/" + year;
  var d = days[dateObj.getDay()];

  let da;
  const getDate = () => {
    var dateObj2 = day + 1;
    dateObj.setDate(dateObj2);
    month = dateObj.getMonth() + 1;
    day = dateObj.getDate();
    year = dateObj.getFullYear();

    var date2 = day + "/" + month + "/" + year;
    da = days[dateObj.getDay()];
    return date2;
  }

  const dates = [];

  const getdates = () => {
    dates.push(<button type="button" className="btn btn-outline-secondary btn-lg mx-2" style={{ marginTop: "10px" }}>{date}<br></br>{d}</button>);
    for (let i = 1; i <= 6; i++) {
      dates.push(<button type="button" className="btn btn-outline-secondary btn-lg mx-2" style={{ marginTop: "10px" }}>{getDate()}<br></br>{da}</button>);
    }
    return dates;
  }

  const ti = [];
  let timeOpenStamps = myparam.TimeOpen;
  let timeCloseStamps = myparam.TimeClose;
  let Onum = 0, Cnum = 0;

  for (let i = 0; timeOpenStamps[i] !== '\0'; i++) {
    if (timeOpenStamps[i] === "A") {
      Onum = parseInt(timeOpenStamps);
      break;
    }
    else if (timeOpenStamps[i] === "P") {
      Onum = parseInt(timeOpenStamps) + 12;
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
  
  var Color = "outline-secondary";

  const handleChange = () => {
      Color = "secondary";
  }

  const gettimes = () => {
    for (let i = Onum; i <= Cnum; i++) {
      ti.push(<button type="button" className={`btn btn-${Color} btn-lg mx-2`} onClick={handleChange} style={{ marginTop: "10px", width: "100px" }}>{i} : 00</button>);
    }
    return ti;
  }

  return ( //With changes
    <div>
      <div className="card mx-3">
        <div className="card-body">
          <center><h1>Table Booking</h1></center><hr />
          <h5 className="card-title">Select Date</h5>
          {getdates()}   
        </div>
      </div>
      <div className="card my-3 mx-3 w-50" style={{ float: "left"}}>
        <div className="card-body">
          <h5 className="card-title">Select People</h5>
          <h6 className="card-subtitle mb-2 text-muted">Select how many Persons you are come for eat</h6>

          <div className="mb-3">
            <input type="number" className="form-control" style={{ marginTop: "15px" }} id="exampleInputPerson" name="Person" placeholder='Enter Guests' />
          <h6 className="card-subtitle mb-2 text-muted my-4">Details Of Guest</h6>
            <input type="text" className="form-control" style={{ marginTop: "15px" }} id="exampleInputName" name="Name" placeholder='Enter Guest Name' />
            <input type="text" className="form-control" style={{ marginTop: "15px" }} id="exampleInputMail" name="Mail" placeholder='Enter Guest Mail' />
            <input type="text" className="form-control" style={{ marginTop: "15px" }} id="exampleInputNum" name="Mobile" placeholder='Enter Guest Mobile Number' />
            <input type="text" className="form-control" style={{ marginTop: "15px" }} id="exampleInputReq" name="Request" placeholder='Any Special Request (Optional)' />
          </div>
        </div>
      </div>
      <div className="card my-3 mx-3">
        <div className="card-body">
          <h5 className="card-title">Select Time</h5>
          <h6 className="card-subtitle mb-2 text-muted">Select which time do you want</h6>
          {gettimes()}
        </div>
      </div>
    </div>
  );
};

export default Tablebooking;
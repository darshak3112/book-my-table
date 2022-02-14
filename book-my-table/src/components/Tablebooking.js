import React from "react";

export const Tablebooking = () => {


  var dateObj = new Date();
  var month = dateObj.getMonth() + 1;
  var day = dateObj.getDate();
  var year = dateObj.getFullYear();

  var date = day + "/" + month + "/" + year;

  const getDate = () => {
    var dateObj2 = day + 1;
    dateObj.setDate(dateObj2);
    month = dateObj.getMonth() + 1;
    day = dateObj.getDate();
    year = dateObj.getFullYear();

    var date2 = day + "/" + month + "/" + year;
    return date2;
  }

  const dates = [];

  const getdates = () => {
    console.log(dates);

    dates.push(<button type="button" className="btn btn-outline-secondary btn-lg mx-2" style={{ marginTop: "10px" }}>{date}</button>);
    for (let i = 1; i <= 6; i++) {
      dates.push(<button type="button" className="btn btn-outline-secondary btn-lg mx-2" style={{ marginTop: "10px" }}>{getDate()}</button>);
    }
    return dates;
  }

  const gettimes = () => {
    <button type="button" className="btn btn-outline-secondary btn-lg mx-2" style={{ marginTop: "10px" }}></button>
  }

  return (
    <div>
      <div className="card mx-2">
        <div className="card-body">
          <center><h1>Table Booking</h1></center><hr />
          <h5 className="card-title">Select Date</h5>
          {getdates()}
        </div>
      </div>
      <table>
        <tr>
          <td>
            <div className="card my-3 mx-2">
              <div className="card-body">
                <h5 className="card-title">Select People</h5>
                <h6 className="card-subtitle mb-2 text-muted">Select how many Person you are come for eat</h6>

                <div className="mb-3">
                  <input type="number" className="form-control" style={{ marginTop: "20px" }} id="exampleInputName" name="Name" placeholder='Enter Persons' />
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="card my-3 mx-2">
              <div className="card-body">
                <h5 className="card-title">Select Time</h5>
                <h6 className="card-subtitle mb-2 text-muted">Select which time do you want</h6>

              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Tablebooking;
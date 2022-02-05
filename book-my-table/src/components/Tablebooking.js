import React from "react";
import image1 from "./Img/table.jpg"
import { useSelector } from "react-redux";

export const Tablebooking = () => {
  const table = useSelector(state => state.table);


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
  
  const image = [];

  const gettables = () => {
    console.log(table);


    for (let i = 1; i <= table; i++) {
      image.push(<img style={{ width: "25%", height: "25%" }} src={image1} alt="..." className="img-thumbnail my-2 mx-1" />);
    }
    return image;
  }

  // const times = [];

  // const gettables = () => {
  //   console.log(table);


  //   for (let i = 1; i <= table; i++) {
  //     image.push(<img style={{ width: "25%", height: "25%" }} src={image1} alt="..." className="img-thumbnail my-2 mx-1" />);
  //   }
  //   return image;
  // }

  return (
    <div>
      <div className="card mx-2">
        <div className="card-body">
          <center><h1>Table Booking</h1></center><hr />
          <h5 className="card-title">Select Date : </h5>
          <button type="button" className="btn btn-outline-secondary btn-lg mx-2" style={{ marginTop: "10px" }}>{date}</button>
          <button type="button" className="btn btn-outline-secondary btn-lg mx-2" style={{ marginTop: "10px" }}>{getDate()}</button>
          <button type="button" className="btn btn-outline-secondary btn-lg mx-2" style={{ marginTop: "10px" }}>{getDate()}</button>
          <button type="button" className="btn btn-outline-secondary btn-lg mx-2" style={{ marginTop: "10px" }}>{getDate()}</button>
          <button type="button" className="btn btn-outline-secondary btn-lg mx-2" style={{ marginTop: "10px" }}>{getDate()}</button>
          <button type="button" className="btn btn-outline-secondary btn-lg mx-2" style={{ marginTop: "10px" }}>{getDate()}</button>
          <button type="button" className="btn btn-outline-secondary btn-lg mx-2" style={{ marginTop: "10px" }}>{getDate()}</button>
        </div>
      </div>
      <table>
        <tr>
          <td>
            <div className="card my-3 mx-2">
              <div className="card-body">
                <h5 className="card-title">Select Tables</h5>
                <h6 className="card-subtitle mb-2 text-muted">Select how many tables do you want to book</h6>

                {gettables()}
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
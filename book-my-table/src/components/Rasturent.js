import React from "react";
import { useEffect, useState } from "react";
import ReasturentItems from "./ReasturentItems";

export const Rasturent = () => {
  const RestInitial = []
  const [RestList, setRestList] = useState(RestInitial);
  // const [RestItem, setRestRestItem] = useState({
  //   _id: "",
  //   Vendor: "",
  //   Name: "",
  //   City: "",
  //   Area: "",
  //   FoodType: "",
  //   FoodCategory: "",
  //   TimeOpen: "",
  //   TimeClose: "",
  //   Contact: "",
  //   Facility: "",
  //   Holiday: "",
  //   Active: "",
  //   Table_require: "",
  // });

  const getRestaurant = async () => {
    //Api call Fatch all restaurant
    const response = await fetch("http://localhost:5000/api/restaurent/getallrest", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setRestList(json);
  };

  useEffect(() => {
    // if(localStorage.getItem("token")){
    getRestaurant();
    // }
    // else{
    //   history.push("/login")
    // }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <h1><center>Rasturent List</center></h1>
          <hr />
          <div className="container mx-3">
            {RestList.length === 0 && 'No Restaurant Added'}
          </div>
          {RestList.map((RestItem) => {
            return <ReasturentItems key={RestItem._id} RestItem={RestItem}/>
          })}
        </div>
      </div>
      <div style={{ height: "40px" }}></div>
    </>
  );
};

export default Rasturent;
import React from "react";
import { useEffect, useState } from "react";
import ReasturentItems from "./ReasturentItems";

export const Rasturent = () => {
  const RestInitial = []
  const [RestList, setRestList] = useState(RestInitial);

  const getRestaurant = async () => {
    //Api call Fetch all restaurant
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
    getRestaurant();
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
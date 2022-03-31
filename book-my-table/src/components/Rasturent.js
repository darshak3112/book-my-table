import React from "react";
import { useEffect, useState } from "react";
import ReasturentItems from "./ReasturentItems";

export const Rasturent = () => {
  const RestInitial = []
  const [RestList, setRestList] = useState(RestInitial);

  const [searchName, setsearchName] = useState("");
  const [searchCity, setsearchCity] = useState("");
  // const [searchTableOccupancy, setsearchTableOccupancy] = useState("");

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

  const SearchName = (e) => {
    setsearchName(e.target.value)
  }

  const SearchCity = (e) => {
    setsearchCity(e.target.value)
  }

  const SearchTOccu = (e) => {
   // setsearchTableOccupancy(e.target.value)
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <h1><center>Restaurant List</center></h1>
          <hr />

          <div className="row">
            <div className="col-md-6" style={{textAlign:"center"}}>
              <input type="text" style={{width:"60%",height:"30px",borderRadius:"10px"}} placeholder="  Search Restaurant Name ..." onChange={SearchName} name="SearchRestName" id="SearchRestName" />
            </div>
            <div className="col-md-6" style={{textAlign:"center"}}>
              <input type="text" style={{width:"60%",height:"30px",borderRadius:"10px"}} placeholder="  Search City ......" onChange={SearchCity} name="SearchRestName" id="SearchRestName" />
            </div>
            {/* <div className="col-4">
              <input type="text" className="form-control" placeholder="Table occupancy..." onChange={SearchTOccu} name="SearchRestName" id="SearchRestName" />
            </div> */}
          </div>
          <div className="container">
            {RestList.length === 0 && 'No Restaurant Added'}
          </div>
          {RestList.filter((RestItem) => {
            let restname = RestItem.Name.toLowerCase();
            let restcity = RestItem.City.toLowerCase();
            let serchname = searchName.toLowerCase();
            let serchcity = searchCity.toLowerCase();
            if (searchName === "" && searchCity === "") {
              return RestItem;
            }
            else if (restname.includes(serchname) && restcity.includes(serchcity)) {
              return RestItem;
            }
          }).map((RestItem) => {
            return <ReasturentItems key={RestItem._id} RestItem={RestItem} />;
          })}
        </div>
      </div>
      <div style={{ height: "40px" }}></div>
    </>
  );
};

export default Rasturent;
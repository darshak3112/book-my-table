import React from "react";
import ReasturentItems from "./ReasturentItems";

export const Rasturent = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1><center>Rasturent List</center></h1>
          <hr />
          <div className="container">
            <ReasturentItems />
          </div>
        </div>
      </div>
      <div style={{height:"40px"}}></div>
    </>
  );
};

export default Rasturent;
import React from 'react';
import YorRestItem from './YorRestItem';

const YourRest = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1><center>Your Rasturent List</center></h1>
                    <hr />
                    <div className="container mx-3">
                        <YorRestItem />
                    </div>
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};

export default YourRest;

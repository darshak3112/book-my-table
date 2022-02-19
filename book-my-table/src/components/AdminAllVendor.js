import React from 'react'
import ListVendor from './AdminAllVendorList';
import { useState, useEffect } from 'react';

const AdminAllVendor = (props) => {

    const Initial = []
    const [Vendors, SetVendors] = useState(Initial);
    const getvendors = async () => {

        const response = await fetch("http://localhost:5000/api/admin/getvendor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token-admin": localStorage.getItem("AToken")
            },
        });
        const json = await response.json();
        console.log(json);
        SetVendors(json);
    };

    useEffect(() => {
        getvendors();
    }, []);

    const deletevendor = async (id) => {
        const response = await fetch(`http://localhost:5000/api/admin/deletevendor/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token-admin": localStorage.getItem("AToken"),
            },
        });
        const json = await response.json();
        console.log(json);
        const newvendorlist = Vendors.filter((vendor) => {
            return vendor._id !== id;
        });
        SetVendors(newvendorlist);
    }

    return (
        <>
            <div className="container">
                <div className="row" >
                    <h1><center>Vendors List</center></h1>
                    <hr />
                    <div className="container mx-3">
                        {Vendors.length === 0 && 'No Restaurant Added'}
                    </div>
                    {Vendors.map((VendorItem) => {
                        return <ListVendor key={Vendors._id} VendorItem={VendorItem} deletevendor={deletevendor} />
                    })}
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};

export default AdminAllVendor
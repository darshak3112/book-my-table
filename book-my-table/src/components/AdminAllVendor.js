import React from 'react'
import ListVendor from './AdminAllVendorList';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.success("Delete successfully",{autoClose:1000});
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
                    <table className="table table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th>Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Vendors.map((VendorItem) => {
                                return <ListVendor key={Vendors._id} VendorItem={VendorItem} deletevendor={deletevendor} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};

export default AdminAllVendor
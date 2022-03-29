import React from 'react'
import ListUser from './AdminAllUserList';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AdminAllUser = (props) => {

    const Initial = []
    const [Users, SetUsers] = useState(Initial);
    const getuser = async () => {

        const response = await fetch("http://localhost:5000/api/admin/getuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token-admin": localStorage.getItem("AToken")
            },
        });
        const json = await response.json();
        SetUsers(json);
    };

    useEffect(() => {
        getuser();
    }, []);

    const deleteUser = async (id) => {
        const response = await fetch(`http://localhost:5000/api/admin/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token-admin": localStorage.getItem("AToken"),
            },
        });
        const json = await response.json();
        toast.success("Delete successfully",{autoClose:1000});
        const newuserlist = Users.filter((user) => {
            return user._id !== id;
        });
        SetUsers(newuserlist);
    }

    return (
        <>
            <div className="container" style={{ fontFamily: 'Cormorant Garamond' }}>
                <div className="row" >
                    <h1><center>Users List</center></h1>
                    <hr />
                    <div className="container mx-3">
                        {Users.length === 0 && 'No Restaurant Added'}
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
                            {Users.map((UserItem) => {
                                return <ListUser key={Users._id} UserItem={UserItem} deleteuser={deleteUser} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};

export default AdminAllUser;
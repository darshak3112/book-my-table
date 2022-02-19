import React from 'react'
import ListUser from './AdminAllUserList';
import { useState, useEffect } from 'react';

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
        console.log(json);
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
        console.log(json);
        const newuserlist = Users.filter((user) => {
            return user._id !== id;
        });
        SetUsers(newuserlist);
    }

    return (
        <>
            <div className="container">
                <div className="row" >
                    <h1><center>Users List</center></h1>
                    <hr />
                    <div className="container mx-3">
                        {Users.length === 0 && 'No Restaurant Added'}
                    </div>
                    {Users.map((UserItem) => {
                        return <ListUser key={Users._id} UserItem={UserItem} deleteuser={deleteUser} />
                    })}
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};

export default AdminAllUser;
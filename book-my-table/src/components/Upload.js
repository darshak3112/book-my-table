import React, { useState } from 'react';
import axios from 'axios';

const User = () => {
    const [newUser, setNewUser] = useState(
        {
            name: '',
            date: '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('date', newUser.date);
        formData.append('name', newUser.name);

        axios.post('http://localhost:5000/image/add/', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }

    const handlePhoto = (e) => {
        setNewUser({ ...newUser, photo: e.target.files[0] });
    }

    return (
        <div className="container w-50" style={{ marginBottom: "20px", minWidth: "350px" }} >
            <div className="card my-5">
                <div className="card-body"></div>
                <form onSubmit={handleSubmit} style={{padding:"20px"}} encType='multipart/form-data'>
                    <div className="mb-3">
                        <label for="exampleInputfile" className="form-label">Upload File</label>
                        <input type="file" accept=".png, .jpg, .jpeg" className="form-control" id="exampleInputfile" name="photo" onChange={handlePhoto} placeholder='Upload File' />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputfilename" className="form-label">Enter File Name</label>
                        <input type="text" className="form-control" id="exampleInputfilename" name="name" value={newUser.name} onChange={handleChange} placeholder='File Name' />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputfiledate" className="form-label">Enter Date</label>
                        <input type="date" className="form-control" id="exampleInputfiledate" name="date" value={newUser.date} onChange={handleChange} placeholder='Enter Date' />
                    </div>
                    <center><button type="submit" className="btn btn-primary">Submit</button></center>
                </form>
            </div>
            <div style={{height:"40px"}}></div>
        </div>
    );
}

export default User;
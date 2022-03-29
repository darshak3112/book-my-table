import axios from 'axios';
import React, { useState } from 'react'

const User = () => {
    const [File,setFile] = useState(null);
    
    const handlephoto = (e) => {
        e.preventDefault();
        setFile(e.target.files[0])
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        var url = "http://localhost:5000/file/upload";
        
        let formData = new FormData();
        formData.append("file", File);

        axios.post(url, formData)
        .then(res => console.log(res));
      }
    
    return (
        <div className="container w-50" style={{ marginBottom: "20px", minWidth: "350px" }} >
            <div className="card my-5">
                <div className="card-body"></div>
                <form onSubmit={handleSubmit} style={{padding:"20px"}}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputfile" className="form-label">Upload File</label>
                        <input type="file" accept=".png, .jpg, .jpeg" className="form-control" id="exampleInputfile" onChange={handlephoto} name="file" placeholder='Upload File' />
                    </div>
                    <center><button type="submit" className="btn btn-primary">Submit</button></center>
                </form>
            </div>
            <div style={{height:"40px"}}></div>
        </div>
    );
}

export default User;
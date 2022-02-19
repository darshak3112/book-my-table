import React from 'react'
import image1 from "./Img/Login.png"

const AdminAllUserList = (props) => {
    const { UserItem, deleteuser } = props;

    return (
        <div className="card border-dark my-3 mx-3" style={{ border: "light", width: "93%" }}>
            <div className="card border-dark my-3 mx-2" style={{ border: "light" }}>

                <div className="row g-0">
                    <div className="col-md-4">
                        <center><img src={image1} className="img-fluid rounded-start" alt="..." style={{ height: "200px", width: "200px", marginTop: "20px" }} /></center>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-9">
                                    <center><h2 className="card-title" style={{ marginRight: "120px" }}>{UserItem.Name}</h2></center>
                                </div>
                            </div>
                            <div className="card-text" style={{ marginTop: "5px" }}>
                                <table>
                                    <tr><td><b> ID :</b> {UserItem._id}</td></tr>
                                    <tr><td><b> Email : </b>{UserItem.Email}</td></tr>
                                    <tr><td><b> Mobile Number :</b> {UserItem.Mobile_no}</td></tr>
                                    <tr><td><b> Date :</b> {UserItem.Date}</td></tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "end", marginRight: "2px" }} className="row">
                <p>
                    <i style={{ cursor: 'pointer' }} className="fas fa-trash mx-2" onClick={() => deleteuser(UserItem._id)}></i>
                </p>

            </div>
            </div>
        </div>
    )
}

export default AdminAllUserList
import React from 'react'
import "./css/Nav.css";


const Footer = () => {
    return (
        <div style={{position:"sticky",zIndex:3,marginTop:"40px"}}>
            <footer className='fixed-bottom'>
                <div id="footer1" className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                            <p style={{color:"white"}}>
                                Welcome in BookMyTable
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
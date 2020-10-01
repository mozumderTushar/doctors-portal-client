import { Button } from '@material-ui/core';
import React from 'react';

const Apointment = () => {
    return (
        <div className="my-5" style={{ backgroundColor: '#41485C'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid" src="https://i.ibb.co/xFqD6yJ/5790-removebg.png" alt=""/>
                    </div>
                    <div className="col-md-8 my-5">
                        <h2 style={{color: '#6ACECE'}}>APPOINTMENT</h2>
                        <h1 style={{color: '#fff'}}>Make an appointment
                            <br></br>
                            Today
                        </h1>
                        <p>It is a long established fact that a reader will be distracted by the readable
                            <br></br>
                            content of a page when looking at its
                        </p>
                        <Button variant="contained" color="primary">Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apointment;
import { Button } from '@material-ui/core';
import React from 'react';

const AvailableAppointment = () => {
    return (
        <div className="container text-center my-5">
            <h1>Available Appointment on February 7, 2020</h1>
            <div className="row my-5">
                <div className="col-md-4 my-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="commonColor">Teeth Orthodontics</h2>
                            <h5>8:00 - 9:00 AM</h5>
                            <p className="card-text">10 SPACE AVAILABLE</p>
                            <Button variant="contained" color="primary">BOOK APPOINTMENT</Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4  my-4">
                <div className="card">
                        <div className="card-body">
                            <h2 className="commonColor">Cosmetic Dentistry</h2>
                            <h5>8:00 - 9:00 AM</h5>
                            <p className="card-text">10 SPACE AVAILABLE</p>
                            <Button variant="contained" color="primary">BOOK APPOINTMENT</Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4  my-4">
                <div className="card">
                        <div className="card-body">
                            <h2 className="commonColor">Teeth Cleaning</h2>
                            <h5>8:00 - 9:00 AM</h5>
                            <p className="card-text">10 SPACE AVAILABLE</p>
                            <Button variant="contained" color="primary">BOOK APPOINTMENT</Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4  my-4">
                <div className="card">
                        <div className="card-body">
                            <h2 className="commonColor">Cavity Protection</h2>
                            <h5>7:00 - 8:30 AM</h5>
                            <p className="card-text">10 SPACE AVAILABLE</p>
                            <Button variant="contained" color="primary">BOOK APPOINTMENT</Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4  my-4">
                <div className="card">
                        <div className="card-body">
                            <h2 className="commonColor">Teeth Orthodontics</h2>
                            <h5>8:00 - 9:00 AM</h5>
                            <p className="card-text">10 SPACE AVAILABLE</p>
                            <Button variant="contained" color="primary">BOOK APPOINTMENT</Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4  my-4">
                <div className="card">
                        <div className="card-body">
                            <h2 className="commonColor">Teeth Orthodontics</h2>
                            <h5>8:00 - 9:00 AM</h5>
                            <p className="card-text">10 SPACE AVAILABLE</p>
                            <Button variant="contained" color="primary">BOOK APPOINTMENT</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;
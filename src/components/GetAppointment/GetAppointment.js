import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import Footer from '../Footer/Footer';
import { Button } from '@material-ui/core';

const GetAppointment = () => {
    const [selectedDate, setSelectedDate] = useState({
        bookIn: new Date(),
    });

    const handleBookInDate = (date) => {
        const newDates = {...selectedDate}
        newDates.bookIn = date;
        setSelectedDate(newDates);
    };

    const handleBooking = () => {
        
    }
    return (
        <div>
            <div className="header-bg">
                <div className="pt-3">
                    <nav className="navbar navbar-light bg-transparent">
                        <Link to='#' className="navbar-brand"></Link>
                        <div>
                            <Link to='#' className="navLinkLeft">Home</Link>
                            <Link to='#' className="navLinkLeft" >About</Link>
                            <Link to='#' className="navLinkLeft">Dental Services</Link>
                            <Link to='#' className="navLinkLeft">Reviews</Link>
                            <Link to='#' className="navLinkLeft">Blog</Link>
                            <Link to='#' className="navLinkLeft">Contact Us</Link>
                        </div>
                    </nav>
                </div>
                <div className="container my-5">
                    <div className="row ">
                        <div className="col-md-6 my-5">
                            <h1>Appointment</h1>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date picker dialog"
                                        format="dd/MM/yyyy"
                                        value={selectedDate.bookIn}
                                        onChange={handleBookInDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className="col-md-6 my-5">
                            <img className="img-fluid" src="https://i.ibb.co/vkJvbJn/Mask-Group-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container text-center my-5">
            <h1>Available Appointment on Today</h1>
            <div className="row my-5">
                <div className="col-md-4 my-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="commonColor">Teeth Orthodontics</h2>
                            <h5>8:00 - 9:00 AM</h5>
                            <p className="card-text">10 SPACE AVAILABLE</p>
                            <Link to="/patient"><Button onClick={handleBooking} variant="contained" color="primary">BOOK APPOINTMENT</Button></Link>
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
            <Footer/>
        </div>
    );
};

export default GetAppointment;
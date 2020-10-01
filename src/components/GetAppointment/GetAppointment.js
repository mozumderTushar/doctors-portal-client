import React from 'react';
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

const GetAppointment = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
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
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
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
            <AvailableAppointment/>
            <Footer/>
        </div>
    );
};

export default GetAppointment;
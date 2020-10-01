import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Apointment from '../Apointment/Apointment';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-8 p-1">
                    <div className="header-bg">
                        <div className="pt-3">
                            <nav className="navbar navbar-light bg-transparent">
                                <Link className="navbar-brand"></Link>
                                <div>
                                    <Link className="navLinkLeft" href="#">Home</Link>
                                    <Link className="navLinkLeft" href="#">About</Link>
                                    <Link className="navLinkLeft" href="#">Dental Services</Link>
                                </div>
                            </nav>
                        </div>
                        <div className="container m-5 p-5">
                            <div className="info p-5">
                                <h1>You New Smile <br></br> Starts Here</h1>
                                <p>Lorem ipsum simply dummy text of printing and
                                <br></br>
                                typesetting industry. Lorem ipsum has been the
                                <br></br>
                                industry's standard dummy text ever since the
                            </p>
                                <Link to="/appointment"><Button variant="contained" color="primary">GET APPOINTMENT</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" style={{ backgroundColor: '#3A4256', height: '100vh' }}>
                    <div className="rightNav">
                        <Link className="navLinkRight" href="#">Reviews</Link>
                        <Link className="navLinkRight" href="#">Blog</Link>
                        <Link className="navLinkRight" href="#">Contact Us</Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 ">
                       
                            <div className="header-footer-common" style={{ backgroundColor:'#1CC7C1', color:'#fff'}}>
                                <h3>Opening Hours</h3>
                                <p>Lorem ipsum is simply
                                <br></br>
                            dummy text of the pri
                            </p>
                            </div>
                    </div>
                    <div className="col-md-4 ">
                        <div>
                            <div className="header-footer-common" style={{ backgroundColor:'#3A4256', color:'#fff'}}>
                                <h3>Opening Hours</h3>
                                <p>Lorem ipsum is simply
                                <br></br>
                            dummy text of the pri
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div>
                            <div className="header-footer-common" style={{ backgroundColor:'#1CC7C1', color:'#fff'}}>
                                <h3>Opening Hours</h3>
                                <p>Lorem ipsum is simply
                                <br></br>
                            dummy text of the pri
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Services/>
            <Apointment/>
            <Testimonial/>
            <Blog/>
            <Doctors/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Header;
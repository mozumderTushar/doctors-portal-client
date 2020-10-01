import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container my-5">
        <div className="row">
            <div className="col-md-3 mt-5">
                <p><a href="#">Emergency Dental Care</a></p>
                <p> <a href="#">Check Up</a></p>
                <p><a href="#">Treatment of Personal Diseases</a></p>
                <p><a href="#">Tooth Extraction</a></p>
                <p><a href="#">Check Up</a></p>
            </div>
            <div className="col-md-3">
                <h4 className="commonColor">Services</h4>
                <p><a href="#">Emergency Dental Care</a></p>
                <p> <a href="#">Check Up</a></p>
                <p><a href="#">Treatment of Personal Diseases</a></p>
                <p><a href="#">Tooth Extraction</a></p>
                <p><a href="#">Check Up</a></p>
                <p><a href="#">Check Up</a></p>
                <p><a href="#">Check Up</a></p>
            </div>
            <div className="col-md-3">
            <h4 className="commonColor">Oral Health</h4>
                <p><a href="#">Emergency Dental Care</a></p>
                <p> <a href="#">Check Up</a></p>
                <p><a href="#">Treatment of Personal Diseases</a></p>
                <p><a href="#">Tooth Extraction</a></p>
                <p><a href="#">Check Up</a></p>
                <p><a href="#">Check Up</a></p>
                <p><a href="#">Check Up</a></p>
            </div>
            <div className="col-md-3">
                <h4 className="commonColor">Our Address</h4>
                <p><a href="#">New York - 101010 Hudson</a></p>
                <p><a href="#">Yards</a></p>
            </div>
        </div>
        <p className="text-center pt-5">Copyright 2020 All Rights Reserved</p>
        </div>
    );
};

export default Footer;
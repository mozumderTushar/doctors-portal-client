import { Button } from '@material-ui/core';
import React from 'react';
import './Services.css'

const services = () => {
    return (
        <div className="mt-5 ">
            <div className=" text-center">
                <div className="service-info">
                    <h3>Our Services</h3>
                    <h2>Services We Provide</h2>
                </div>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-4">
                            <img src="https://i.ibb.co/g3Y3Fzn/001-dental.png" alt="" />
                            <div>
                                <h3>Fluoride Treatment</h3>
                                <p>Lorem ipsum is simply dummy
                                    <br></br>
                                    printing and typesetting industry
                                    <br></br>
                                    ipsum has been the
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="https://i.ibb.co/WH7hDSv/tooth-1.png" alt="" />
                            <div>
                                <h3>Cavity Filling</h3>
                                <p>Lorem ipsum is simply dummy
                                    <br></br>
                                    printing and typesetting industry
                                    <br></br>
                                    ipsum has been the
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="https://i.ibb.co/gWp9cFg/tooth.png" alt="" />
                            <div>
                                <h3>Teeth Whitening</h3>
                                <p>Lorem ipsum is simply dummy
                                    <br></br>
                                    printing and typesetting industry
                                    <br></br>
                                    ipsum has been the
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className="img-fluid" src="https://i.ibb.co/b7Q5zcd/Mask-Group-3.png" alt=""/>
                    </div>
                    <div className="col-md-7">
                        <h1 className="my-5">Exceptional Dental
                            <br></br>
                            Care, on Your Terms
                        </h1>
                        <p className="my-5">It is a long established fact that a reader will be distracted
                            <br></br>
                            by the readable content of a page when looking at its 
                            <br></br>
                            layout. The point of using Lorem ipsum that is has
                            <br></br>
                            a more-or-less normal distribution of letters, as opposed
                            <br></br>
                            to using 'Content here, content here', making it look like 
                            <br></br>
                            readable English. Many desktop publishing packages
                            <br></br>
                            and web page
                        </p>
                        <Button variant="contained" color="primary">Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default services;


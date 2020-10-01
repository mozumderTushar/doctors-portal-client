import React from 'react';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className="container">
            <h2 className="testimonial-client">TESTIMONIAL</h2>
            <h1>What's Our Patients
                <br></br>
                Says
            </h1>
            <div className="card-deck my-5">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">It is a long established fact that
                            <br></br> 
                            by the readable content of a page when looking at its layout. 
                            <br></br>
                            The point of using Lorem ipsum that is has
                            <br></br>
                            a more-or-less normal distribution of letters, as opposed
                            <br></br>
                            to using 'Content here, content here'
                         </p>
                         <div className="d-flex">
                             <img className="img-fluid w-25" src="https://i.ibb.co/wMFJKNJ/Ellipse-1.png" alt=""/>
                             <div className="ml-3">
                                 <h5 className=" testimonial-client">Winson Herry</h5>
                                 <p>California</p>
                             </div>
                         </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <p className="card-text">It is a long established fact that
                            <br></br> 
                            by the readable content of a page when looking at its layout. 
                            <br></br>
                            The point of using Lorem ipsum that is has
                            <br></br>
                            a more-or-less normal distribution of letters, as opposed
                            <br></br>
                            to using 'Content here, content here'
                         </p>
                         <div className="d-flex">
                             <img className="img-fluid w-25" src="https://i.ibb.co/q13F2QT/Ellipse-2.png" alt=""/>
                             <div className="ml-3 testimonial-client">
                                 <h5 className="testimonial-client">Winson Herry</h5>
                                 <p>California</p>
                             </div>
                         </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <p className="card-text">It is a long established fact that
                            <br></br> 
                            by the readable content of a page when looking at its layout. 
                            <br></br>
                            The point of using Lorem ipsum that is has
                            <br></br>
                            a more-or-less normal distribution of letters, as opposed
                            <br></br>
                            to using 'Content here, content here'
                         </p>
                         <div className="d-flex">
                             <img className="img-fluid w-25" src="https://i.ibb.co/hs7LJ38/Ellipse-3.png" alt=""/>
                             <div className="ml-3 testimonial-client">
                                 <h5 className=" testimonial-client">Winson Herry</h5>
                                 <p>California</p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;


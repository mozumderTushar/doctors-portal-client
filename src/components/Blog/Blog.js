import React from 'react';

const Blog = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h2 className="testimonial-client">OUR BLOG</h2>
                <h1>From Our Blog News</h1>
            </div>
            <div className="card-deck my-5">
                <div className="card">
                    <div className="card-body" style={{ backgroundColor: '#16D2C3', color: '#fff' }}>
                        <div>
                            <h5>Rashed Kabir</h5>
                            <p style={{ color: '#fff' }}>22 Aug 2018</p>
                        </div>
                        <h3>Check at least a doctor in a
                               <br></br>
                               year for your teeth
                           </h3>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                            <img className="img-fluid w-25" src="https://i.ibb.co/wMFJKNJ/Ellipse-1.png" alt="" />
                            <div className="ml-3 testimonial-client">
                                <h5>Dr. Caudi</h5>
                                <p>23 April 2019</p>
                            </div>
                        </div>
                        <h3 className="my-3">2 times of brush in a day can
                            <br></br>
                            Keep you healthy
                        </h3>
                        <p className="card-text">
                            It is a long established fact that
                            <br></br>
                            by the readable content of a page when looking at its layout.
                            <br></br>
                            The point
                         </p>

                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                            <img className="img-fluid w-25" src="https://i.ibb.co/hs7LJ38/Ellipse-3.png" alt="" />
                            <div className="ml-3 testimonial-client">
                                <h5>Dr. John Mitchel</h5>
                                <p>23 April 2019</p>
                            </div>
                        </div>
                        <h3 className="my-3">The tooth cancer is talking a
                             <br></br>
                             challenge
                         </h3>
                        <p className="card-text">It is a long established fact that
                            <br></br>
                            by the readable content of a page when looking at its layout.
                            <br></br>
                            The point
                         </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
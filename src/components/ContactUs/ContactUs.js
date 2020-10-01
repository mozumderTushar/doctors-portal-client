import { Button } from '@material-ui/core';
import React from 'react';

const ContactUs = () => {
    return (
        <div style={{ backgroundColor: '#41495C' }}>
            <div className="container text-center p-5">
                <h2 className="commonColor">CONTACT US</h2>
                <h1 style={{ color: '#fff' }}>Always Connect With Us</h1>
                <div className="my-5">
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address*" />
                            <br></br>
                            <input type="text" class="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder="Subject*" />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message*"></textarea>
                        </div>
                    </form>
                    <Button variant="contained" color="primary" style={{ width: '150px', height: '40px' }}>Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

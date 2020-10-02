import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './PatientInfo.css'

const PatientInfo = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Enter  Your Name" />
                {errors.name && <span className="error">Name is required</span>}
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Enter  Your Email" />
                {errors.email && <span className="error">Email is required</span>}
                <input name="address" ref={register({ required: true })} placeholder="Enter  Your Address" />
                {errors.address && <span className="error">Address is required</span>}
                <input name="phone" ref={register({ required: true })} placeholder="Enter  Your Phone" />
                {errors.phone && <span className="error">Phone is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default PatientInfo;
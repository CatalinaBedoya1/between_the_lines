import React from 'react';
import './EventsSignup.css';

function EventsSignup() {
    return(
        <><div className='regsistration'>
            <div className='registertext'>
                <h2>Register Now!</h2>
                <h1>To be part of this event</h1>
                <h3>Please enter your information correctly:</h3>
            </div>
            <div className='registertext2'>
                <h4>Personal Information</h4>
                <h5>First Name</h5>
                <input className="createPostText" placeholder="Enter first name" />
                <h5>Last Name</h5>
                <input className="createPostText" placeholder="Enter last name" />
                <h5>Email Address</h5>
                <input className="createPostText" placeholder="Enter email address" />
                <h5>Phone Number</h5>
                <input className="createPostText" placeholder="Enter phone number" />
            </div>
        </div>
        <div className="registerContainer">
        <div className="nextbtn">Next</div></div></>

    );
}

export default EventsSignup;
import React from 'react';
import EventTicket from '../assets/eventticket.png';
import './EventsComplete.css';

function EventsComplete() {
    return(
        <div className='regsistrationcomplete'>
            <div className='thankyoutext'>
                <h1>Thank you for registering for the</h1>
                <h2>Webinar with Stephan King</h2>
                <h3>Please find your ticket below</h3>
            </div>
            <img src={EventTicket} alt="Event Ticket" className="EventTicket" />
            <div className='Eventbtnsrow1'>
            <div className = "downloadticket">Download Ticket</div>
            <div className = "shareticket">Share Ticket</div>
            </div>
            <div className='Eventbtnsrow2'>
            <div className = "donebtn">Done</div>
            </div>
        </div>
        
    );
}

export default EventsComplete;
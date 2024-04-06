import React from 'react';
import EventTicket from '../assets/eventticket.png';

function EventsComplete() {
    return(
        <div className='regsistrationcomplete'>
            <div className='thankyoutext'>
                <h1>Thank you for registering for the</h1>
                <h2>Webinar with Stephan King</h2>
            </div>
            <img src={EventTicket} alt="Event Ticket" className="EventTicket" />
            <div className='eventscompletebtns'></div>
                <div className = "downloadticket">Download Ticket</div>
                <div className = "shareticket">Share Ticket</div>
                <div className = "donebtn">Done</div>
        </div>
        
    );
}

export default EventsComplete;
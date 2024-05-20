import React from "react";
import Card from "./Card";
import "./Events.css";
import event1 from "../assets/bookevent1.png";
import event2 from "../assets/bookevent2.png";
import event3 from "../assets/bookevent3.png";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const EventsData = () => {
  const event = [
    {
      imageUrl: event1,
      description: "Webinar with Author Ana Huang",
    },
    {
      imageUrl: event2,
      description: "The World of Contemporary Fiction Panel",
    },
    {
      imageUrl: event3,
      description: "Workshop: Diving into the Work of Kristin Hannah",
    }
  ];

  return (
    <>
      <div className="event-header">
        <h4>Events</h4>
      </div>

      <div className="event-carousel">
        {event.map((event, index) => (
          <Link to="/community/EventsSignup" style={{textDecoration: 'none'}}>
          <Card
            key={index}
            imageUrl={event.imageUrl}
            description={event.description}
          />
          </Link>
        ))}
      </div>
      <Link to="/community/eventsPage"><SeemorebuttonHome>See More</SeemorebuttonHome></Link>
    </>
  );
};

export default EventsData; 

const SeemorebuttonHome = styled.button`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 600;
font-style: normal;
margin-bottom: 30px;
padding: 10px 40px;
    background: #F68AAF;
    color: white;
    border: 3px solid #FFF;
    border-radius: 50px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #CD6F90;
    }
`;
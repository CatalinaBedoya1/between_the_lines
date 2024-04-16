import React from "react";
import Card from "./Card";
import "./Events.css";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import { Link } from 'react-router-dom';
import styled from "styled-components";



const EventsData = () => {
  const event = [
    {
      imageUrl: event1,
      description: "Webinar with Author Stephan King",
    },
    {
      imageUrl: event2,
      description: "Literary Analysis: The World of Fiction",
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
          <Card
            key={index}
            imageUrl={event.imageUrl}
            description={event.description}
          />
        ))}
      </div>

      <Link to="/community"><SeemorebuttonHome>See More</SeemorebuttonHome></Link>
    </>
  );
};

export default EventsData; 

const SeemorebuttonHome = styled.button`
padding: 10px 40px;
    background: linear-gradient(230.28deg, #ddbfb5, #5397ac);
    color: white;
    border: 3px solid #FFF;
    border-radius: 20px;
    font-size: 18px;
    font-family: Roboto;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #0056b3;
    }
`
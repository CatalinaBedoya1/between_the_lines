import React from "react";
import Card from "./Card";
// import "./Events.css";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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
    <div className="container">

      <div className="eventHeader">
        <h4>Events</h4>
      </div>

      <div className="eventCarousel">
        {event.map((event, index) => (
          <Card
            imageUrl={event.imageUrl}
            description={event.description}
          />
        ))}
      </div>

      <div className="seemoreBtn">
            <Link to="/community" className="events-btn">See More</Link>
      </div>

    </div>
    </>
  );
};

export default EventsData; 



//style components
const container=styled.div`
  display:flex;
  flex-direction:row;
`;

const eventHeader=styled.div`
  display: flex;
  text-align: center;
  padding-top: 20px;
`;

const eventCarousel=styled.div`
  display: inline-block;
  justify-content: center;
  color: black;
  font-size: 20px;
  text-align: center; /*card*/
  width: 30;
  margin: 0 auto;
`;

const seemoreBtn=styled.div`
  font-size: medium;
  color: navy;
`;

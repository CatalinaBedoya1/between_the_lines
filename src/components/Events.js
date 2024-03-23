import React from "react";
import Card from "./Card";
import "./Events.css";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import { Link } from 'react-router-dom';



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
            imageUrl={event.imageUrl}
            description={event.description}
          />
        ))}
      </div>

      <div className="seemore-btn">
            <Link to="/community" className="events-btn">See More</Link>
      </div>
    </>
  );
};

export default EventsData; 
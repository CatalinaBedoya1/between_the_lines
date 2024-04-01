import React from "react";
import "./CurrentReadingandBCF.css";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";

const Card = ({ imageUrl, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={'{description}'} className="card-image" />
      <div className="card-content">
      <p className="card-descripton">{description}</p>
      </div>
    </div>
  );
};

const DashboardData = () => {
  const event = [
    {
      imageUrl: event1,
      description: "The Song of Achilles by Madeline Miller",
    },
    {
      imageUrl: event2,
      description: "The Seven Husbands of Evelyn Hugo by Taylor Jenkins Reid",
    },
    {
      imageUrl: event3,
      description: "The Way I Used to Be by Amber Smith",
    }
  ];

  return (
    <>
      <div className="BCF-header">
        <h4>Book Clubs: </h4>
      </div>

      <div className="dash-carousel">
        {event.map((event, index) => (
          <Card
            imageUrl={event.imageUrl}
            description={event.description}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default DashboardData;


import React from "react";
import Card from "./Card";
import "./Events.css";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";



const ArtSection = () => {
  const cats = [
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
      <h4 className="art-text" id="Art">
        Events
      </h4>
      <div className="artsection">
        {cats.map((cat, index) => (
          <Card
            key={index}
            imageUrl={cat.imageUrl}
            description={cat.description}
          />
        ))}
      </div>
    </>
  );
};


export default ArtSection;

import React from "react";
import Card from "./Card";
import "./Forums.css";
import forum1 from "../assets/forum1.png";
import forum2 from "../assets/forum2.png";
import forum3 from "../assets/forum3.png";



const ForumArtSection = () => {
  const forums = [
    {
      imageUrl: forum1,
      description: "Book of the Month: If You Could See the Sun By Ann Liang",
    },
    {
      imageUrl: forum2,
      description: "A Darker Shade of Magic by V.E. Schwab",
    },
    {
      imageUrl: forum3,
      description: "Do I Know You by Emily Wibberley & Austin Seigmud- Broka",
    }
  ];

  return (
    <>
      <h4 className="art-text" id="Art">
        Forums
      </h4>
      <div className="artsection">
        {forums.map((forum, index) => (
          <Card
            key={index}
            imageUrl={forum.imageUrl}
            description={forum.description}
          />
        ))}
      </div>
    </>
  );
};


export default ForumArtSection;

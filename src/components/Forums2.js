import React from "react";
import Card from "./Card";
import "./Forums2.css";
import forumSquare1 from "../assets/forumSquare1.png";
import forumSquare2 from "../assets/forumSquare2.png";
import forumSquare3 from "../assets/forumSquare3.png";
import forumSquare4 from "../assets/forumSquare4.png";
import forumSquare5 from "../assets/forumSquare5.png";
import forumSquare6 from "../assets/forumSquare6.png";
import forumSquare7 from "../assets/forumSquare7.png";
import forumSquare8 from "../assets/forumSquare8.png";
import { Link } from 'react-router-dom';
import styled from "styled-components";




const Forum2ArtSection = () => {
  const forums = [
    {
      imageUrl: forumSquare1,
      description: "Book of the Month: If You Could See the Sun By Ann Liang",
    },
    {
      imageUrl: forumSquare2,
      description: "A Darker Shade of Magic by V.E. Schwab",
    },
    {
      imageUrl: forumSquare3,
      description: "Do I Know You by Emily Wibberley & Austin Seigmud- Broka",
    },
    {
        imageUrl: forumSquare4,
        description: "Verity By Colleen Hoover",
      }
  ];
  const forums2ndrow = [
    {
      imageUrl: forumSquare5,
      description: "Rebecca By Daphne Du Maurier",
    },
    {
      imageUrl: forumSquare6,
      description: "Where the Crawdads Sing By Delia Owens",
    },
    {
      imageUrl: forumSquare7,
      description: "All the Light We Cannot See By Anthony Doerr",
    },
    {
        imageUrl: forumSquare8,
        description: "The Gilded Ones By Namina Forna",
      }
  ];
  return (
    <>
      <h4 className="forums2art-text" id="Art">
        Popular Book Club Forums
      </h4>
      <div className="forums2artsection">
        {forums.map((forum, index) => (
          <Card
            key={index}
            imageUrl={forum.imageUrl}
            description={forum.description}
          />
        ))}
      </div>
      <div className="forums2artsection">
        {forums2ndrow.map((forum, index) => (
          <Card
            key={index}
            imageUrl={forum.imageUrl}
            description={forum.description}
          />
        ))}
      </div>
      <Link to="/community"><SeemorebuttonForum>See More</SeemorebuttonForum></Link>
    </>
  );


};


export default Forum2ArtSection;

const SeemorebuttonForum = styled.button `
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

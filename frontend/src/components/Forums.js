import React from "react";
import Card from "./Card";
import "./Forums.css";
import forum1 from "../assets/forum1.png";
import forum2 from "../assets/forum2.png";
import forum3 from "../assets/forum3.png";
import { Link } from 'react-router-dom';
import styled from "styled-components";



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
          <Link to="/community/BookDetails">
          <Card
            key={index}
            imageUrl={forum.imageUrl}
            description={forum.description}
          />
          </Link>
        ))}
        
      </div>
      <Link to="/community"><SeemorebuttonHome>See More</SeemorebuttonHome></Link>

    </>
    
  );
};


export default ForumArtSection;


const SeemorebuttonHome = styled.button`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 400;
font-style: normal;
padding: 10px 40px;
    background: linear-gradient(230.28deg, #ddbfb5, #5397ac);
    color: white;
    border: 3px solid #FFF;
    border-radius: 20px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #0056b3;
    }
`
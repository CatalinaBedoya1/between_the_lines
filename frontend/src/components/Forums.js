import React from "react";
import Card from "./Card";
import "./Forums.css";
import forum1 from "../assets/bookforum1.png";
import forum2 from "../assets/bookforum2.png";
import forum3 from "../assets/bookforum3.png";
import { Link } from 'react-router-dom';
import styled from "styled-components";



const ForumArtSection = () => {
  const forums = [
    {
      imageUrl: forum1,
      description: "Book of the Month: If You Could See the Sun by Ann Liang",
    },
    {
      imageUrl: forum2,
      description: "The Way I Am Now by Amber Smith",
    },
    {
      imageUrl: forum3,
      description: "A Thousand Splendid Suns by Khaled Hosseini",
    }
  ];

  return (
    <>
      <h4 className="art-text" id="Art">
        Book Club Forums
      </h4>
      
      <div className="artsection">
        {forums.map((forum, index) => (
          <Link to="/community/BookDetails" style={{textDecoration: 'none'}}>
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
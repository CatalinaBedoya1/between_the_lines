import React from "react";
import Card from "./Card";
import "./Forums2.css";
import forumSquare1 from "../assets/bookforum1.png";
import forumSquare2 from "../assets/bookforum2.png";
import forumSquare3 from "../assets/bookforum3.png";
import forumSquare4 from "../assets/bookforum4.png";
import forumSquare5 from "../assets/bookforum5.png";
import forumSquare6 from "../assets/bookforum6.png";
import forumSquare7 from "../assets/bookforum7.png";
import forumSquare8 from "../assets/bookforum8.png";
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
      description: "The Way I Am Now by Amber Smith",
    },
    {
      imageUrl: forumSquare3,
      description: "A Thousand Splendid Suns by Khaled Housseini",
    },
    {
        imageUrl: forumSquare4,
        description: "Things We Hide From The Light by Lucy Score",
      }
  ];
  const forums2ndrow = [
    {
      imageUrl: forumSquare5,
      description: "The Goldfinch by Donna Tartt",
    },
    {
      imageUrl: forumSquare6,
      description: "Where the Crawdads Sing by Delia Owens",
    },
    {
      imageUrl: forumSquare7,
      description: "Book Lovers by Emily Henry",
    },
    {
        imageUrl: forumSquare8,
        description: "Wildfire by Hannah Grace",
      }
  ];
  return (
    <>
      <h4 className="forums2art-text" id="Art"
      style={{fontFamily: 'Agbalumo', fontSize: '50px', color: '#3E2D70', textAlign: 'center'}}>
        Popular Book Club Forums
      </h4>
      <div className="forums2artsection">
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
      <div className="forums2artsection">
        {forums2ndrow.map((forum, index) => (
          <Link to="/community/BookDetails" style={{textDecoration: 'none'}}>
          <Card
            key={index}
            imageUrl={forum.imageUrl}
            description={forum.description}
          />
          </Link>
        ))}
      </div>
      <Link to="/community"><SeemorebuttonForum>See More</SeemorebuttonForum></Link>
    </>
  );


};


export default Forum2ArtSection;

const SeemorebuttonForum = styled.button `
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
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
`

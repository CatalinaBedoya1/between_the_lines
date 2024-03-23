import React from 'react';
//import "./Card.css";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Card = ({ imageUrl, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={'Image of {description}'} className="cardImage" />
      <div className="cardContent">
      <p className="cardDescripton">{description}</p>
      </div>
    </div>
  );
};

export default Card;



//style component
const card = styled.div`
  border: 1px solid white;
  width: 300px;
  height: 250px;
  margin: 25px;
`;

const cardImage = styled.div` 
  border: 1px solid white;
  width: 300px;
  height: 175px;
  object-fit: cover;
`;

const cardContent = styled.div`
  padding: 15px;
`;

const cardDescription=styled.div` 
  font-size: 5px;
  align-items: center;
`;


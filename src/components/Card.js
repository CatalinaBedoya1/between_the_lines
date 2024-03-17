import React from 'react';
import "./Card.css";

const Card = ({ imageUrl, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={'Image of {description}'} className="card-image" />
      <div className="card-content">
      <p className="card-descripton">{description}</p>
      </div>
    </div>
  );
};

export default Card;

import React from 'react'
import '../App.css';
import myImage from '../assets/herosectionimage.png';
import './HeroSection.css';
import { Link } from 'react-router-dom';



function HeroSection() {
  return (
    <div className="hero-container">
      <img src={myImage} alt="Hero section background" />
      <div className="hero-content">
        <h1>Welcome to Between the Lines</h1>
        <p> A hub for a book lovers!</p>
        <Link to="/discover" className="btn">Take Quiz</Link>
      </div>
    </div>
  );
}

export default HeroSection

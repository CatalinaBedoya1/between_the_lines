import React from 'react'
import '../App.css';
import myImage from '../assets/herosectionimage.png';
import './HeroSection.css';
import { Link } from 'react-router-dom';



function HeroSection() {
  return (
    <div className="hero-container">
      <img src={myImage} alt="Hero section background" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to Between the Lines</h1>
        <p> A hub for all book lovers!</p>
        <Link to="/discover" className="btn">Take Quiz</Link>
      </div>
    </div>
  );
}

export default HeroSection

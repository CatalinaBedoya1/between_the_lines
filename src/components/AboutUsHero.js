import React from 'react'
import '../App.css';
import AboutUsImage from '../assets/AboutUsHero.png';
import './AboutUsHero.css';

function AboutUsHero() {
    return (
        <div class="container">       
        <div class="text">
        <h1>About Us</h1>
        <br></br>
          <h3>We are a team of avid readers hoping to create a safe space to join communities, find recommendations, and meet other book enthusiasts. </h3>
        </div>
        <div class="image">
          <img src={AboutUsImage} alt="Hero section image" className="hero-image" />
        </div>
      </div>
);
}

  

export default AboutUsHero
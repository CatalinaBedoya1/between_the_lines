import React from 'react'
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import msFirst from '../assets/MSIcon1.png';
import msSecond from '../assets/MSIcon2.png';
import msThird from '../assets/MSIcon3.png';
import msFourth from '../assets/MSIcon4.png';
import myImage3 from '../assets/BOTM_GROUP2.png';
import myImage2 from '../assets/ifyoucouldseethesun.png';
import BOTMButton from '../components/FixedBOTMButton';
import SplineHome from '../components/SplineHomepage';
import ScrollReveal from './ScrollReveal';

//Herosection has header, mission statements, Book of the month, events, and book forums.


function HeroSection() {
    return (
      <div>
        
        <div className="hero-container">
          <div className="SplineHomepage">
            <SplineHome/>
          </div>
        
          <div className="hero-content">
            <h1>Welcome to Between the Lines</h1>
            <p>A hub for all book lovers!</p>
            <a href="/discover/takeOurQuiz" className="HomeQuizbtn">Take Our Quiz</a>
          </div>

        
          <BOTMButton/>
          
        </div>  

       
        
        <div className="mission-section">
  <div className="text-center mission-container">
    {/* <br></br> */}
    <img src={msFirst} alt="card1" className="msimg" />
    <div className="line"></div>
    <h3 className="mission-header">Book Clubs</h3>
    <p className="mission-text">Join a huge community of book clubs OR make your own with your friends</p>
  </div>
  <div className="text-center mission-container">
    <img src={msSecond} alt="card2" className="msimg" />
    <div className="line"></div>
    <h3 className="mission-header">Forums</h3>
    <p className="mission-text">Public discussion board to share experiences, questions, and any fun topics</p>
  </div>
  <div className="text-center mission-container">
    <img src={msThird} alt="card3" className="msimg" />
    <div className="line"></div>
    <div className="mission-text">
      <h3 className="mission-header">Personalization</h3>
      <p className="mission-text">Take our book quiz to explore books based on your choices</p>
    </div>
  </div>
  <div className="text-center mission-container">
    <img src={msFourth} alt="card4" className="msimg" />
    <div className="line"></div>
    <h3 className="mission-header">Events</h3>
    <p className="mission-text">Register for a variety of online and in-person monthly events</p>
  </div>
</div>
        
        <div className="BOTM-container">
          
        <img src={myImage3} alt="Book of the month cover" className="BOTM-imageZoom" />
        <div className="BOTM-content">
          <h1>BOOK OF THE MONTH</h1>
          <h2>If You Could See the Sun</h2>
          <h3>Ann Liang</h3>
          <hr className="BOTM-divider"/>
          <p>In this genre-bending, speculative YA debut, a </p>
            <p> Chinese American girl monetizes her strange </p>
            <p>new invisibility powers by discovering and </p>
            <p> selling her wealthy classmates' most </p> 
            <p>scandalous secrets.</p>
  
          <div className="BOTM-buttons">
            <Link to="/discover/fantasy" className="btn-2">fantasy</Link>
           <Link to="/discover/fiction" className="btn-3">fiction</Link>
          </div>
          
          <img src={myImage2} alt="BOTM cover" className="BOTM-image"/>
        </div>
      </div>
     

      </div>
  );
}

  

export default HeroSection
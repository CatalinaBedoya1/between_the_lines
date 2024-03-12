import React from 'react'
import '../App.css';
import myImage from '../assets/herosectionimage.png';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import msFirst from '../assets/card1.png';
import msSecond from '../assets/card2.png';
import msThird from '../assets/card3.png';
import msFourth from '../assets/card4.png';


function HeroSection() {
  return (
    <>
    
    <div className="hero-container">
      <img src={myImage} alt="Hero section background" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to Between the Lines</h1>
        <p> A hub for all book lovers!</p>
        <Link to="/discover" className="btn">Take Quiz</Link>
      </div>
    </div>
    
    

        <div className="row">
          <div className="text-center">
            <img src={msFirst} alt="card1" className="msimg" />
            <h3 className='missionText'>Private & Public Book Clubs</h3>
            <p className='missionText'>
              Join a huge community of book clubs OR make your own with your friends
            </p>
          </div>
          <div className="text-center">
            <img src={msSecond} alt="card2" className="msimg" />
            <h3 className='missionText'>Forum Discussion</h3>
            <p className='missionText'>
              Public discussion board to share experiences, questions, and any fun topics
            </p>
          </div>
          <div className="text-center">
            <img src={msThird} alt="card3" className="msimg" />
            <h3 className='missionText'>Personalized Experience</h3>
            <p className='missionText'>Take our book quiz to explore books based on your choices</p>
          </div>
          <div className="text-center">
            <img src={msFourth} alt="card4" className="msimg" />
            <h3 className='missionText'>Events</h3>
            <p className='missionText'>Register for a variety of online and in-person monthly events</p>
          </div>
        </div>

      
      </>
  );
}

export default HeroSection
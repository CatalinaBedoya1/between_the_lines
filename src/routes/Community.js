import React from 'react';
import './Community.css';
import herosectionimage from '../assets/herosectionimage.png';
import Events from '../components/Events';
import Leaderboard from '../assets/Leaderboard.png';
import Voting from '../assets/Voting.png';
import myImage3 from '../assets/ifyoucouldseethesunzoom2.png';
import myImage2 from '../assets/ifyoucouldseethesun.png';
import Forum2ArtSection from '../components//Forums2';

export const Community = () => {
    return (
      <div className='community'>
        <div classname= 'communityheader'>
          <img src={herosectionimage} alt="HeroSection" />
          <div className='hero-community-content'>
            <h1>Welcome Jane Doe,</h1>
            <h1>Let's see what's new in the Community ...</h1>
          </div>
          </div>
        
        <Events />
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
  
          <div className="BOTM-summary">
          <p>"It makes me almost dizzy, thinking about the stark differences in realities,</p>
            <p>what will be and what could've been." </p>
          </div>
          <img src={myImage2} alt="BOTM cover" className="BOTM-image"/>
        </div>
      </div>
              
      <Forum2ArtSection/>

        <div className = "voting-container">
          <img src={Voting} alt = "voting" className ='voting-static' />
        </div>
        <div className = "voting-button">
          <div className = "vote-btn">Vote</div>
        </div>
       
        
        <Forum2ArtSection/>

    
        <div className="leaderboard-container">
            <img src={Leaderboard} alt="leaderboard" className="leaderboard-static" />
        </div>

      </div>

 
    );
  };

export const BookClubs = () => {
    return (
      <div className='bookClubs'>
        <h1>BookClubs</h1>
      </div>
    );
  };
  
  export const Discussions = () => {
    return (
      <div className='discussions'>
        <h1>Discussions</h1>
      </div>
    );
  };
  
  export const BookVoting= () => {
    return (
      <div className='bookVoting'>
        <h1>BookVoting</h1>
      </div>
    );
  };
  

export default Community;
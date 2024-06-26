import React from 'react';
import './Community.css';
import Events from '../components/Events';
import Leaderboard from '../assets/NewLeaderboard.png';
import myImage3 from '../assets/ifyoucouldseethesunzoom2.png';
import myImage2 from '../assets/ifyoucouldseethesun.png';
import Forum2ArtSection from '../components//Forums2';
import Voting from '../components/Voting';
import SplineCommunity from '../components/SplineCommunity';
import TypeAnimation from '../components/TypeAnimation';

//adding an animation component here so scroll down for Community code



export const Community = () => {
    return (
      <div className='community'>
        <div className= 'communityheader'>
          {/* <img src={communityImage} alt="CommunityHeroSection" /> */}
          
          <div className='splinecommunity'>
          <SplineCommunity/>
          </div>

          <div className='hero-community-content'>
            <h1> <TypeAnimation /></h1>
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
      
      <Voting />

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
  
  export const EventsPage= () => {
    return (
      <div className='eventsPage'>
        <h1>EventsPage</h1>
      </div>
    );
  };
  

export default Community;


import React from 'react';
import './Community.css';
import Events from '../components/Events';
import Leaderboard from '../assets/Leaderboard.png';

export const Community = () => {
    return (
      <div className='community'>
        <h1>Community</h1>


        <Events />        
      
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
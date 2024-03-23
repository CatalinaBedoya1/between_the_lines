import React from 'react';
import CommunityPicks from '../components/CommunityPicks';
import './Discover.css';

export const Discover = () => {
  return (
    <div className='discover'>
      <h1>Discover</h1>
      <CommunityPicks />


    </div>
  );
};

export const whatsTrending = () => {
  return (
    <div className='whatsTrending'>
      <h1>Discover/whatsTrending</h1>
    </div>
  );
};

export const Genres = () => {
  return (
    <div className='genres'>
      <h1>Discover/genres</h1>
    </div>
  );
};

export const takeOurQuiz = () => {
  return (
    <div className='takeOurQuiz'>
      <h1>Discover/takeOurQuiz</h1>
    </div>
  );
};

export default Discover;
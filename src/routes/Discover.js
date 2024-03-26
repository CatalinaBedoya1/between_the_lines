import React from 'react';
import QuizResults from '../components/QuizResults';
import CommunityPicks from '../components/CommunityPicks';
import './Discover.css';
import { Link } from 'react-router-dom';
import myImage3 from '../assets/ifyoucouldseethesunzoom2.png';
import myImage2 from '../assets/ifyoucouldseethesun.png';




export const Discover = () => {
  return (
    <div className='discover'>
      <h2>Welcome, <br></br> Discover What's Trending...</h2>
      <div className='btns-genres'>
        <div className='genre-row1'>
        <Link to="/discover/adventure" className="btn-adventure">adventure</Link>
        <Link to="/discover/classic" className="btn-classic">classic</Link>
        <Link to="/discover/fantasy" className="btn-fantasy">fantasy</Link>
        <Link to="/discover/fiction" className="btn-fiction">fiction</Link>
        </div> 
        <div className='genre-row2' >
        <Link to="/discover/historicalfiction" className="btn-histfiction">historical fiction</Link>
        <Link to="/discover/horror" className="btn-horror">horror</Link>
        <Link to="/discover/memoir" className="btn-memoir">memoir</Link>
        <Link to="/discover/mystery" className="btn-mystery">mystery</Link>
        </div>
        <div className='genre-row3'>
        <Link to="/discover/nonfiction" className="btn-nonfiction">non-fiction</Link>
        <Link to="/discover/poetry" className="btn-poetry">poetry</Link>
        <Link to="/discover/romance" className="btn-romance">romance</Link>
        <Link to="/discover/selfhelp" className="btn-selfhelp">self-help</Link>
        </div>
        <div className='genre-row4'>
        <Link to="/discover/thriller" className="btn-thriller">thriller</Link>
        <Link to="/discover/truecrime" className="btn-truecrime">true crime</Link>
        <Link to="/discover/youngadult" className="btn-youngadult">young adult</Link>
        <Link to="/discover/search" className="btn-search">+</Link>
        </div>
        </div>


      <QuizResults />

      {/* insert book of the month*/}
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

      <CommunityPicks/>

      




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
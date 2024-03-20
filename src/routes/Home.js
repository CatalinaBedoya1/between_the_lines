import React from 'react';

import HeroSection from '../components/HeroSection';
import Events from '../components/Events';
import './home.css';
import CommunityPicks from '../components/CommunityPicks';

// import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
        <HeroSection />
        <Events />
        <CommunityPicks/>
      </div>     
  );
}
export default Home;


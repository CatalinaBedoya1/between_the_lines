import React from 'react';

import HeroSection from '../components/HeroSection';
import Events from '../components/Events';


// import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
        <HeroSection />
        <Events />
      </div>
       
  );
}
export default Home;
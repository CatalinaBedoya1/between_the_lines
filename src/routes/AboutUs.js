import React from 'react';
import AboutUsHero from '../components/AboutUsHero';
import AboutUsBody from '../components/AboutUsBody';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="aboutus">
        <AboutUsHero />
        <AboutUsBody />

      </div>  
    );
}

export default AboutUs;
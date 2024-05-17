import React, { useState, useEffect } from 'react';
import LoadingScreenImg from '../assets/LoadingScreenImg.png' // Import your loading image
import './LoadingScreen.css';
const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#3D326F' }}>
      {/* Container for image and loading dots */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Loading image */}
        <img src={LoadingScreenImg} alt="Loading" style={{ marginBottom: '20px' }} />

        {/* Loading dots */}
        <div style={{ display: 'flex' }}>
          <div className="loading-dot" style={{ animationDelay: '0.1s' }}></div>
          <div className="loading-dot" style={{ animationDelay: '0.2s' }}></div>
          <div className="loading-dot" style={{ animationDelay: '0.3s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;



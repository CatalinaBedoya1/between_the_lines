import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
        <div className="welcome-section">
            <h2> Welcome to Between the Lines</h2>
            <p>A hub for all book lover!</p>
            <div className="btn-box">
              <Link to="/discover" className="btn">Take Quiz</Link>
            </div>
        </div>
    </div>
  );
}
export default Home;
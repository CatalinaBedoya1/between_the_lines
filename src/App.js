import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Navigate} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Discover from './routes/Discover';
import Audiobooks from './routes/Audiobooks';
import AudiobookDetails from './routes/AudiobookDetails';
import WhatsTrending from './routes/WhatsTrending';
import TakeOurQuiz from './routes/TakeOurQuiz';
import Community, { BookClubs } from './routes/Community';
import Discussions from './routes/Discussions';
import EventsPage from './routes/EventsPage';
import EventsComplete from './routes/EventsComplete';
import EventsSignup from './routes/eventsSignup';
import BookDetails from './routes/BookDetails';
import Dashboard from './routes/Dashboard';
import AboutUs from './routes/AboutUs';
import Login from './routes/Login';
import Register from './routes/Register';
import Quiz from './routes/Quiz';
import SearchResultsPage from './routes/SearchResultsPage';
import "react-toastify/dist/ReactToastify.css";

import { toast } from 'react-toastify';
import './App.css';

toast.configure();

function App () {
  //functions for our loading screen (dont modify when you add design)
 
 
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:4000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };


  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/register" element={<Register setAuth={setAuth} />} />
        <Route path="/dashboard" element={<Dashboard setAuth={setAuth} />} />

        {isAuthenticated && (
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/discover/audiobooks" element={<Audiobooks />} />
            <Route path="/discover/audiobooksDetails" element={<AudiobookDetails />} />
            <Route path="/discover/whatsTrending" element={<WhatsTrending />} />
            <Route path="/discover/takeOurQuiz" element={<TakeOurQuiz />} />
            <Route path="/discover/searchResultsPage" element={<SearchResultsPage />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/bookClubs" element={<BookClubs />} />
            <Route path="/community/discussions" element={<Discussions />} />
            <Route path="/community/EventsPage" element={<EventsPage />} />
            <Route path="/community/eventsComplete" element={<EventsComplete />} />
            <Route path="/community/EventsSignup" element={<EventsSignup />} />
            <Route path="/community/BookDetails" element={<BookDetails />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/quiz" element={<Quiz />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}



const AppLayout = () => (
  <>
    <Sidebar />
    <Outlet />
    <Footer />
  </>
);

export default App;






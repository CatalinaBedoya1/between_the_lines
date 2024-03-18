import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import './App.css';

const AppLayout = () => (
  <>
 
    <Sidebar />
    <div className="content">
      <Outlet />
    </div>
    <Footer />
  </>
);

export default AppLayout;


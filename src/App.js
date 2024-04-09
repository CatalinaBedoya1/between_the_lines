import React from 'react';
import { Outlet } from 'react-router-dom';


import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import './App.css';

const AppLayout = () => (
  <>
 
    <Sidebar />
      <Outlet />
    <Footer />
  </>
);

export default AppLayout;


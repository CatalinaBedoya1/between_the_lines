import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from './components/Footer'; 
import "./App.css";

const AppLayout = () => (
    <>
        <Navbar />
        <HeroSection />
        <Outlet />
        <Footer />
    </>
);


export default AppLayout;

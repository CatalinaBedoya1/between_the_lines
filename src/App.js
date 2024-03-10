import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'; 
import "./App.css";

const AppLayout = () => (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
);


export default AppLayout;

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Discover from "./routes/Discover";
import Home from "./routes/Home";
import Community from "./routes/Community";
import Dashboard from "./routes/Dashboard";
import AboutUs from "./routes/AboutUs";
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

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<AppLayout />}>
        <Route path="/" element={<Home />}  />
        <Route path="/discover" element={<Discover />}  />
        <Route path="/community" element={<Community />}  />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aboutus" element={<AboutUs />} />
    </Route>
))

//const router = createBrowserRouter([
    //{
//element: <AppLayout/>,
//children: [
   // {
      //  path: "/",
       // element: <Home />
     // },
   //   {
      //  path: "products",
     //   element: <Products />,
     // },
     // {
     //   path: "reports",
    //    element: <Reports />,
    //  },
   // ]
   // },
  
//]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
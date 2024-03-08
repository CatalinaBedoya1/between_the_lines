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
import AppLayout from "./App";
import Discover from "./routes/Discover";
import Home from "./routes/Home";
import Community from "./routes/Community";
import Dashboard from "./routes/Dashboard";
import AboutUs from "./routes/AboutUs";
import "./App.css";


const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<AppLayout />}>
        <Route path="/" element={<Home />}  />
        <Route path="/discover" element={<Discover />}  />
        <Route path="/community" element={<Community />}  />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aboutus" element={<AboutUs />} />
    </Route>
))



createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
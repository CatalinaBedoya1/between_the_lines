import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  //Link,
  //Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./App";

import Home from "./routes/Home";
import Discover from "./routes/Discover";
import WhatsTrending from "./routes/WhatsTrending";
import TakeOurQuiz from "./routes/TakeOurQuiz";
import Community, { BookClubs, BookVoting, Discussions } from "./routes/Community";

import Dashboard from "./routes/Dashboard";
import AboutUs from "./routes/AboutUs";
import Login from "./routes/Login";
import SignUpPage from "./routes/SignUpPage";
import Quiz from "./routes/Quiz";
import "./App.css";
import SearchResultsPage from "./routes/SearchResultsPage";





const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<AppLayout />}>
        <Route path="/home" element={<Home />}  />
        <Route path="/discover" element={<Discover />}  />
        <Route path="/discover/whatsTrending" element={<WhatsTrending />} />
        <Route path="/discover/takeOurQuiz" element={<TakeOurQuiz />} /> 
        <Route path="/discover/searchResultsPage" element={<SearchResultsPage />} />
        <Route path="/community" element={<Community />}  />
        <Route path="/community/bookClubs" element={<BookClubs />}  />
        <Route path="/community/discussions" element={<Discussions />}  />
        <Route path="/community/bookVoting" element={<BookVoting />}  />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/quiz" element={<Quiz />} />

        

    </Route>
))



createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />

);
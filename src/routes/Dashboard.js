import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashboardRecs from "../components/DashboardRecs";
import QuizRecs from "../components/QuizResults";
import DashIcon from "../assets/dashboardicon.png";
import CurrentReading from "../assets/Dashprofile.png";
import './Dashboard.css';
import Sidebar from "../components/Sidebar"; // Import Sidebar component
import Footer from "../components/Footer";


const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:4000/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
      <Sidebar /> 
      <div className="dashboard">
        <img src={DashIcon} alt="DashboardIcon" className="Dashboard-Icon" />
        <div className="bio">
          <div>
            <h1 className="mt-5">Dashboard</h1>
            <h2>Welcome {name}</h2>
            <button onClick={e => logout(e)} className="btn btn-primary">
              Logout
            </button>
          </div>
          <h2>Joined March 2024</h2>
          <p>24 | Constantly lost in fictional worlds | Avid Romance Reader</p>
        </div>
        <div className="editbutton">Edit Profile</div>
        <div className="currentreading">
          <img src={CurrentReading} alt="currentreading" className="currentreading-static" />
          <div className="updateprogressbtn">Update Progress</div>
          <div className="chat1">Chat</div>
          <div className="chat2">Chat</div>
          <div className="chat3">Chat</div>
        </div>
        <DashboardRecs />
        <div className="topgenres">
          <p>My Top Genres:</p>
          <div className="topgenre1">Fiction</div>
          <div className="topgenre2">Romance</div>
          <div className="topgenre3">Thriller</div>
          <div className="topgenre4">Historical Fiction</div>
          <div className="topgenre5">Fantasy</div>
        </div>
        <div className="quizResult">
          <br />
          <div className="quizresultheader">
            <p>My Recommended Books:</p>
          </div>
          <QuizRecs />
        </div>
      </div>
      <Footer /> 
    </>
  );
};

export default Dashboard;
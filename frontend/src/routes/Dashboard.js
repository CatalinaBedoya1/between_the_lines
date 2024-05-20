import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashboardRecs from "../components/DashboardRecs";
import QuizRecs from "../components/QuizResults";
import DashIcon from "../assets/dashboardicon.png";
import CurrentReading from "../assets/Dashprofile.png";
import './Dashboard.css';
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EditProfileForm from "../components/EditProfileForm";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("");
  const [userId, setUserId] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:4000/dashboard/", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      console.log("Parsed Data:", parseData);
      setName(parseData.user_name);
      setBio(parseData.bio);
      setUserId(parseData.user_id);
    } catch (err) {
      console.error(err.message);
    }
  };

  const navigate = useNavigate();

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleSaveProfile = async (newBio) => {
    try {
      const res = await fetch(`http://localhost:4000/user-profiles/${userId}`, {
        method: "PUT",
        headers: {
          jwt_token: localStorage.token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ bio: newBio })
      });

      if (res.ok) {
        const parseRes = await res.json();
        setBio(parseRes.bio);
        toast.success("Profile updated successfully");
        setIsEditing(false);
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (err) {
      console.error(err.message);
      toast.error("Failed to update profile");
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      <Sidebar /> 
      <div className="dashboard">
        <img src={DashIcon} alt="DashboardIcon" className="Dashboard-Icon" />
        <div className="bio">
          <div>
            <h1 className="mt-5">Dashboard</h1>
            <h2>Welcome {name}</h2>
          </div>
          <h2>Joined March 2024</h2>
          <p>{bio}</p>
        </div>

        <ButtonGroup>
          <LogoutButton onClick={logout}>Logout</LogoutButton>
          {!isEditing && (
            <EditButton onClick={handleEditClick}>Edit Profile</EditButton>
          )}
        </ButtonGroup>

        {isEditing && (
          <EditProfileForm
            initialBio={bio}
            onSave={handleSaveProfile}
            onClose={() => setIsEditing(false)}
          />
        )}

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

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: 900px;
`;

const EditButton = styled.div`
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  padding: 10px 30px;
  border-radius: 50px;
  color: #ffffff;
  background: #F68AAF;
  font-size: 25px;
  margin-bottom: 50px;
  margin-left: 20px;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  padding: 10px 30px;
  border-radius: 50px;
  color: #ffffff;
  background-color: #F68AAF;
  margin-bottom: 50px;
  cursor: pointer;
  font-size: 25px;
  border: none;
`;

export default Dashboard;

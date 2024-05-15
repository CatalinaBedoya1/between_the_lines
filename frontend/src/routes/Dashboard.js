import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashboardRecs from "../components/DashboardRecs";
import QuizRecs from "../components/QuizResults";
import DashIcon from "../assets/dashboardicon.png";
import CurrentReading from "../assets/Dashprofile.png";
import './Dashboard.css';
import Sidebar from "../components/Sidebar"; // Import Sidebar component
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import EditProfileForm from "../components/EditProfileForm";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [userId, setUserId] = useState(""); // State to store the user ID

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:4000/dashboard/", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.user_name);
      setBio(parseData.bio); // Set bio state
      setProfilePic(parseData.profile_pic);
      setUserId(parseData.user_id); // Set user ID state
    } catch (err) {
      console.error(err.message);
    }
  };

  const navigate = useNavigate();

  const logout = async e => {
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

  const handleSaveProfile = async (newBio, newProfilePic) => {
    try {
      // Call API endpoint to update user profile with new bio and profile picture
      const res = await fetch(`http://localhost:4000/profile/${userId}/bio`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          jwt_token: localStorage.token,
        },
        body: JSON.stringify({ bio: newBio, profile_pic: newProfilePic }),
      });
  
      const parseRes = await res.json();
  
      // Update bio and profilePic states
      setBio(parseRes.bio);
      setProfilePic(parseRes.profile_pic);
  
      // Show success message
      toast.success("Profile updated successfully");
  
      // Close the edit profile form
      setIsEditing(false);
    } catch (err) {
      console.error(err.message);
      // Handle error
      toast.error("Failed to update profile");
    }
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
          <EditButton onClick={() => setIsEditing(true)}>Edit Profile</EditButton>
        </ButtonGroup>

        {isEditing && (
          <div className="modal-overlay">
            <EditProfileForm
              bio={bio}
              profilePic={profilePic}
              onSave={handleSaveProfile}
              onClose={() => setIsEditing(false)}
            />
          </div>
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
  background: #DA92AC;
  font-size: 25px;
  margin-bottom: 50px;
  margin-left: 20px; /* Adjust the margin as needed */
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
  background-color: #DA92AC;
  margin-bottom: 50px;
  cursor: pointer;
  font-size: 25px;
  border: none;
`;



export default Dashboard;
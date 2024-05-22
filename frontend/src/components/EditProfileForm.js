import React, { useState } from "react";
import styled from "styled-components";

const ProfileForm = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 5px solid #F68AAF; /* Added pink border */
`;

const ProfileTitle = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Agbalumo", system-ui;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #3E2D70;
  font-size: 35px;
`;

const ProfileTextInput = styled.input`
  margin-top: 5px;
  width: calc(100% - 1rem);
  padding: 0.5rem;
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: #3E2D70;
  border: none; /* Removed border */
`;

const ProfileSubtitle = styled.span`
  font-weight: bold;
  font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
color: #3E2D70;
font-size: 24px;
margin-left: 10px;
`;

const ProfilePicContainer = styled.div`
  margin-bottom: 1rem;
  font-size: 16px;
  font-optical-sizing: auto;
font-weight: 400;
font-style: normal;
color: #3E2D70;
margin-left: 10px;
`;

const ProfileButton = styled.button`
  background-color: #B0507F;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: block;
  margin: 0 auto; /* Centered the button */
`;
const ErrorText = styled.p`
  color: red;
`;

const SuccessText = styled.p`
  color: green;
`;

const EditProfileForm = ({ initialBio, onSave, onClose }) => {
  const [bio, setBio] = useState(initialBio);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!bio.trim()) {
      setError("Bio cannot be empty");
      return;
    }

    try {
      await onSave(bio);
      // Simulating profile picture upload
      setTimeout(() => {
        setSuccess("Profile updated successfully");
      }, 2000);
      onClose();
    } catch (error) {
      console.error("Error updating bio:", error);
      setError("Error updating bio");
    }
  };

  return (
    <ProfileForm onSubmit={handleSubmit}>
      <ProfileTitle>Edit Profile</ProfileTitle>
      <div>
        <ProfileSubtitle>Bio:</ProfileSubtitle>
        <ProfileTextInput
          type="text"
          value={bio}
          onChange={handleBioChange}
          placeholder="Enter your bio..."
        />
      </div>
      <div>
        <ProfileSubtitle>Profile Pic:</ProfileSubtitle>
        <ProfilePicContainer>
          <p>Sorry, this feature is under development.</p>
        </ProfilePicContainer>
      </div>
      <ProfileButton type="submit">Save</ProfileButton>
      {error && <ErrorText>{error}</ErrorText>}
      {success && <SuccessText>{success}</SuccessText>}
    </ProfileForm>
  );
};

export default EditProfileForm;

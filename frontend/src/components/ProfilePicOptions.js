import React from "react";
import styled from "styled-components";
import profilePic1 from "../assets/profileoption.png";
import profilePic2 from "../assets/profileoption2.png";
import profilePic3 from "../assets/profileoption3.png";

const ProfilePicsContainer = styled.div`
  display: flex;
`;

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 10px;
  cursor: pointer;
`;

const ProfilePicOptions = ({ handleSelectProfilePic }) => {
  return (
    <ProfilePicsContainer>
      <ProfilePic src={profilePic1} onClick={() => handleSelectProfilePic(profilePic1)} />
      <ProfilePic src={profilePic2} onClick={() => handleSelectProfilePic(profilePic2)} />
      <ProfilePic src={profilePic3} onClick={() => handleSelectProfilePic(profilePic3)} />
    </ProfilePicsContainer>
  );
};

export default ProfilePicOptions;

import React, { useState } from "react";
import styled from "styled-components";

const EditProfileForm = ({ bio, profilePic, onSave, onClose }) => {
  const [newBio, setNewBio] = useState(bio);
  const [newProfilePic, setNewProfilePic] = useState(profilePic);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a FormData object to send bio and profile picture as multipart/form-data
    const formData = new FormData();
    formData.append("bio", newBio);
    formData.append("profile_pic", newProfilePic);

    try {
      // Call the onSave function passed from the parent component
      await onSave(formData);
      // Close the edit profile form
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" value={newBio} onChange={(e) => setNewBio(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <label htmlFor="profilePic">Profile Picture:</label>
            <input type="file" id="profilePic" onChange={(e) => setNewProfilePic(e.target.files[0])} />
          </FormGroup>
          <ButtonContainer>
            <SubmitButton type="submit">Save</SubmitButton>
            <CancelButton type="button" onClick={onClose}>Cancel</CancelButton>
          </ButtonContainer>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  width: 80%;
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default EditProfileForm;

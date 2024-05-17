import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  width: 100%;
  margin-bottom: 0.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SaveButton = styled(Button)`
  background-color: #4caf50;
  color: white;
`;

const CancelButton = styled(Button)`
  background-color: #f44336;
  color: white;
`;

const EditProfileForm = ({ onSave, onClose, initialBio, initialProfilePic }) => {
  const [bio, setBio] = useState(initialBio);
  const [profilePic, setProfilePic] = useState(initialProfilePic);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(bio, profilePic);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Edit Profile</Title>
        <FormContainer onSubmit={handleSubmit}>
          <Label htmlFor="bio">Bio:</Label>
          <TextArea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="4"
          ></TextArea>
          <Label htmlFor="profilePic">Profile Picture:</Label>
          <Input
            type="file"
            id="profilePic"
            onChange={(e) => setProfilePic(e.target.files[0])}
          />
          <ButtonGroup>
            <SaveButton type="submit">Save</SaveButton>
            <CancelButton type="button" onClick={onClose}>Cancel</CancelButton>
          </ButtonGroup>
        </FormContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditProfileForm;







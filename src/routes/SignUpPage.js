import React from 'react';
import styled from 'styled-components';

import SignUpImage from '../assets/SignUpImage.png';



const SignUpPage = () => {
  // Function to handle sign up
  const handleSignUp = () => {
    // Perform sign up logic
    // If sign up is successful, navigate to another page or display a success message
  };

  return (
    <Container>
      <FormContainer>
        <Title>Sign Up</Title>
        <Form>
          <Row>
          <InputContainer>
            
            <Input type="text" placeholder="First Name" />
          </InputContainer>
          <InputContainer>
            
            <Input type="text" placeholder="Last Name" />
          </InputContainer>
          </Row>
          <InputContainer>
            
            <Input type="email" placeholder="Email" />
          </InputContainer>
          <Row>
          <InputContainer>
            
            <Input type="text" placeholder="Username" />
          </InputContainer>
          <InputContainer>
            
            <Input type="password" placeholder="Password" />
          </InputContainer>
          <InputContainer>
            
            <Input type="password" placeholder="Confirm Password" />
          </InputContainer>
          </Row>
          <Button type="button" onClick={handleSignUp}>Sign Up</Button>
        </Form>
        <LoginLink>Already have an account? <a href="/login">Login</a></LoginLink>
      </FormContainer>
      <BottomImage src={SignUpImage} alt="SignUpImage" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(230.28deg, #ddbfb5, #5397ac);
`;

const FormContainer = styled.div`
  background-color: #f4f4f4;
  padding: 70px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const BottomImage = styled.img`
  position: absolute;
  right: 120px;
  bottom: 320px; /* Adjust the distance from the bottom */
  width: auto;
  height: 50%;
  margin-top: 0;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 45px;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 0px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  gap: 20px; /* Adjust the gap between inputs */
  margin-bottom: 10px; /* Add margin between rows */
  width:100%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  width: 100%;
  flex: 1;
  margin-right: 10px;
`;


const Input = styled.input`
  width: 100%;
  font-size: 1.1rem;
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  margin-right: 10px;
`;

const Button = styled.button`
padding: 10px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 1.1rem;

&:hover {
  background-color: #0056b3;
}
`;

const LoginLink = styled.p`
  text-align: center;
  margin-top: 25px;
`;

export default SignUpPage;

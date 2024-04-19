import React from 'react';
import styled from 'styled-components';

import loginImage from '../assets/loginImage.png';
import loginBgImg from '../assets/loginBgImg.png';
import loginIcon1 from '../assets/loginIcon1.svg';
import loginIcon2 from '../assets/loginIcon2.svg';
import signupIcon1 from '../assets/signupIcon1.svg';
import signupIcon2 from '../assets/signupIcon2.svg';


const SignUpPage = () => {
  //const handleCheckboxChange = () => {
    //setNewsletter(!newsletter);
 // };

  const handleSignUp = () => {
    // Perform sign up logic, this is afterr we get auth0 working
    
  };

  return (
    <SignUpContainer>
      <BackgroundImage src={loginBgImg} alt="LoginBgImg" />
      <SignUpFormContainer>
        <SignupTitle>Sign Up</SignupTitle>
        <SignupForm>
        <SignUpTitleText1>Enter Email</SignUpTitleText1>
          <SignUpInputContainer1>
       
            <img src={loginIcon1} alt="loginIcon1" />
           
            <Input type="email" placeholder="Type your email" />
          </SignUpInputContainer1>

          <SignUpTitleText2>Enter Username</SignUpTitleText2>
          <SignUpInputContainer2>
          <img src={loginIcon2} alt="loginIcon2" />
            <Input type="text" placeholder="Type your username" />
          </SignUpInputContainer2>

          <SignUpTitleText3>Enter Password</SignUpTitleText3>
          <SignUpInputContainer3>
            <img src={signupIcon1} alt="signupIcon1" />
            <Input type="password" placeholder="Type your password" />
          </SignUpInputContainer3>
          <SignUpTitleText4>Confirm Password </SignUpTitleText4>
          <SignUpInputContainer4>
          <img src={signupIcon1} alt="signupIcon1" />
            <Input type="password" placeholder="Type your password" />
          </SignUpInputContainer4>
        
          <CheckboxContainer>
            <CheckSquare type="checkbox" />
            <CheckboxLabel>Sign Up for our Newsletter</CheckboxLabel>
          </CheckboxContainer>

          


          <Button type="button" onClick={handleSignUp}>Sign Up</Button>
        </SignupForm>
        <LoginLink>Already have an account? <a href="/login">Login</a></LoginLink>
      </SignUpFormContainer>
      <BottomImage src={loginImage} alt="LoginImage" />
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 900px;
width: 100vw;
 
`;
const BackgroundImage = styled.img`
  position: absolute;
  
  left: 0;
  width: 100%;
  height: 900px;
  z-index: 0; /* Set z-index to 0 */
`;

const SignUpFormContainer = styled.div`
background-color: #FFFFFF;
border-radius: 50px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
z-index: 1;
text-align: left;
width: auto;
height: 600px;
padding: 20px;
margin-top: 100px;
`;
const BottomImage = styled.img`
position: absolute;
margin-bottom: 685px;
align-items: center;
width: auto;
height: 26%;
z-index: 6;
object-fit: cover;
`;

const SignupTitle = styled.h2`
font-size: 30px;
font-family: Roboto;
text-align: center;
margin-top: 0px;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SignUpTitleText1 = styled.p`
  margin-right: 270px;
  font-size: 16px;
  margin-top: 20px;
  
  color: #000000;
  font-family: Roboto;
  font-weight: bold;
`;
const SignUpTitleText2 = styled.p`
  font-size: 16px;
  margin-top: 20px;
  margin-right: 240px;
  color: #000000;
  font-family: Roboto;
  font-weight: bold;
`;
const SignUpTitleText3 = styled.p`
  font-size: 16px;
  margin-top: 20px;
  margin-right: 244px;
  color: #000000;
  font-family: Roboto;
  font-weight: bold;
`;
const SignUpTitleText4 = styled.p`
  font-size: 16px;
  margin-top: 20px;
  margin-right: 225px;
  color: #000000;
  font-family: Roboto;
  font-weight: bold;
`;

const SignUpInputContainer1 = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
margin-right: 40px;
`;
const SignUpInputContainer2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-right: 40px;
`;

const SignUpInputContainer3 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-right: 40px;
`;
const SignUpInputContainer4 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-right: 40px;
`;




const Input = styled.input`
border: none;
outline: none;
font-size: 1.1rem;
font-family: Roboto;
border-bottom: 1px solid #000000;
width: 280px;
padding: 10px;
margin-left: 10px;

`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-right: 20px;
`;

const CheckSquare = styled.input`
  margin-right: 10px;
  margin-right: 10px;

  &:checked {
    accent-color: #F68AAF;
    border-color: #F68AAF;
  }
`;

const CheckboxLabel = styled.label`
  font-size: 18px;
`;

const Button = styled.button`
  height: 40px;
  width: 250px;
  background: #F68AAF;
  color: #fff;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 22px;
  font-family: Roboto;
  margin-top: 25px;

  &:hover {
    background-color: #897AD5;
  }
`;


const LoginLink = styled.p`
  text-align: center;
  margin-top: 15px;
  a {
    color: #F68AAF;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

`;

export default SignUpPage;

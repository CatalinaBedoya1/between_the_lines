import React from 'react';
import styled from 'styled-components';
import loginImage from '../assets/loginImage.png';
import { Link } from 'react-router-dom';
import loginBgImg from '../assets/loginBgImg.png';
import loginIcon from '../assets/loginIcon.svg';
import loginIcon2 from '../assets/loginIcon2.svg';
import signupIcon1 from '../assets/signupIcon1.svg';




const Login = () => {


  const handleLogin = () => {

  };

  return (
    <Container>
      <BackgroundImage src={loginBgImg} alt="loginBgImg" />

      <FormContainer>
        <Title>Login</Title>
        <Form>
        <TitleText1>Username</TitleText1>
          <InputContainer1>
            <Icon>
            <img src={loginIcon} alt="loginIcon" />
            </Icon>
            <Input type="text" placeholder="Type your username" />
          </InputContainer1>
          <TitleText2>Password</TitleText2>
          <InputContainer2>
            <Icon>
            <img src={signupIcon1} alt="signupIcon1" />
            </Icon>
            <Input type="password" placeholder="Type your password" />
          </InputContainer2>

          <ForgotPasswordLink to="/forgot-password">Forgot password?</ForgotPasswordLink>

          <Button type="button" onClick={handleLogin}>Login</Button>
        </Form>
        <SignupLink>Don't have an account? <Link to="/signup">Sign Up</Link></SignupLink>
      </FormContainer>
      <BottomImage src={loginImage} alt="LoginImage" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 890px;
  width: 100vw;
`;

const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  width: 100vw;
  height: 890px;
  z-index: 0;
`;

const FormContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
  text-align: left;
  width: auto;
  height: 430px;
  padding: 20px;
`;

const BottomImage = styled.img`
  position: absolute;
  margin-bottom: 630px;
  align-items: center;
  width: auto;
  height: 28%;
  z-index: 6;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 30px;
  font-family: Roboto;
  text-align: center;
  margin-top: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleText1 = styled.p`
  margin-right: 220px;
  font-size: 19px;
  margin-top: 20px;
  
  color: #000000;
  font-family: Roboto;
  font-weight: bold;
`;
const TitleText2 = styled.p`
  font-size: 19px;
  margin-top: 20px;
  margin-right: 220px;
  color: #000000;
  font-family: Roboto;
  font-weight: bold;
`;


const InputContainer1 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const InputContainer2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Icon = styled.span`
  margin-right: 10px;
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
  margin-top: 50px;

  &:hover {
    background-color: #897AD5;
  }
`;

const SignupLink = styled.p`
  text-align: center;
  margin-top: 20px;

  a {
    color: #F68AAF;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ForgotPasswordLink = styled(Link)`
  text-align: left;
  margin-top: 10px;
  margin-left: 220px;
  color: #000000;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Login;

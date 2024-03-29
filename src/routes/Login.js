import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import loginImage from '../assets/loginImage.png';
import { Link } from 'react-router-dom';


const Login = () => {


  const handleLogin = () => {

  };

    return (
      <Container>
        <FormContainer>
          <Title>Login</Title>
          <Form>
            <Label>Username</Label>
            <InputContainer>
              <Icon>
                <FontAwesomeIcon icon={faUser} />
              </Icon>
              <Input type="text" placeholder="Type your username" />
            </InputContainer>
            <Line />
            <Label>Password</Label>
            <InputContainer>
              <Icon>
                <FontAwesomeIcon icon={faLock} />
              </Icon>
              <Input type="password" placeholder="Type your password" />
            </InputContainer>
            <Line />
            <ForgotPasswordLink>Forgot password?</ForgotPasswordLink>
            <Link to="/home">
            <Button type="button" onClick={handleLogin}>Login</Button>
            </Link>
          </Form>
          <SignupLink>Don't have an account? <a href="/signup">Sign Up</a></SignupLink>
        </FormContainer>
        <BottomImage src={loginImage} alt="LoginImage" />

      </Container>
    );
  };




const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(230.28deg, #ddbfb5, #5397ac);

`;

const FormContainer = styled.div`
  background-color: #f3f3f3;
  padding: 70px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

`;

const BottomImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 170px;
  width: auto;
  height: 50%;
  z-index: 6;
  object-fit: cover;

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

const Label = styled.b`
  margin-bottom: 10px;
  text-align: left;
  margin-right: 110px;

`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.1rem;
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
`;
const Line = styled.hr`
  border: 0.5px solid #ccc;
  margin: 10px 0;
`;

const Button = styled.button`
  padding: 10px;
  width: 200px;
  background: linear-gradient(230.28deg, #ddbfb5, #5397ac);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.3rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignupLink = styled.p`
  text-align: center;
  margin-top: 25px;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const ForgotPasswordLink = styled.b`
  text-align: left;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
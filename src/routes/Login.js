import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import loginImage from '../assets/loginImage.png';

const Login = () => {
    return (
      <Container>
        <FormContainer>
          <Title>Login</Title>
          <Form>
            <InputContainer>
              <Icon>
                <FontAwesomeIcon icon={faUser} />
              </Icon>
              <Input type="text" placeholder="Type your username" />
            </InputContainer>
            <InputContainer>
              <Icon>
                <FontAwesomeIcon icon={faLock} />
              </Icon>
              <Input type="password" placeholder="Type your password" />
            </InputContainer>
            <Button type="submit">Login</Button>
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
`;

const FormContainer = styled.div`
  background-color: #f4f4f4;
  padding: 70px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

`;

const BottomImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 120px;
  width: auto;
  height: 50%;

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
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
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

const SignupLink = styled.p`
  text-align: center;
  margin-top: 25px;
`;


export default Login;
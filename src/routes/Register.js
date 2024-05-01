import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from 'styled-components';

import loginBgImg from '../assets/loginBgImg.png';
import loginIcon1 from '../assets/loginIcon1.svg';
import loginIcon2 from '../assets/loginIcon2.svg';
import signupIcon1 from '../assets/signupIcon1.svg';

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  });

  const { email, password, name } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch(
        "http://localhost:4000/authentication/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Register Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <SignUpContainer>
      <BackgroundImage src={loginBgImg} alt="LoginBgImg" />
      <SignUpFormContainer>
        <SignupTitle>Sign Up</SignupTitle>
        <SignupForm onSubmit={onSubmitForm}>
          <SignUpTitleText1>Enter Email</SignUpTitleText1>
          <SignUpInputContainer>
            <img src={loginIcon1} alt="loginIcon1" />
            <Input
              type="text"
              placeholder="Type your email"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              className="form-control my-3"
            />
          </SignUpInputContainer>
          <SignUpTitleText2>Enter Username</SignUpTitleText2>
          <SignUpInputContainer>
            <img src={loginIcon2} alt="loginIcon2" />
            <Input
              type="text"
              placeholder="Type your username"
              name="name"
              value={name}
              onChange={e => onChange(e)}
              className="form-control my-3"
            />
          </SignUpInputContainer>
          <SignUpTitleText3>Enter Password</SignUpTitleText3>
          <SignUpInputContainer>
            <img src={signupIcon1} alt="signupIcon1" />
            <Input
              type="password"
              placeholder="Type your password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              className="form-control my-3"
            />
          </SignUpInputContainer>
          <Button type="submit">Sign Up<Link to="/login"></Link></Button>
        </SignupForm>
        <LoginLink>Already have an account? <Link to="/login">Login</Link></LoginLink>
      </SignUpFormContainer>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 900px;
  width: 100vw;
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 900px;
  z-index: -1;
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

const SignUpInputContainer = styled.div``;

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

export default Register;
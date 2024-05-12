import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from 'styled-components';

import loginBgImg from '../assets/loginBgImg.png';
import loginIcon1 from '../assets/loginIcon1.svg';
import loginIcon2 from '../assets/loginIcon2.svg';
import signupIcon1 from '../assets/signupIcon1.svg';
import SignUpImage from '../assets/loginImage.png';

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
        localStorage.setItem("jwtToken", parseRes.jwtToken);
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
      <BottomImage src={SignUpImage} alt="SignUpImage" />
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

          <CheckboxContainer>
            <CheckSquare type="checkbox" />
            <CheckboxLabel>Sign Up for our Newsletter</CheckboxLabel>
          </CheckboxContainer>

          <Button type="submit">Sign Up<Link to="/login"></Link></Button>
        </SignupForm>
        <LoginLink>Already have an account? <Link to="/login">Login</Link></LoginLink>
      </SignUpFormContainer>
    </SignUpContainer>
  );
};

const BottomImage = styled.img`
  position: absolute;
  margin-bottom: 685px;
  align-items: center;
  width: auto;
  height: 26%;
  z-index: 6;
  object-fit: cover;
`;

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
  z-index: 0;
`;

const SignUpFormContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
  text-align: left;
  width: auto;
  height: 600px;
  padding: 30px;
  margin-top: 100px;
`;

const SignupTitle = styled.h2`
  font-size: 35px;
  font-family: Agbalumo;
  font-weight: 800;
  color: #3E2D70;
  text-align: center;
  margin-top: 0px;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpTitleText1 = styled.p`
  margin-right: 250px;
  font-size: 18px;
  margin-top: 20px;
  color: #3E2D70;
  font-family: Manrope;
  font-weight: 800;
`;

const SignUpTitleText2 = styled.p`
  font-size: 18px;
  margin-top: 20px;
  margin-right: 210px;
  color: #3E2D70;
  font-family: Manrope;
  font-weight: 800;
`;

const SignUpTitleText3 = styled.p`
  font-size: 18px;
  margin-top: 20px;
  margin-right: 215px;
  color: #3E2D70;
  font-family: Manrope;
  font-weight: 800;
`;

const SignUpInputContainer = styled.div`
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
  color: #3E2D70;
  a {
    color: #F68AAF;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-right: 20px;
`;

const CheckSquare = styled.input`
  margin-right: 10px;
  
  &:checked {
    accent-color: #F68AAF;
    border-color: #F68AAF;
  }
`;

const CheckboxLabel = styled.div`
  font-size: 18px;
  font-family: Manrope;
  font-weight: 800;
  color: #3E2D70;
`;

export default Register;
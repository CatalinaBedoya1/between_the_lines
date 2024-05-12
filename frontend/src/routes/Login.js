import React, { useState } from "react";
import styled from "styled-components";
import { Link,  } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/loginImage.png";
import loginBgImg from "../assets/loginBgImg.png";
import loginIcon from "../assets/loginIcon.svg";
import signupIcon1 from "../assets/signupIcon1.svg";

const Login = ({ setAuth }) => {
 

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:4000/authentication/login",
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
        toast.success("Logged in Successfully");
        navigate("/dashboard");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };


      

  return (
    <Container>
      
      <BackgroundImage src={loginBgImg} alt="loginBgImg" />
      <FormContainer>
        <Title>Login</Title>
        <Form onSubmit={onSubmitForm}>
          <TitleText1>Username</TitleText1>
          <InputContainer>
            <Icon>
              <img src={loginIcon} alt="loginIcon" />
            </Icon>
            <Input
              type="text"
              name="email"
              placeholder="Type your email"
              value={email}
              onChange={e => onChange(e)}
              className="form-control my-3"
            />
          </InputContainer>
          <TitleText2>Password</TitleText2>
          <InputContainer>
            <Icon>
              <img src={signupIcon1} alt="signupIcon1" />
            </Icon>
            <Input
              type="password"
              name="password"
              placeholder="Type your password"
              value={password}
              onChange={e => onChange(e)}
              className="form-control my-3"
            />
          </InputContainer>
          <ForgotPasswordLink to="/forgot-password">
            Forgot password?
          </ForgotPasswordLink>
          <Button type="submit">Login</Button>
        </Form>
        <SignupLink>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </SignupLink>
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
  background-color: #ffffff;
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
  font-family: Agbalumo;
  font-weight: 700;
  color: #3E2D70;
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
  font-size: 18px;
  margin-top: 20px;
  color: #3E2D70;
  font-family: Manrope;
  font-weight: 700;
`;

const TitleText2 = styled.p`
  font-size: 18px;
  margin-top: 20px;
  margin-right: 220px;
  color: #3E2D70;
  font-family: Manrope;
  font-weight: 700;
`;

const InputContainer = styled.div`
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
  background: #f68aaf;
  color: #fff;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 22px;
  font-family: Roboto;
  margin-top: 40px;

  &:hover {
    background-color: #897ad5;
  }
`;

const SignupLink = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #3E2D70;
  font-family: Manrope;
  font-weight: 700;

  a {
    color: #f68aaf;
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
  color: #3E2D70;
  font-size: 14px;
  font-family: 3E2D70;
  font-weight: 590;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
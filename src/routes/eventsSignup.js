import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EventsHeroImg from '../assets/EventsHeroImg.png';
import TwistedBox from '../assets/TwistedLoveBox.png';
import SocialIcons from '../assets/social icons.png';

const EventsSignup = () => {
    return ( 
        <EventsSignupContainer>
        <EventsHeroContainer>
            <StyledEventsHeroImg src={EventsHeroImg} alt='EHImg'/>
        
            <EventsContent>
              <EHTitle>World Of Literature</EHTitle>
              <EHDescription>Explore local and online events near you! Join today</EHDescription>
             <EHSignup>Join Our Newsletter</EHSignup>
              <Link to="/community/eventsComplete">
                <EventsButton>
                Sign Up
                </EventsButton>
                </Link>
            </EventsContent>
        </EventsHeroContainer>

        <RegTitle>
        <h1>Online Event Registration</h1>
        </RegTitle>

        <MidEventsContainer>
            <PIContainer>
            <Form>
            <EPITitle>Personal Information</EPITitle>
              <InputTitle1>First Name *</InputTitle1>
                <Input type="text" placeholder="Enter First Name" />
              <InputTitle2>Last Name *</InputTitle2>
                <Input type="text" placeholder="Enter Last Name" />
              <InputTitle3>Email Address *</InputTitle3>  
                <Input type="text" placeholder="Enter Email Address" />
              <InputTitle4>Phone Number *</InputTitle4>
                <Input type="text" placeholder="Enter Phone Number" />
              <InputTitle5>Any Questions to Ask the Author?</InputTitle5>
                <Input type="text" placeholder="Enter Question(s)" />
            </Form>
            <Link to="/community/eventsComplete">
            <ERegisterButton>Register</ERegisterButton>
            </Link>
            </PIContainer>
              <EventSummaryContainer>
                <EventDetailsImg src={TwistedBox} alt="BookEventImage" />
                  <EventText>
                  <h2>Webinar with </h2>
                  <h2>author, Ana Huang!</h2>
                  <br></br>
                  <p>Join us as we talk with</p>
                  <p>#1 New York Times </p>
                  <p>Bestselling Author of </p>
                  <p>the “Twisted” series</p>
                  <p>about her upcoming </p>
                  <p>release of “King of Sloth”.</p>
                  </EventText>
                  <ShareText>Share this event</ShareText>
                    <ShareIcons>
                      <img src = {SocialIcons} alt= "Social Media Icons"/>
                    </ShareIcons>
              </EventSummaryContainer>
        </MidEventsContainer>
        </EventsSignupContainer>
    )
}

export default EventsSignup;

const EventsHeroContainer = styled.div`
  padding-top: 80px;
  position: relative;
  width: 100%;
  height: 370px;
  background-color: #e2def8;
`;

const StyledEventsHeroImg = styled.img`
position: absolute;
top: 7px;
right: 150px;
width: auto;
height: 340px;
object-fit: cover; 
`;

const EHTitle = styled.h1`

   /* Add margin bottom to create spacing */
  font-size: 83px;
  font-family: "Pacifico", cursive;
  font-weight: 400;
  color: #897ad5;
  margin-top: 30px;
`;

const EHDescription = styled.p`
  margin-top: 0px; /* Add margin top to create spacing */
  font-size: 20px;
  font-family: "Roboto Mono", monospace;
  font-weight: <weight>;
  font-style: normal;
  color: #3e2d70;
`;
const EHSignup = styled.p`
font-size: 14px;
margin-top: 30px;
font-family: "Inconsolata", monospace;
font-weight: <weight>;
font-style: lighter;
color: #3e2d70;
`;

const EventsContent = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #000000;
  margin-left: 120px;
`;

const EventsButton = styled.button`
  padding: 10px 40px;
  margin-top: 10px;
  background-color: #f68aaf; 
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-family: Kaisei Opti;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f676a5; 
  }
`;

const EventsSignupContainer = styled.div`
    justify-width: center;
    padding-top: 80px;
`;

//end of hero//
const RegTitle = styled.div`

font-family: "Agbalumo", system-ui;
font-weight: 400;
font-style: normal;
    font-size: 25px;
    text-align: center;
    color: #3E2D70;
    margin-top: 40px;
`;

const MidEventsContainer = styled.div`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 600;
font-style: normal;
    display: flex;
    justify-width: center;
`;

const PIContainer = styled.div`
    display: flex;
    width: 830px;
    height: 800px;
    margin-left: 80px;
    color: #3E2D70;
    margin-top: 40px;
    border: 5px solid #F68AAF;
    margin-bottom: 80px;
    flex-direction: column;
`;

const Form = styled.form`
  display: flex;  
  flex-direction: column;
  align-items: left;
  margin-left: 50px;
  margin-top: 20px
`;

const EPITitle = styled.p`
  margin-right: 220px;
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
`;

const InputTitle1 = styled.p`
  margin-right: 220px;
  font-size: 19px;
  margin-top: 20px;
  font-weight: bold;
`;

const Input = styled.input`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 600;
font-style: normal;
  border: 1.5px solid #9D9D9D;
  border-radius: 5px;
  height: 40px;
  font-size: 1.1rem;
  width: 700px;
  padding: 10px;
  margin-left: 10px;
  margin-top: 20px;
`;

const InputTitle2 = styled.p`
  margin-right: 220px;
  font-size: 19px;
  margin-top: 20px;
  font-weight: bold;
`;

const InputTitle3 = styled.p`
  margin-right: 220px;
  font-size: 19px;
  margin-top: 20px;
  font-weight: bold;
`;

const InputTitle4 = styled.p`
  margin-right: 220px;
  font-size: 19px;
  margin-top: 20px;
  font-weight: bold;
`;
const InputTitle5 = styled.p`
  margin-right: 220px;
  font-size: 19px;
  margin-top: 20px;
  font-weight: bold;
`;

const ERegisterButton = styled.button`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 600;
font-style: normal;
  padding: 10px 40px;
  margin-top: 50px;
  margin-left: 340px;
  border:none;
  border-radius: 50px;
  background-color: #F68AAF;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

const EventSummaryContainer = styled.div`
  display: flex;
  align-items: right;  
  flex-direction: column;
`;

const EventDetailsImg = styled.img`
  margin-top: 40px;
  margin-bottom: 40px;
  padding-left: 100px;
  z-index; -1;
  width: 450px;
  height: 650px;
`;

const EventText = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  z-index: 1;
  margin-top: 390px;
  margin-left: 170px;
  font-size: 18px;
  color: white;

  p {
    font-size: 20px;
    line-height: 28px;
  }
`;

const ShareText = styled.h1`
  font-size: 30px;
  margin-top: 10px;
  margin-left: 170px;
  font-weight: normal;
  color: #3E2D70;
`;

const ShareIcons = styled.div`
  margin-left: 165px;
  margin-top: 15px;
  
`;
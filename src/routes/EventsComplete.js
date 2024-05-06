import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EventsHeroImg from '../assets/EventsHeroImg.png';
import TwistedBox from '../assets/TwistedLove.png';
import SocialIcons from '../assets/social icons.png';
import heart from '../assets/redhearticon.png';
import './EventsComplete.css';

const EventsComplete=() =>{
    return(
        <EventsCompleteContainer>
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

        <CompTitle>
        Congrats, You're Registered!
        </CompTitle>
        
        <MidCompleteContainer>
        <BookPicContainer>
        <TwistedBoxPic src={TwistedBox} alt="BookEventImage"/>
        <ShareText>Share this event</ShareText>
                    <ShareIcons>
                      <img src = {SocialIcons} alt= "Social Media Icons"/>
                    </ShareIcons>
        </BookPicContainer>
        
        <CompleteInfoContainer>
            <ECTitle>Webinar with author, Ana Huang!</ECTitle>
            <p>2,345 views</p>
            <HeartIcon>
              <p>133</p>
              <img src= {heart} alt="red heart icon" />
            </HeartIcon>
        </CompleteInfoContainer>

        </MidCompleteContainer>
        </EventsCompleteContainer>
    );
}

export default EventsComplete;

const EventsHeroContainer = styled.div`
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
const EventsCompleteContainer = styled.div`
  display:
    justify-width: center;
    padding-top: 80px;
`;

const CompTitle = styled.h1`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 45px;
  color: #3E2D70;
`;

const MidCompleteContainer = styled.div`
  display: flex;
`;
const BookPicContainer = styled.div`
    display: flex;
    justify-width: center;
    flex-direction: column;
    margin-left: 50px;
`;

const TwistedBoxPic = styled.img`
margin-top: 35px;
margin-bottom: 40px;
padding-left: 100px;
z-index; -1;
width: 550px;
height: auto;
`;

const ShareText = styled.h1`
  font-size: 30px;
  margin-top: 10px;
  margin-left: 220px;
  font-weight: normal;
  color: #3E2D70;
`;

const ShareIcons = styled.div`
  margin-left: 210px;
  margin-top: 15px;
  margin-bottom: 40px;
`;
 const CompleteInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F68AAF;
    align-items: center;
    width: 600px;
    height: auto;
    margin-left: 60px;
    margin-top: 40px;
    margin-bottom: 60px;

    p{
        color: white; 
     }
 `;

 const ECTitle = styled.h1`
    color: white;
    margin-top: 30px;
 `;

 const HeartIcon = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  
  img {
    padding-left: 10px;
    width: 30px;
    height: 20px;
  }
`;
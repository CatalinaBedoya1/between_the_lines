import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EventsHeroImg from '../assets/EventsHeroImg.png';
import KingOfSlothBox from '../assets/KingOfSloth.png';
import SocialIcons from '../assets/social icons.png';
import heart from '../assets/redhearticon.png';
import AnaHuang from '../assets/AnaHuang.png';

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
        <TwistedBoxPic src={KingOfSlothBox} alt="BookEventImage"/>
        <ShareText>Share this event</ShareText>
                    <ShareIcons>
                      <img src = {SocialIcons} alt= "Social Media Icons"/>
                    </ShareIcons>
        </BookPicContainer>
        
        <CompleteInfoContainer>
            <ECTitle>Webinar with author, Ana Huang!</ECTitle>
            <Row1Info>
            <p>2,345 views</p>
            <HeartIcon>
              <p2>133</p2>
              <img src= {heart} alt="red heart icon" />
            </HeartIcon>
            </Row1Info>
            <ECAuthor>
            <img src={AnaHuang} alt = "Ana Huang img" />
            <ECAuthorInfo>
            <h3>Ana Huang</h3>
            <p>Ana Huang is a New York Times, USA Today, international, and #1 Amazon bestselling author.</p>
            <p>Her work includes: </p>
            <p>- The Twisted Series</p>
            <p>- The Kings of Sin Series</p>
            <p>- The If Love Series</p>
            </ECAuthorInfo>
            </ECAuthor>
            <ECDescription>
              <ECText>
              <p>Join us as we talk with #1 New York Times Bestselling Author of the "Twisted" series about her upcoming release of "King of Sloth".</p>
              </ECText>
            </ECDescription>
            <ECNextSteps>
              <h3>Next Steps</h3>
              <p>1. Keep a look out for an email containing a link to join</p>
              <p>2. Save the date and mark your calendar</p>
              <p>3. Join the event and enjoy!</p>
            </ECNextSteps>
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
`;

const CompTitle = styled.h1`
font-family: "Agbalumo", system-ui;
font-weight: 400;
font-style: normal;
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
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 500;
font-style: normal;
font-size: 15px;
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
 font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 500;
font-style: normal;
font-size: 15px;
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
    margin-top: 50px;
 `;

 const Row1Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  font-size: 20px;

  p{
    margin-right: 130px;
  }
 `;

 const HeartIcon = styled.div`
  display: flex;
  flex-direction: row;
  color: white;

  p2{
    margin-left: 130px;
  }
  
  img {
    padding-left: 10px;
    width: 30px;
    height: 20px;
  }
`;

const ECAuthor = styled.div`
display: flex;
margin-top: 30px;

img{
  margin-left: 40px;
  width: auto;
  height: 180px;;
}
`;

const ECAuthorInfo = styled.div`
font-size: 20px;
line-height: 28px;
margin-right: 40px;

h3{
  color: white;
  line-height: 30p
}

p{
  margin-left: 20px;
}
`;

const ECDescription = styled.div`
  display: flex;
`;
const ECText = styled.p`
  margin-top: 30px;
  font-size: 22px;
  line-height: 28px;
  margin-left: 50px;
  margin-right: 50px;
`;

const ECNextSteps = styled.div`
color: white;
font-size: 22px;
line-height: 30px;

h3{
  margin-bottom: 10px;
  margin-top: 30px;
}
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import EventsHeroImg from '../assets/EventsHeroImg.png';
//import EventsHeroImg2 from '../assets/EventsHeroImg2.png';
import { Link } from 'react-router-dom';
import onlineevent1 from '../assets/KingOfSloth.png';
import onlineevent2 from '../assets/LoveOnTheBrain.png';
import eventprofile1 from '../assets/profile1.png';
import eventprofile2 from '../assets/profile2.png';
import localevent1 from '../assets/LocalEvent1.png';
import localevent2 from '../assets/LocalEvent2.png';
import localevent3 from '../assets/LocalEvent3.png';
import calendar from '../assets/calendar.png';
import heart from '../assets/redhearticon.png';
import Newsletter from '../components/Newsletter';




const EventsPage = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);

  const handleSignUpClick = () => {
    setShowNewsletter(true);
  };
  const handleCloseNewsletter = () => {
    setShowNewsletter(false);
  };
  return ( 
  <div>
    <EventsPageContainer>
    {showNewsletter && (
          <>
            <Overlay onClick={handleCloseNewsletter} />
            <NewsletterContainer>
              <Newsletter onClose={handleCloseNewsletter} />
            </NewsletterContainer>
          </>
        )}
    <EventsHeroContainer>
      <StyledEventsHeroImg src={EventsHeroImg} alt='EHImg'/>
      
      <EventsContent>
            <EHTitle>World Of Literature</EHTitle>
            <EHDescription>Explore local and online events near you! Join today</EHDescription>
           <EHSignup>Join Our Newsletter</EHSignup>
           <EventsButton onClick={handleSignUpClick}>Sign Up</EventsButton>
              
      </EventsContent>
    </EventsHeroContainer>

   
    <EventName>
    <h1>Events Online</h1>
    </EventName>

    <OEContainerRow>
    <OnlineEventsContainter>
      <OnlineCard>
        <img src= {onlineevent1} alt="Online Event 1" />
        <OnlineContent>
          <EventProfile>
          <img src= {eventprofile1} alt="Event Profile 1" />
            <EventProfileText>
                <h4>Sarah T.</h4>
                <p>April 18, 2024 | Live on Zoom</p>
            </EventProfileText>
          </EventProfile>
          <br></br>
          <h2>Webinar with Author, Ana Huang!</h2>
          <br></br>
          <p>Join us as we talk with #1 New York Times Bestselling Author of the “Twisted” series about her upcoming release of “King of Sloth”.</p>

          <br></br>
          <OnlineDivider></OnlineDivider>
          <br></br>

          <Register>
            <p>2,375 Views</p>
            <StyledLink to= '/community/EventsSignup' ><ERegisterButton>Register</ERegisterButton></StyledLink>
            <HeartIcon>
              <p>2,119</p>
              <img src= {heart} alt="red heart icon" />
            </HeartIcon>
          </Register>

        </OnlineContent>
      </OnlineCard>

      <OnlineCard>
        <img src= {onlineevent2} alt="Online Event 2" />
        <OnlineContent>
            <EventProfile>
            <img src= {eventprofile2} alt="Event Profile 2" />
              <EventProfileText>
                <h4>Laila M.</h4>
                <p>April 29, 2024 | Live on Zoom</p>
              </EventProfileText>
            </EventProfile>
          <br></br>
          <h2>The World of Contemporary Fiction Panel</h2>
          <br></br>
          <p>Join a group of talented literary professionals, as they discuss the process it takes to writing a contemporary fiction novel.</p>
          <br></br>
          <OnlineDivider></OnlineDivider>
          <br></br>

          <Register>
            <p>1,875 Views</p>
            <StyledLink to= '/community/EventsSignup' ><ERegisterButton>Register</ERegisterButton></StyledLink>
            <HeartIcon>
              <p>1,784</p>
              <img src= {heart} alt="red heart icon" />
            </HeartIcon>
          </Register>

        </OnlineContent>
      </OnlineCard>
    </OnlineEventsContainter>

    <EventCalendarContainer>
      <CalendarCard>
        <img src= {calendar} alt="Calendar" />
        <CalendarContent>
          <br></br>
          <h2>Upcoming Events</h2>
          <br></br>
          <h4>Book Signing & Brunch with Suzanne Collins</h4>
          <p>May 5, 2024 | New York City, New York</p>
          <p>Come meet Suzanne Collins and get ...</p>
          <br></br>
          <h4>Classic Novel Spotlight: Jane Austen</h4>
          <p>May 17, 2024 | Live on Zoom</p>
          <p>This month's classic novel spotlight ... </p>
          <br></br>
          <h4>Book Launch with John Greene</h4>
          <p>May 23, 2024 | Boston, Philadelphia</p>
          <p>Calling all John Green fans for ...</p>

          </CalendarContent>
      </CalendarCard>
    </EventCalendarContainer>

    </OEContainerRow>


    <br></br>
    <EventName>
    <h1>Local Events</h1>
    </EventName>

    <LocalEventsContainer>
    <LocalCard>
      <img src= {localevent1} alt="LocalEvent1" />

      <LocalContent>
      <h2>Meet & Greet: With talented Fantasy author, Sarah J. Maas</h2>
      <p>New York City, New York</p>
      <p>April 13, 2024</p>

      <br></br>
      <LocalDivider></LocalDivider>
      <br></br>

      <LRegister>
            <p>657 Views</p>
            <ERegisterButton>Register</ERegisterButton>
            <HeartIcon>
              <p>535</p>
              <img src= {heart} alt="red heart icon" />
            </HeartIcon>
      </LRegister>
      </LocalContent>
    </LocalCard>

    <LocalCard>
      <img src= {localevent2} alt="LocalEvent1" />

      <LocalContent>
      <h2>Advanced Poetry Reading Meet-Up</h2>
      <p>Los Angeles, California</p>
      <p>April 16, 2024</p>

      <br></br>
      <LocalDivider></LocalDivider>
      <br></br>

      <LRegister>
            <p>389 Views</p>
            <ERegisterButton>Register</ERegisterButton>
            <HeartIcon>
              <p>365</p>
              <img src= {heart} alt="red heart icon" />
            </HeartIcon>
      </LRegister>



      </LocalContent>
    </LocalCard>

    <LocalCard>
      <img src= {localevent3} alt="LocalEvent1" />

      <LocalContent>       
      <h2>Diving into the work of Kristin Hannah</h2>
      <p>Austin, Texas</p>
      <p>April 26, 2024</p>

      <br></br>
      <LocalDivider></LocalDivider>
      <br></br>

      <LRegister>
            <p>468 Views</p>
            <ERegisterButton>Register</ERegisterButton>
            <HeartIcon>
              <p>433</p>
              <img src= {heart} alt="red heart icon" />
            </HeartIcon>
      </LRegister>

      </LocalContent>

    </LocalCard>
    </LocalEventsContainer>
    </EventsPageContainer>
    </div>
  )
}

export const EventsComplete = () => {
    return (
      <div className='EventsComplete'>
        <h1>EventComplete</h1>
      </div>
    );
  };

  export const events2 = () => {
    return (
      <div className='events2'>
        <h1>Event 2</h1>
      </div>
    );
  };
  const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const NewsletterContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  color: #FFF;
  transform: translate(-50%, -50%);
  z-index: 20;
`;

  const EventsPageContainer = styled.div`
  padding-top: 80px;
  height: 1800px;
  width: auto;
  `;
  

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
font-family: "Agbalumo", system-ui;
font-weight: 400;
font-style: normal;
color: #3E2D70;

   /* Add margin bottom to create spacing */
  font-size: 83px;

  color: #897ad5;
  margin-top: 30px;
`;

const EHDescription = styled.p`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
  margin-top: 0px; /* Add margin top to create spacing */
  font-size: 20px;
  color: #3e2d70;
`;
const EHSignup = styled.p`
font-size: 18px;
margin-top: 20px;
margin-bottom: 10px;
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
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

font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;

  padding: 10px 40px;
  margin-top: 10px;
  background-color: #f68aaf; 
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 20px;

  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f676a5; 
  }
`;


const EventName = styled.div`
font-family: "Agbalumo", system-ui;
font-size: 25px;
font-style: normal;
color: #3E2D70;
  margin-left: 65px;
  margin-bottom: 10px;
  padding-top: 20px;
`;

const OEContainerRow = styled.div`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
color: #3E2D70;
font-size: 15px;
  display: flex;
  flex-direection: row;
  //background-color: pink;
`;

const OnlineEventsContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 100px;

  //background-color: blue;

`;

const OnlineCard = styled.div`
  display: flex;
  margin: 10px;
  width: 800px;    //800px;
  height: 300px;
  //background-color: green;

  img {
    width: auto; 
    height: 100%; 
  }
`;

const OnlineContent = styled.div`
  padding-top: 30px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 30px;
`;

const OnlineDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc; 
`;

const Register = styled.div`
  display:flex;
  justify-content: space-between;
`;

const LRegister = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 25px;
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;


const ERegisterButton = styled.div`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
text-decoration: none;
color: inherit;

  padding: 3px 20px;
  background-color: #F68AAF; 
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 15px;
  cursor: pointer;
  
  transition: background-color 0.3s ease;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

const HeartIcon = styled.div`
  display: flex;
  flex-direction: row;
  
  img {
    padding-left: 10px;
    width: 35px;
    height: 20px;
  }
`;

const EventProfile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }
`;

const EventProfileText = styled.div`
  margin-left: 15px; 
`;

const LocalEventsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LocalCard = styled.div`
  border: 2px solid;
  border-color: #AEB5C0;
  margin: 10px;
  width: 350px;
  height: 455px;
  text-align: center;

  img {
    width: 100%; 
    height: auto; 
  }
`;

const LocalContent = styled.div`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
color:#3E2D70;
font-size: 13px;
  padding: 10px;
`;

const LocalDivider = styled.div`
  width: 75%;
  height: 1px;
  background-color: #ccc;
  margin: 0 auto;
 
`;

const EventCalendarContainer = styled.div`
  display: flex;
  justify-content: space-around;

`;

const CalendarCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 300px;    //800px;
  height: 600px;
  //background-color: yellow;

  img {
    width: 100%; 
    height: auto; 
  }
}
`;

const CalendarContent = styled.div`
  padding-top: 10px;
  padding-left: 20px;
  padding-bottom: 10px;

  //background-color: green;
`;

export default EventsPage;
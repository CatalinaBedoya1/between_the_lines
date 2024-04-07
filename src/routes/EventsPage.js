import React from 'react';
import styled from 'styled-components';
import EventsHeroImg from '../assets/EventsHeroImg.png';
import EventsHeroImg2 from '../assets/EventsHeroImg2.png';
import { Link } from 'react-router-dom';
import onlineevent1 from '../assets/onlineevent1.png';
import onlineevent2 from '../assets/onlineevent2.png';
import eventprofile1 from '../assets/profile1.png';
import eventprofile2 from '../assets/profile2.png';
import localevent1 from '../assets/localevent1.png';
import localevent2 from '../assets/localevent2.png';
import localevent3 from '../assets/localevent3.png';
import calendar from '../assets/calendar.png';
import heart from '../assets/redhearticon.png';



const EventsPage = () => {
  return (
    <EventsHeroContainer>
      <StyledEventsHeroImg src={EventsHeroImg} alt='EHImg'/>
      <StyledEventsHeroImg2 src={EventsHeroImg2} alt='EHImg2'/>
      <EventsContent>
            <EHTitle>Want to be involved in the world of literature? Join one of our events today!</EHTitle>
            <EHDescription>Join our Newsletter</EHDescription>
          <EventsButton> Sign Up</EventsButton>
      </EventsContent>
    </EventsHeroContainer>
  )
}

export const EventsComplete = () => {
    return (
      <div className='eventComplete'>
        <h1>EventComplete</h1>
      </div>
    );
  };

  

const EventsHeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  background-color: #F0F6F9;
`;

const StyledEventsHeroImg = styled.img`
position: absolute;
top: 40px;
right: 170px;
width: 180px;
height: 181px;
object-fit: cover; 
`;

const StyledEventsHeroImg2 = styled.img`
position: absolute;
top: 130px;
left: 200px;
width: 150px;
height: 151px;
object-fit: cover; 
`
const EHTitle = styled.h1`
  margin-bottom: 20px; /* Add margin bottom to create spacing */
  font-size: 30px;
  font-family: Kaisei Opti;
  font-weight: normal;
`;

const EHDescription = styled.p`
  margin-top: 60px; /* Add margin top to create spacing */
  font-size: 20px;
  font-family: Kaisei Opti;
  font-weight: lighter;
`;

const EventsContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #000000;
`;

const EventsButton = styled.button`
  padding: 10px 40px;
  margin-top: 20px;
  background-color: #9F7B7B; 
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-family: Kaisei Opti;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; 
  }
`;

const EventName = styled.div`
  padding-left: 40px;
  padding-top: 20px;
`;

const OEContainerRow = styled.div`
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
  justify-content: space-between
`;

const LRegister = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 25px;
`;

const ERegisterButton = styled.div`
  padding: 3px 20px;
  background-color: #95B9B4; 
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 15px;
  cursor: pointer;
  
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6D8985; 
  }
`;

const HeartIcon = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 25px;
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
  border: 3px solid black;
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
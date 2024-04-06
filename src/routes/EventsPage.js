import React from 'react';
import styled from 'styled-components';
import EventsHeroImg from '../assets/EventsHeroImg.png';
import EventsHeroImg2 from '../assets/EventsHeroImg2.png';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  return (
    <EventsHeroContainer>
      <StyledEventsHeroImg src={EventsHeroImg} alt='EHImg'/>
      <StyledEventsHeroImg2 src={EventsHeroImg2} alt='EHImg2'/>
      <EventsContent>
            <EHTitle>Want to be involved in the world of literature? Join one of our events today!</EHTitle>
            <EHDescription>Join our Newsletter</EHDescription>
            <Link to="/community/EventsComplete">
          <EventsButton>Sign Up</EventsButton>
        </Link>
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

export default EventsPage;
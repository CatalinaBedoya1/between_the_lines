import React from 'react';
import styled from 'styled-components';
import EventsHeroImg from '../assets/EventsHeroImg.png';

const EventsPage = () => {
  return (
    <EventsHeroContainer>
      <StyledEventsHeroImg src={EventsHeroImg} alt='EHImg'/>
      <EventsContent>
          <h1>Want to be involved in the world of literature? Join one of our events today!</h1>
          <p>Join our Newsletter</p>
          <EventsButton> Join Now</EventsButton>
      </EventsContent>
    </EventsHeroContainer>
  )
}


const EventsHeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #F0F6F9;
`;

const StyledEventsHeroImg = styled.img`
position: absolute;
top: 0;
right: 0;
width: 50px;
height: 40px;
object-fit: cover; 
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
  padding: 10px 20px;
  background-color: #5397AC; /* Adjust color as needed */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Adjust hover color as needed */
  }
`;

export default EventsPage;
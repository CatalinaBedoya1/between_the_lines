
import React, { useState } from 'react';
import styled from 'styled-components';
import VotingBook1 from '../assets/VotingBook1.png';
import VotingBook2 from '../assets/VotingBook2.png';
import VotingBook3 from '../assets/VotingBook3.png';
import VotingBook4 from '../assets/VotingBook4.png';
import VotingBgImg from '../assets/VotingBgImg.png';

const VotingContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 600px;
  background-image: url(${VotingBgImg});
  background-size: cover; // Cover the entire container with the background image
  background-position: center; 
`;


const VotingTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
`;

const VotingDescription = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  color: #FFF;
`;

const VotingImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  

`;

const VotingImage = styled.img`
  width: 200px;
  height: auto;
  margin: 0 20px;
`;

const VotingButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const VotingButton = styled.button`
  display: block;
  width: 100px;
  padding: 10px;
  margin: 0 70px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 16px;
  background-color: ${props => props.bgColor || '#ccc'};
  color: white;
`;
const MainVotingButton = styled.button`
display: block;
  width: 100px;
  padding: 10px;
  margin-left: 670px;
  margin-top: 40px;
  border: none;
    background: linear-gradient(230.28deg, #ddbfb5, #5397ac);
    color: white;
    border: 3px solid #FFF;
    border-radius: 20px;
    font-size: 18px;
    font-family: Roboto;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #0056b3;
    }
  `;

const Voting = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleVote = () => {
    alert(`Voted for option ${selectedOption}`);
  };

  return (
    <VotingContainer>

      <VotingTitle>Vote</VotingTitle>
      <VotingDescription>For the next book of the month</VotingDescription>

      <VotingImageContainer>
        <VotingImage src={VotingBook1} alt="VotingBook1" />
        <VotingImage src={VotingBook2} alt="VotingBook2" />
        <VotingImage src={VotingBook3} alt="VotingBook3" />
        <VotingImage src={VotingBook4} alt="VotingBook4" />
      </VotingImageContainer>

      <VotingButtonContainer>
        <VotingButton bgColor="#ff6347" onClick={() => setSelectedOption(1)}>Romance</VotingButton>
        <VotingButton bgColor="#6495ed" onClick={() => setSelectedOption(2)}>Fantasy</VotingButton>
        <VotingButton bgColor="#32cd32" onClick={() => setSelectedOption(3)}>Sci-fi</VotingButton>
        <VotingButton bgColor="#ff8c00" onClick={() => setSelectedOption(4)}>Thriller</VotingButton>
      </VotingButtonContainer>

      <MainVotingButton className="vote-button" onClick={handleVote}>Vote</MainVotingButton>
    </VotingContainer>
  );
};

export default Voting;

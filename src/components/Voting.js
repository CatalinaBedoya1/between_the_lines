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
  position: relative;
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

const VotingImageOverlay = styled.div`
  position: relative;
  cursor: pointer;

  &:hover::after {
    content: '${props => props.votes}';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8); /* Change the background color and opacity as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: black;
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Voting = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [votes, setVotes] = useState({
    1: 0, // Romance
    2: 0, // Fantasy
    3: 0, // Sci-fi
    4: 0, // Thriller
  });

  const handleVote = () => {
    if (selectedOption) {
      setVotes(prevVotes => ({
        ...prevVotes,
        [selectedOption]: prevVotes[selectedOption] + 1,
      }));
    }
  };

  return (
    <VotingContainer>
      <VotingTitle>Vote</VotingTitle>
      <VotingDescription>For the next book of the month</VotingDescription>
      <VotingImageContainer>
        <VotingImageOverlay votes={votes[1]} onClick={() => setSelectedOption(1)}>
          <VotingImage src={VotingBook1} alt="VotingBook1" />
        </VotingImageOverlay>
        <VotingImageOverlay votes={votes[2]} onClick={() => setSelectedOption(2)}>
          <VotingImage src={VotingBook2} alt="VotingBook2" />
        </VotingImageOverlay>
        <VotingImageOverlay votes={votes[3]} onClick={() => setSelectedOption(3)}>
          <VotingImage src={VotingBook3} alt="VotingBook3" />
        </VotingImageOverlay>
        <VotingImageOverlay votes={votes[4]} onClick={() => setSelectedOption(4)}>
          <VotingImage src={VotingBook4} alt="VotingBook4" />
        </VotingImageOverlay>
      </VotingImageContainer>
      <MainVotingButton className="vote-button" onClick={handleVote}>Vote</MainVotingButton>
    </VotingContainer>
  );
};

export default Voting;

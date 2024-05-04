import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import VotingBook1 from '../assets/VotingBook1.png';
import VotingBook2 from '../assets/VotingBook2.png';
import VotingBook3 from '../assets/VotingBook3.png';
import VotingBook4 from '../assets/VotingBook4.png';
import VotingBgImg from '../assets/VotingBgImg.png';
import { darken } from 'polished';

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${VotingBgImg});
  background-size: cover;
  background-position: center;
  padding: 20px;
  width: 100%;
  height: 640px;
`;

const Voteheader = styled.div`
  color: white;
  margin-top: 20px;
  font-size: 50px;
`;

const Voteheader2 = styled.div`
  color: white;
  margin-top: 10px;
  font-size: 28px;
`;
const VoteBooksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 50px;
  width: 100%; /* Ensure full width */
  
`;


const VoteBook = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VoteBookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VoteCount = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${VoteBook}:hover & {
    opacity: 3;
   
  }
`;


const VoteButton = styled.button`
  background-color: ${({ color }) => color};
  color: white;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 40px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ color }) => darken(0.1, color)}; /* Darken the background color on hover */
  }
`;

const VoteSubmitButton = styled.button`
  background-color: #F68AAF; 
  color: #fff; 
  font-size: 30px;
  font-weight: bold;
  border: 4px solid #fff;
  padding: 10px 20px; 
  font-size: 16px; 
  border-radius: 20px; 
  cursor: pointer;
  margin-top: 80px;
  
  &:hover {
    background-color: ${darken(0.1, "#F68AAF")};
  }
`;

const SubmitedText = styled.div`
  color: white; /* Choose your desired color */
  margin-top: 20px; /* Adjust the margin-top as needed */
`;


function Voting() {
  const [votes, setVotes] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchInitialVoteCounts();
  }, []);

  const fetchInitialVoteCounts = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/vote-counts');
      const data = await response.json();
      if (data.success) {
        setVotes(data.voteCounts);
      } else {
        console.error('Failed to fetch initial vote counts:', data.message);
      }
    } catch (error) {
      console.error('Error fetching initial vote counts:', error);
    }
  };

  const handleVote = async (cover_id) => {
    try {
      const response = await fetch('http://localhost:4000/api/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cover_id }),
      });
      const data = await response.json();
      console.log(data);
      if (data.message === "Vote recorded successfully!") {
        setVotes(prevVotes => ({
          ...prevVotes,
          [cover_id]: data.votes[data.votes.length - 1]
        }));
      } else {
        console.error('Vote failed');
      }
    } catch (error) {
      console.error('Error recording vote:', error);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <VoteContainer>
      <Voteheader>Vote</Voteheader>
      <Voteheader2>for the next book of the month</Voteheader2>
      <VoteBooksContainer>
        <VoteBook>
          <VoteBookImage src={VotingBook1} alt="Book 1" />
          <VoteCount>Votes: {votes[1]}</VoteCount>
          {!submitted && <VoteButton color="#F676A5" onClick={() => handleVote(1)}>Romance</VoteButton>}
        </VoteBook>
        <VoteBook>
          <VoteBookImage src={VotingBook2} alt="Book 2" />
          <VoteCount>Votes: {votes[2]}</VoteCount>
          {!submitted && <VoteButton color="#B0507F" onClick={() => handleVote(2)}>Fantasy</VoteButton>}
        </VoteBook>
        <VoteBook>
          <VoteBookImage src={VotingBook3} alt="Book 3" />
          <VoteCount>Votes: {votes[3]}</VoteCount>
          {!submitted && <VoteButton color="#4281A4" onClick={() => handleVote(3)}>Sci-fi</VoteButton>}
        </VoteBook>
        <VoteBook>
          <VoteBookImage src={VotingBook4} alt="Book 4" />
          <VoteCount>Votes: {votes[4]}</VoteCount>
          {!submitted && <VoteButton color="#897AD5" onClick={() => handleVote(4)}>Thriller</VoteButton>}
        </VoteBook>
      </VoteBooksContainer>
      {!submitted && <VoteSubmitButton onClick={handleSubmit}>VOTE</VoteSubmitButton>}
      {submitted && <SubmitedText>Votes submitted!</SubmitedText>}
    </VoteContainer>
  );
}

export default Voting;

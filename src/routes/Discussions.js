import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DiscussionsImg from '../assets/DiscussionsImg.png';
import DiscussionsImg2 from '../assets/DiscussionsImg2.png';
import DiscussionsImg3 from '../assets/DiscussionsImg3.png';
import { Link } from 'react-router-dom';
import CreatePost from '../components/CreatePost';
import WordLoopAnimation from '../components/WordLoopAnimation';
import './Discussions.css';

const DiscussionHeaderContainer = styled.div`
padding-top: 80px;
    position: relative;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const DiscussionBackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${DiscussionsImg});
    background-size: cover;
    background-position: center;
    opacity: 0.6;

`;

const DiscussionContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px; /* Adjust as needed */
    text-align: center;
`;

const DiscussionTopContent = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0px;
`;

const DisLeftImageContainer = styled.div`
    padding-bottom: 20px;
    z-index:2;
`;

const DisRightImageContainer = styled.div`
    padding-bottom: 20px;
    z-index: 2;
`;

const DisLeftImage = styled.img`
    width: 270px;
    height: auto;
    margin-top: 100px;
    margin-left: 100px;
`;

const DisRightImage = styled.img`
    width: auto; /* Adjust size as needed */
    height: 260px;
`;

const DiscussionSearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    width: 500px;
    margin-left: 100px;
`;

const DiscussionInput = styled.input`
    width: 500px;
    border: 1px solid #ccc;
    padding: 10px 50px ;
    border-radius: 30px;
    height: 50px;
    font-color: #3F3C3C;
    font-family: Inter;
`;

const SearchIcon = styled.div`
    position: absolute;
    left: 10px;
    color: #3F3C3C;
`;

const PopularTopicsText = styled.div`
    font-size: 16px;
    font-family: Roboto;
    color: white;
    z-index: 1;
    margin-top: -100px;
    margin-right: 30px;
`;
const DiscussionTitle = styled.h1`
  font-size: 40px;
  font-family: Roboto;
  font-weight: bold;
  color: white; 
  z-index: 2;
  margin-top: 50px;
  position: relative; 
  overflow: hidden;
  display: flex; 
  align-items: center; /* Align items vertically */
`;

const Text = styled.span`
  margin-right: 10px; 
  font-size: 40px;
  font-family: Roboto;
  
`;

const Discussions = () => {
    return (
        <div>
            <DiscussionHeaderContainer>
            <DiscussionBackgroundImage src={DiscussionsImg} alt="Discussions-img2" />
                <DiscussionContentContainer>
                <DiscussionTitle><Text>Find what you're looking for: </Text> <WordLoopAnimation /></DiscussionTitle>
                
                    <DiscussionTopContent>
                        <DisLeftImageContainer>
                            <DisLeftImage src={DiscussionsImg2} alt="Discussions-img2" />
                        </DisLeftImageContainer>
                        <DiscussionSearchBarContainer>
                            <DiscussionInput type="text" id="searchInput" placeholder="Search for topics..." />
                            <SearchIcon>
                                <FontAwesomeIcon icon={faSearch} />
                            </SearchIcon>
                        </DiscussionSearchBarContainer>
                        <DisRightImageContainer>
                            <DisRightImage src={DiscussionsImg3} alt="Discussions-img3" />
                        </DisRightImageContainer>
                    </DiscussionTopContent>
                    <PopularTopicsText>Popular Topics:  Adventure, Fantasy, Romance, Memoirs</PopularTopicsText>
                </DiscussionContentContainer>
            </DiscussionHeaderContainer>
            


            <div> <header> View All 
                Trending Book of the Month  Trending  User Feedback </header> </div> 
            <div>
            <header>Filter: </header>
            <div className='btns-discussion-genres'>
                    <Link to="/discussions/thriller"> <button className="thriller"> Thriller </button> </Link>
                    <Link to="/discussions/booktok"> <button className="booktok">Booktok </button> </Link>
                    <Link to="/discussions/horror"> <button className="horror">Horror </button> </Link>
                    <Link to="/discussions/cliff-hanger"> <button className="cliff-hanger">Cliff-hanger </button> </Link>
                    <Link to="/discussions/fantasy"> <button className="fantasy">Fantasy </button> </Link>
                    <Link to="/discussions/historical"> <button className="historical">Historical </button> </Link> 
             </div>
             </div> 
               {
           <CreatePost /> }
            </div>
    );
};

export default Discussions;


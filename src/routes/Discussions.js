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

const DiscussionHeaderContainer = styled.div`
    position: relative;
    height: 450px;
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
  display: flex; /* Add this to make items align horizontally */
  align-items: center; /* Align items vertically */
`;

const Text = styled.span`
  margin-right: 10px; /* Adjust the spacing between the text and the animation */
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
            {/* Other content of your discussions */}
            <h2>Forums</h2>
            <h2>Tags</h2>
            <div className='btns-discussion-genres'>
                <div className='genre-1'>
                    <Link to="/discussions/thriller" className="btn-thriller">Thriller</Link>
                    <Link to="/discussions/romance" className="btn-romance">Romance</Link>
                </div> 
                <div className='genre-2' >
                    <Link to="/discussions/booktok" className="btn-booktok">Booktok</Link>
                    <Link to="/discussions/horror" className="btn-horror">Horror</Link>
                </div>
                <div className='genre-3'>
                    <Link to="/discussions/dark" className="btn-dark">Dark</Link>
                    <Link to="/discussions/cliff-hanger" className="btn-cliff-hanger">Cliff-hanger</Link>
                </div>
                <div className='genre-4'>
                    <Link to="/discussions/fantasy" className="btn-fantasy">Fantasy</Link>
                    <Link to="/discussions/historical" className="btn-historical">Historical</Link>
                </div>
                <div className='genre-5'>
                    <Link to="/discussions/recommended" className="btn-recommended">Recommended</Link>
                    <Link to="/discussions/series" className="btn-series">Series</Link>
                </div>
                <div className='genre-6'>
                    <Link to="/discussions/humor" className="btn-humor">Humor</Link>
                    <Link to="/discover/spanish" className="btn-spanish">Spanish</Link>
                </div>
                <div className='genre-7'>
                    <Link to="/discussions/educational" className="btn-educational">Educational</Link>
                    <Link to="/discussions/enemies" className="btn-enemies">Enemies</Link>
                </div>
                <div className='genre-8'>
                    <Link to="/discussions/comedy" className="btn-comedy">Comedy</Link>
                    <Link to="/discussions/friendstolovers" className="btn-friends-to-lovers">Friends to Lovers</Link>
                </div>
            </div>
        </div>
    );
};

export default Discussions;

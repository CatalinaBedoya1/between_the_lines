// discussions.js

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DiscussionsImg from '../assets/DiscussionsImg.png';
import DiscussionsImg2 from '../assets/DiscussionsImg2.png';
import DiscussionsImg3 from '../assets/DiscussionsImg3.png';
import { Link } from 'react-router-dom';

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
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    opacity: 0.2;
`;

const DiscussionContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px; /* Adjust as needed */
    text-align: center;
`;

const DiscussionTopContent = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0px;
`;

const LeftImageContainer = styled.div`
    padding-bottom: 20px;
    z-index:2;
`;

const RightImageContainer = styled.div`
    padding-bottom: 20px;
    z-index: 2;
`;

const LeftImage = styled.img`
    width: 220px;
    height: auto;
    margin-top: 100px;
    margin-right: 40px;
`;

const RightImage = styled.img`
    width: 300px; /* Adjust size as needed */
    height: auto;
`;

const DiscussionSearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    width: 450px;
`;

const DiscussionInput = styled.input`
    width: 450px;
    border: 1px solid #ccc;
    padding: 8px 30px 8px 50px;
    border-radius: 30px;
    height: 50px;
`;

const SearchIcon = styled.div`
    position: absolute;
    left: 10px;
    color: #3F3C3C;
`;

const PopularTopicsText = styled.div`
    font-size: 16px;
    color: #3F3C3C;
    z-index: 1;
    margin-top: -90px;
    margin-right: 100px;
`;

const Discussions = () => {
    return (
        <div>
            <DiscussionHeaderContainer>
                <DiscussionBackgroundImage backgroundImage={DiscussionsImg} />
                <DiscussionContentContainer>
                    <DiscussionTopContent>
                        <LeftImageContainer>
                            <LeftImage src={DiscussionsImg2} alt="Discussions-img2" />
                        </LeftImageContainer>
                        <DiscussionSearchBarContainer>
                            <DiscussionInput type="text" id="searchInput" placeholder="Search for topics..." />
                            <SearchIcon>
                                <FontAwesomeIcon icon={faSearch} />
                            </SearchIcon>
                        </DiscussionSearchBarContainer>
                        <RightImageContainer>
                            <RightImage src={DiscussionsImg3} alt="Discussions-img3" />
                        </RightImageContainer>
                    </DiscussionTopContent>
                    <PopularTopicsText>Popular Topics:  Adventure,   Fantasy,   Romance </PopularTopicsText>
                </DiscussionContentContainer>
            </DiscussionHeaderContainer>
            {/* Other content of your discussions */}
        <div> 
            <h1>Tags</h1>
            <div className='btns-genres'>
                <div className='genre-row1'>
                    <Link to="/discover/thriller" className="btn-thriller">Thriller</Link>
                    <Link to="/discover/romance" className="btn-romance">Romance</Link>
                </div> 
                <div className='genre-row2' >
                    <Link to="/discover/booktok" className="btn-booktok">Booktok</Link>
                    <Link to="/discover/horror" className="btn-horror">Horror</Link>
                </div>
                <div className='genre-row3'>
                    <Link to="/discover/dark" className="btn-dark">Dark</Link>
                    <Link to="/discover/cliff-hanger" className="btn-cliff-hanger">Cliff-hanger</Link>
                </div>
                <div className='genre-row4'>
                    <Link to="/discover/fantasy" className="btn-fantasy">Fantasy</Link>
                    <Link to="/discover/historical" className="btn-historical">Historical</Link>
                </div>
                <div className='genre-row5'>
                    <Link to="/discover/recommended" className="btn-recommended">Recommended</Link>
                    <Link to="/discover/series" className="btn-series">Series</Link>
                </div>
                <div className='genre-row6'>
                    <Link to="/discover/humor" className="btn-humor">Humor</Link>
                    <Link to="/discover/spanish" className="btn-spanish">Spanish</Link>
                </div>
                <div className='genre-row7'>
                    <Link to="/discover/educational" className="btn-educational">Educational</Link>
                    <Link to="/discover/enemies" className="btn-enemies">Enemies</Link>
                </div>
                <div className='genre-row8'>
                    <Link to="/discover/comedy" className="btn-comedy">Comedy</Link>
                    <Link to="/discover/friendstolovers" className="btn-friendstolovers">Friends to lovers</Link>
                </div>
            </div>
        </div>
     </div>
    );
};

export default Discussions;

// discussions.js

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DiscussionsImg from '../assets/DiscussionsImg.png';
import DiscussionsImg2 from '../assets/DiscussionsImg2.png';
import DiscussionsImg3 from '../assets/DiscussionsImg3.png';

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
                    <PopularTopicsText>Popular Topics: Adventure, Fantasy, Romance</PopularTopicsText>
                </DiscussionContentContainer>
            </DiscussionHeaderContainer>
            {/* Other content of your discussions */}
        </div>
    );
};

export default Discussions;



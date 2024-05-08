import React from 'react';
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const audiobooks = () => {
    return (
        <AudiobookContainer>
        <AudiobookHeader>
            <AudioHeaderText>Discover our audiobooks</AudioHeaderText>
            
            <AudioSearchBarContainer>
                <AudioInput type="text" id="searchInput" placeholder="Find an audiobook ..." />
                <SearchIcon>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
            </AudioSearchBarContainer>
         
        </AudiobookHeader>

        <NewReleases>

        </NewReleases>

        {/* insert BOTM */}

        <TrendingAudio>
        </TrendingAudio>

        </AudiobookContainer>
    );
};

export default audiobooks;


const AudiobookContainer=styled.div`
    display:flex;
    flex-direction: column;
    width:100wh;
    height:auto;
`;

const AudiobookHeader =styled.div`
    position: relative;
    width: 100%;
    height: 800px;
   
    background-color: #3D326F;
`;

const AudioHeaderText=styled.div`
    color: white;
    font-size: 50px;
    text-align: center;

    padding-top:150px;
`;


const AudioSearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 500px;
`;

const AudioInput = styled.input`
    width: 500px;
    border: 1px solid #ccc;
    padding: 10px 50px ;
    border-radius: 30px;
    height: 50px;
    font-color: #3F3C3C;
    font-family: Manrope;
`;

const SearchIcon = styled.div`
    position: absolute;
    left: 10px;
    color: #3F3C3C;
`;


const NewReleases =styled.div`
    width: 100%;
    height: 500px;

    background-color: blue;
`;

const TrendingAudio=styled.div`
    width: 100%;
    height: 800px;

    background-color: green;
`;
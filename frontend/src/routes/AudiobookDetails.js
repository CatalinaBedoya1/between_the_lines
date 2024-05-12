import React from 'react';
import styled from 'styled-components';
import BOTMbackground from '../assets/purpletintbotm.png';


const AudiobookDetails = () => {
    return(
        <AudiobookDetailsContainer>
            <HeroBackground>
                <img src={BOTMbackground} alt="botm background header"/>

            </HeroBackground>








        </AudiobookDetailsContainer>
    );
};

export default AudiobookDetails;

const AudiobookDetailsContainer =styled.div`
    display:flex;
    flex-direction:column;
    width: 100wh;
    height:auto;
`;

const HeroBackground =styled.div`
    width:100%;
    height:auto;

    background-color: blue;
`;
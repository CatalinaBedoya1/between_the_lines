import React, { useRef }from 'react';
import styled, { keyframes } from 'styled-components';
import BOTMbackground from '../assets/purpletintbotm.png';
import BOTM from '../assets/ifyoucouldseethesun.png';
import starrating from '../assets/StarRating1.png';
import headphones from '../assets/whiteheadphones.png';
import similar1 from "../assets/AudioDetails/similar1.png";
import similar2 from "../assets/AudioDetails/similar2.png";
import similar3 from "../assets/AudioDetails/similar3.png";
import similar4 from "../assets/AudioDetails/similar4.png";
import similar5 from "../assets/AudioDetails/similar5.png";
import similar6 from "../assets/AudioDetails/similar6.png";
import similar7 from "../assets/AudioDetails/similar7.png";
import similar8 from "../assets/AudioDetails/similar8.png";
import similar9 from "../assets/AudioDetails/similar9.png";
import similar10 from "../assets/AudioDetails/similar10.png";
import similar11 from "../assets/AudioDetails/similar11.png";
import similar12 from "../assets/AudioDetails/similar12.png";
import playButton from "../assets/playbutton.png";
import playerLeft from "../assets/playerleft.png";
import playerRight from "../assets/playerright.png";


import { Accordion } from 'react-bootstrap';

const rotateAnimation = keyframes`
    from { transform: rotate (0deg); }
    to { transform: rotate(360deg); }
`;

const AudiobookDetails = () => {
    const containerRef = useRef();

    //Similar audiobooks
    const RELEASES_DATA = [
        { id: "01", cover: similar1, title: "This Time It's Real", author: "Ann Liang" },
        { id: "02", cover: similar2, title: "I Hope This Doesn't Find You", author: "Ann Liang" },
        { id: "03", cover: similar3, title: "A Song to Drown Rivers", author: "Ann Liang" },
        { id: "04", cover: similar4, title: "Today Tonight Tomorrow", author: "Rachel Lynn Solomon" },
        { id: "05", cover: similar5, title: "My Mechanical Romance", author: "Alexene Farol Follmuth" },
        { id: "06", cover: similar6, title: "The Do-Over", author: "Lynn Painter" },
        { id: "07", cover: similar9, title: "Better Than the Movies", author: "Lynn Painter" },
        { id: "08", cover: similar7, title: "A Magic Steeped in Poison", author: "Judy I. Lin" },
        { id: "09", cover: similar8, title: "Not Here to Be Liked", author: "Michelle Quach" },
        { id: "10", cover: similar10, title: "XOXO", author: "Axie Oh" },
        { id: "11", cover: similar11, title: "ASAP", author: "Axie Oh" },
        { id: "12", cover: similar12, title: "Check & Mate", author: "Ali Hazelwood" },
    
    ];

    return (
        <AudiobookDetailsContainer>
            <HeroBackground>
                <img src={BOTMbackground} alt="botm background header"/>
            </HeroBackground>

            <DetailsContainer>
            <LeftContainer>
                
                <BOTMimg src={BOTM} alt="botm"/>
                <Ratingimg src={starrating} alt="star rating"/>
                <AddButton>
                    Add to library  
                    <Headphoneimg src={headphones} alt="white headphones"/>
                </AddButton>
            {/*
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Introduction</Accordion.Header>
                    <Accordion.Body>
                    text
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Chapter 1</Accordion.Header>
                    <Accordion.Body>
                    text
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
    */}
            </LeftContainer>

            <RightContainer>
                <HeaderContent>
                    <HeaderTitle>If You Could See the Sun</HeaderTitle>
                    <HeaderAuthor>Ann Liang</HeaderAuthor>
                    <br></br>
                    <br></br>
                    <Time>9 hours 2 minutes</Time>
                </HeaderContent>

                
         
                
                
                

                <HeaderBody>
                    <PlayerButtons>
                        <img src={playerLeft} alt="left side of play button"/>
                        <img src={playButton} alt="play button"/>
                        <img src={playerRight} alt="right side play button"/>
                    </PlayerButtons>



                    <BodyP>
                        Alice Sun has always felt invisible at her elite Beijing international boarding school, where she’s the only scholarship student among China’s most rich and influential teens. But then she starts uncontrollably turning invisible—actually invisible.
                    </BodyP>
                    <br></br>
                    <BodyP>
                        When her parents drop the news that they can no longer afford her tuition, even with the scholarship, Alice hatches a plan to monetize her strange new power—she’ll discover the scandalous secrets her classmates want to know, for a price.
                    </BodyP>
                    <br></br>
                    <BodyP>
                        But as the tasks escalate from petty scandals to actual crimes, Alice must decide if it’s worth losing her conscience—or even her life.
                    </BodyP>
                    <br></br>
                    <BodyP>
                        In this genre-bending YA debut, a Chinese American girl monetizes her strange new invisibility powers by discovering and selling her wealthy classmates’ most scandalous secrets.
                    </BodyP>

                </HeaderBody>

            </RightContainer>

            </DetailsContainer>


            <HeaderText>Similar audiobooks ...</HeaderText>
            <AudioSlider>
                <ScrollContainer ref={containerRef}>
                    <NewReleaseContentBox>
                        {RELEASES_DATA.map((ReleaseData) => (
                            <RecordCard key={ReleaseData.id}>
                                <img src={ReleaseData.cover} alt="recordimg" />
                                <RTitle>{ReleaseData.title}</RTitle>
                                <RAuthor>{ReleaseData.author}</RAuthor>
                            </RecordCard>
                        ))}
                    </NewReleaseContentBox>
                </ScrollContainer>
            </AudioSlider>





        </AudiobookDetailsContainer>
    );
};

export default AudiobookDetails;

const AudiobookDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
`;
const HeroBackground = styled.div`
    width: 100%;
    height: auto;

    img {
        width: 100%;
        height: auto;
    }
`;

const DetailsContainer =styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:autox;
    justify-content:center;


    position: relative;
    top:-250px;
    z-index: 1;

    //background-color:blue;
`;

const LeftContainer = styled.div`
    flex-direction:column;
    width:500px;
    height:auto;
    justify-content:center;
    align-items:center;
    text-align:center;

    //background-color:green;
`;
const BOTMimg =styled.img`
    width:400px;
    height:400px;
    border-radius:50%;    
    margin-bottom: 30px;
`;
const Ratingimg=styled.img`
    width: 200px;
    height:auto;
    margin-bottom:20px;
`;
const AddButton = styled.div`
    width: 300px;
    height:50px;
    border-radius:50px;
    background-color:#F8A2C0;
    color:white;
    font-family:Manrope;
    font-size:25px;
    text-align:center;
    align-content:center;
    margin: 0 auto; 
    
    

    &:hover{
        background-color: #EC6D9A;
    }
`;
const Headphoneimg=styled.img`
    width:30px;
    height:auto;
    margin-left:10px;
`;





const RightContainer = styled.div`
    flex-direction:column;
    width:1000px;
    height:auto;
    //background-color:grey;

`;

const HeaderContent =styled.div`
    width:800px;
    height:auto;
    margin-bottom:100px;
    margin-left:100px;
`;
const HeaderTitle =styled.div`
    font-family: Agbalumo;
    font-weight:500;
    font-size: 60px;
    color:white;
`;
const HeaderAuthor=styled.div`
    font-family: Manrope;
    font-weight:500;
    font-size:40px;
    color:white;
`;
const Time = styled.div`
    font-family: Manrope;
    font-weight:500;
    font-size: 30px;
    color:white;
`;


const PlayerButtons =styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    margin-bottom:30px;


    align-items:center;
    width: 600px;
    height: 100px;
`;

const HeaderBody = styled.div`
    align-items: center; 
    justify-content: center; 
    font-family: Manrope;
    font-weight: 500;
    font-size: 25px;
    color: #3d326f;
    width: 600px;
    height: auto;
    margin: 0 auto; 
    //background-color: green;
`;

const BodyP = styled.div`
    font-family:Manrope;
    font-size:20px;
    color:#3D326F;
    text-align:center;


`;







//simialr audiobooks text
const HeaderText = styled.div`
    font-size:30px;
    font-family: Manrope;
    padding-left:100px;
    padding-top:30px;
`;

//copied & pastedfrom audiobook slider
const AudioSlider = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: auto;
    padding-bottom:40px;
`;
const ScrollContainer = styled.div`
    width: 1400px; //1150px;
    height: 400px; //moves scroll bar
    display: flex;
    flex-direction: row;

    overflow-x: scroll;
    scroll-behavior: smooth;
    padding-bottom:20px;
    font-family: Manrope;
    font-size:25px;

    &::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: #d6d6d6;
        border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #5397AC;
        border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
const NewReleaseContentBox = styled.div`
    //width: 2250px;
    display: flex;
    align-items: center;
    padding-left:30px;
    gap: 70px;
    font-size:18px;

    //background-color: blue;
`;
const RecordCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin: 10px;
    width: 145px;
    height: 214px;
    position: relative;

    
    img {
        width: 200px; 
        height: 200px;
        border-radius:50%;
        transition: transform 0.2s ease;
    }

    &:hover{
        transform: scale(1.1);
        
        &:hover img{
            animation: ${rotateAnimation} 10s linear infinite;
        }
    }
`;
const RTitle = styled.div`
    width: 200px;
    margin-top:10px;
    text-align:center;
`;
const RAuthor =styled.div`
    width: 200px;
    margin-top:5px;
    text-align:center;
`;

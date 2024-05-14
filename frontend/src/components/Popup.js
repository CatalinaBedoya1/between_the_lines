import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import EnvelopeBack from '../assets/BOTMButton/EnvelopeBack.png';
import EnvelopeFront from '../assets/BOTMButton/EnvelopeFront.png';
import EnvelopeTriangle from '../assets/BOTMButton/EnvelopeClosed.png';
import newBOTM from '../assets/VotingBook1.png';
import XButton from '../assets/XButton.png';

const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

function Popup(props) {
    const [triangleHovered, setTriangleHovered] = useState(false);
    const [showNewBOTM, setShowNewBOTM] = useState(false);

    const handleTriangleHover = () => {
        if (!triangleHovered) {
            setTriangleHovered(true);
            setTimeout(() => {
                setShowNewBOTM(true);
            }, 500); // delay for 0.5 seconds (1000 ms = 1s)
        }
    };

    return (props.trigger) ? (
        <PopupContainer>
            <PopupInner>
                <CloseBtn src={XButton} onClick={() => props.setTrigger(false)}></CloseBtn>

                <PopupText>Check out which book is the new book of the month!</PopupText>
                <BOTMEnvelopeContainer>
                    <EnBack src={EnvelopeBack} alt="EnvelopeBack" />
                    <EnFront src={EnvelopeFront} alt="EnvelopeFront" />
                    <NewBOTM src={newBOTM} alt="New voted BOTM" showNewBOTM={showNewBOTM} /> 
                    <EnTriangle
                        src={EnvelopeTriangle}
                        alt="EnvelopeTriangle"
                        triangleHovered={triangleHovered}
                        onMouseEnter={handleTriangleHover}
                    />
                </BOTMEnvelopeContainer>
                {props.children}
            </PopupInner>
        </PopupContainer>
    ) : "";
}

export default Popup;

const PopupContainer = styled.div`
  position: fixed;
  top:20px;
  left:0;
  width:100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
  z-index:4;
`;

const PopupInner = styled.div`
  position:relative;
  padding:30px;
  width: 100%;
  max-width:500px;
  height: 100%;
  max-height: 600px;
  background-color: white;
  border-radius: 50px;
`;

const CloseBtn = styled.img`
  position: absolute;
  top: 30px;
  right: 30px;
  width:30px;
  height:30px;
`;

const PopupText = styled.div`
  width:auto;
  height:auto;
  z-index: 1;
  //background-color:green;

  font-family: Manrope;
  font-size:30px; 
  text-align: center;
  margin-top: 40px;
`;

const BOTMEnvelopeContainer = styled.div`
  position: relative;
  top: 20px;
  width: 100%;
  height: 100%;
  overflow:hidden;
  cursor:pointer;
  animation: ${bounce} 1s infinite; 
  &:hover {
    animation-play-state: paused;
  }
  //background-color: blue;
`;

const EnBack = styled.img`
  position: relative;
  top:120px;
  left:70px;
  width:300px;
  height:auto;
  z-index:5;
`;

const NewBOTM = styled.img`
  position:absolute;
  top:120px;
  left:145px;
  z-index: ${props => props.showNewBOTM ? '10' : '6'};
  width: 150px;
  height:200px;
  transform: scale(${props => props.showNewBOTM ? '1.5' : '0'}); 
  transition: transform 0.5s;
`;

const EnFront = styled.img`
  position: absolute;
  top:120px;
  left:70px;
  z-index:7;
  width:300px;
  height:auto;
`;

const EnTriangle = styled.img`
  position: absolute;
  top:120px;
  left:70px;
  z-index:8;
  width:300px;
  height:auto;

  transform: ${props => props.triangleHovered ? 'translateY(-109px) rotate(180deg)' : 'none'};
`;
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import BOTMText from '../assets/BOTMButton/BOTMText.png';
import BOTMBookIcon from '../assets/BOTMButton/BOTMBookIcon.png';
import Popup from './Popup';


const rotate = keyframes`
    from { transform: rotate (0deg); }
    to { transform: rotate(360deg); }
`;

const BOTMButton = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
    <BOTMbuttonContainer onClick={() => setButtonPopup(true)}>
        <BOTMCircleText>
        <img src={BOTMText} alt="BOTMtext"/>
        </BOTMCircleText>

        <BOTMIcon>
            <img src={BOTMBookIcon} alt="BOTMbookicon"/>
        </BOTMIcon>
    </BOTMbuttonContainer>

    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

    </Popup>
    </div>
 
  );
};


export default BOTMButton;




const BOTMbuttonContainer = styled.div`
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index:5;

    //background-color:green;
`;


const BOTMCircleText =styled.div`
    text-align: center;      //horizontally
    line-height: 0px;        //vertically
    position: relative;
    animation: ${rotate} 20s linear infinite;

    z-index:5;
`;


const BOTMIcon =styled.div`
    position: absolute;
    top:27px;
    left:27px;

    z-index:5;
`;

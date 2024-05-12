import React from 'react';
import styled from 'styled-components';
import EnvelopeBack from '../assets/BOTMButton/EnvelopeBack.png';
import EnvelopeFront from '../assets/BOTMButton/EnvelopeFront.png';
import EnvelopeTriangle from '../assets/BOTMButton/EnvelopeClosed.png';
import newBOTM from '../assets/VotingBook1.png';


function Popup(props) {
    return (props.trigger) ? (
      <PopupContainer>
        <PopupInner>
          <CloseBtn onClick={() => props.setTrigger(false)}>close</CloseBtn>


            <BOTMEnvelopeContainer>
               
                <EnBack src={EnvelopeBack} alt="EnvelopeBack" />
                <EnFront src={EnvelopeFront} alt="EnvelopeFront" />
                <NewBOTM src={newBOTM} alt="New voted BOTM"/>
                <EnTriangle src={EnvelopeTriangle} alt="EnvelopeTriangle" />
               
            </BOTMEnvelopeContainer>




          { props.children}
        </PopupInner>
      </PopupContainer>
    ) : "";
  }
 
  export default Popup;


  const PopupContainer =styled.div`
    position: fixed;
    top:20px;
    left:0;
    width:100%;
    height: 100vh;


    //background-color: green;
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
    max-height: 400px;
    background-color: white;
    border-radius: 50px;
  `;


  const CloseBtn = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
 
    //background-color: red;
  `;


  const BOTMEnvelopeContainer = styled.div`
    position: relative;
    top: 20px;


    width: 100%;
    height: 100%;
    //background-color: blue;


    overflow:hidden;
    cursor:pointer;
  `;




  const EnBack =styled.img`
    position: relative;
    top:120px;
    left:70px;
    width:300px;
    height:auto;
    z-index:5;
  `;
 
  const NewBOTM =styled.img`
    position:absolute;
    top:120px;
    left:170px;
    z-index:6;
    width: 100px;
    height:100px;
  `;


 
  const EnFront =styled.img`
    position: absolute;
    top:120px;
    left:70px;
    z-index:7;
    width:300px;
    height:auto;
`;
   
const EnTriangle =styled.img`
    position: absolute;
    top:120px;
    left:70px;
    z-index:8;
    width:300px;
    height:auto;


    &: hover {
        transform: translateY(-109px) rotate(180deg);
        z-index:5;
       
    }
`;

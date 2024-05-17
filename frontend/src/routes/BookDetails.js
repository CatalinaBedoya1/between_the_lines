import React from 'react';
import styled from 'styled-components';
import CreatePost from '../components/CreatePost';
import BOTMZoomImg from '../assets/BOTM_GROUP2.png';
import BOTMCoverImg from '../assets/ifyoucouldseethesun.png';
import Stars from '../assets/StarRating1.png';
import AmazonIcon from '../assets/AmazonIcon.png';
import BandNImg from '../assets/BarnesAndNobleIcon.png';
import ChromeImg from '../assets/ChromeIcon.png'; 
import WTRIcon from '../assets/WTRIcon.png';
import WTLIcon from '../assets/WTLIcon.png';

const BookDetails =() => {
    return(
        <BookDetailsContainer>
        <BOTMHeaderContainer>
            <BOTMZoom src = {BOTMZoomImg} alt="BOTM zoomed header" />
            <BOTMMainDetails>
            <h1>BOOK OF THE MONTH</h1>
            <h2>If You Could See The Sun</h2>
            <h3>Ann Liang</h3>
            </BOTMMainDetails>
        </BOTMHeaderContainer>

            <IfYouCouldSeeTheSunContainer>
            <BookDetailsContainer>
                <BOTMCover src = {BOTMCoverImg} alt = "BOTM Cover" />
                <StarRating1 src = {Stars} alt = "Star Rating" />
                <WantToReadBtn>Want to Read</WantToReadBtn>
                <WTRImg src = {WTRIcon} alt= "Book Icon" />
                <WantToListenBtn>Want to Listen</WantToListenBtn>
                <WTLImg src = {WTLIcon} alt= "Headphones Icon" />
            </BookDetailsContainer>

            <SpecificDetailsContainer>
                <p1>352 pages</p1>
                <p>Published: Oct. 11, 2022</p>
                <p>ISBN: 9781335915849</p>
                <BookLinks>
                <Amazon src = {AmazonIcon} alt = "Amazon icon" />
                <BandN src = {BandNImg} alt = "Barnes and Noble Icon" />
                <Chrome src = {ChromeImg} alt = "Chrome Icon" />
                </BookLinks>
            </SpecificDetailsContainer>

            <BookSummary>
                <p1>Alice Sun has always felt invisible at her elite Beijing international boarding school, where she’s the only scholarship student among China’s most rich and influential teens. But then she starts uncontrollably turning invisible—actually invisible.</p1>
                <p2>When her parents drop the news that they can no longer afford her tuition, even with the scholarship, Alice hatches a plan to monetize her strange new power—she’ll discover the scandalous secrets her classmates want to know, for a price.</p2>
                <p3>But as the tasks escalate from petty scandals to actual crimes, Alice must decide if it’s worth losing her conscience—or even her life.</p3>
                <p4>In this genre-bending YA debut, a Chinese American girl monetizes her strange new invisibility powers by discovering and selling her wealthy classmates’ most scandalous secrets.</p4>
            </BookSummary>
            </IfYouCouldSeeTheSunContainer>
            <CreatePost />
            </BookDetailsContainer>
    )
}

export default BookDetails;


const BookDetailsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

const BOTMHeaderContainer = styled.div`
    postition: relative;
    padding-top: 80px;
    width: 100%;
    height: 370px;
  `;

const BOTMZoom = styled.img`
    position: absolute;
`;

const BOTMMainDetails = styled.div`
    position: absolute;
    margin-top: 210px;
    color: white;

    h1{
        font-size: 70px;
        margin-bottom: 40px;
        margin-left: 650px;
        font-family: "Agbalumo";
    }

    h2{
        font-size: 50px;
        margin-left: 700px;
        font-family: "Manrope", sans-serif;
        font-weight: 700;
    }

    h3{
        font-size: 45px;
        margin-left: 860px;
        font-family: "Manrope", sans-serif;
        font-weight: 500;
    }
`;

const IfYouCouldSeeTheSunContainer = styled.div`
    display: flex;
    flex-direction: column;
`;



const BOTMCover = styled.img`
    width: 475px;
    height: auto;
    margin-top: -100px;
    margin-left: 80px;
    border: 5px solid white;
`;

const StarRating1 = styled.img`
    width: 400px;
    height: auto;
    margin-left: 110px;
    margin-top: 20px;
`;

const WTRImg = styled.img`
width: 35px;
height: auto;
margin-left: 400px;
margin-top: -45px;
`;

const WantToReadBtn = styled.div`
font-family: "Manrope", sans-serif;
font-weight: 700;
margin-top: 20px;
margin-left: 130px;
width: 350px;
height: auto;
text-align: center;
font-style: normal;
color: #3E2D70;
  padding: 10px 35px;
  background-color: #F68AAF; 
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 25px;
  cursor: pointer;
  
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #CD6F90; 
  }
`;

const WTLImg = styled.img`
width: 35px;
height: auto;
margin-left: 405px;
margin-top: -45px;
`;

const WantToListenBtn = styled.div`
font-family: "Manrope", sans-serif;
font-weight: 700;
margin-top: 20px;
margin-left: 130px;
width: 350px;
height: auto;
text-align: center;
font-style: normal;
color: #3E2D70;
  padding: 10px 35px;
  background-color: #F68AAF; 
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 25px;
  cursor: pointer;
  
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #CD6F90; 
  }
`;

const SpecificDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;
  height: 390px;
  margin-top: 35px;
  margin-left: 90px;
  border: 5px solid;
  border-radius: 10px;
  border-color: #DA91AB;
  font-size: 30px;
  line-height: 30px;

  p1{
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    color: #3E2D70;
    margin-top: 30px;
    text-align: center;
  }

  p{
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    color: #3E2D70;
    margin-top: 30px;
    text-align: center;
  }
`;

const BookLinks = styled.div`
display: flex;
flex-direction: row;
margin-top: 20px;

`;
const Amazon = styled.img`
width: 120px;
height auto;
margin-left: 25px;
margin-right: 15px;
`;

const BandN = styled.img`
width: 120px;
height auto;
margin-right: 15px;

`;

const Chrome = styled.img`
width: 100px;
height auto;
margin-left: 15px;
`;

const BookSummary = styled.div`
display: flex;
flex-direction: column;
width: 50vw;
height: auto;
margin-left: 640px;
font-family: "Manrope", sans-serif;
font-weight: 600;
color: #3E2D70;
font-size: 25px;
line-height: 40px;
text-align: center;

p1{

    margin-top: -900px;
}

p2{
    margin-top: 20px;
}

p3{
    margin-top: 20px;

}

p4{
    margin-top: 20px;
}
`;
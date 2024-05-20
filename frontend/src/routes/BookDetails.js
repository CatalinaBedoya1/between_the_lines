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
import bookforumimg1 from '../assets/ifyoucouldseethesun.png';
import profile1 from '../assets/profile1.png';
import profile4 from '../assets/profile4.png';
import profile3 from '../assets/profile3.png';
import profile2 from '../assets/profile2.png';
import instagram from '../assets/Vector.png';
import twitter from '../assets/Vector (1).png';
import BOTMAward from '../assets/award.png';

const BookDetails =() => {
    const amazonUrl = 'https://a.co/d/ccrjH7x'; 
    const barnesAndNobleUrl = 'https://www.barnesandnoble.com/w/if-you-could-see-the-sun-ann-liang/1140845015?ean=9781335005984'; 
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
                        <a href={amazonUrl} target="_blank" rel="noopener noreferrer">
                            <Amazon src={AmazonIcon} alt="Amazon icon" />
                        </a>
                        <a href={barnesAndNobleUrl} target="_blank" rel="noopener noreferrer">
                            <BandN src={BandNImg} alt="Barnes and Noble Icon" />
                        </a>
                        <Chrome src={ChromeImg} alt="Chrome Icon" />
                    </BookLinks>
            </SpecificDetailsContainer>

            <BookSummary>
                <p1>Alice Sun has always felt invisible at her elite Beijing international boarding school, where she’s the only scholarship student among China’s most rich and influential teens. But then she starts uncontrollably turning invisible—actually invisible.</p1>
                <p2>When her parents drop the news that they can no longer afford her tuition, even with the scholarship, Alice hatches a plan to monetize her strange new power—she’ll discover the scandalous secrets her classmates want to know, for a price.</p2>
                <p3>But as the tasks escalate from petty scandals to actual crimes, Alice must decide if it’s worth losing her conscience—or even her life.</p3>
                <p4>In this genre-bending YA debut, a Chinese American girl monetizes her strange new invisibility powers by discovering and selling her wealthy classmates’ most scandalous secrets.</p4>
            </BookSummary>
            </IfYouCouldSeeTheSunContainer>

            <BFContainerRow>
                <BookCard>
                    <BookForumImg1>
                        <img src= {bookforumimg1} alt="Book Cover for Forum 1" />
                    </BookForumImg1>
                    <Award>
                        <img src= {BOTMAward} alt="Award Icon for Book of the Month" />
                    </Award>
                </BookCard>
                <BookForumContainer>
                <HeaderContent>
                    <BookInfo>
                    <h2>If You Could See The Sun</h2>
                    <h3>Ann Liang</h3>
                    <GenreButtons>
                        <Genre1>Fiction</Genre1>
                        <Genre2>Fantasy</Genre2>
                    </GenreButtons>
                    </BookInfo>
                    <Share>
                        <h2>Share:</h2>
                        <img src= {instagram} alt="Instagram Icon" />
                        <img src= {twitter} alt="Award Icon for Book of the Month" />
                    </Share>
                </HeaderContent>
                <Forum>
                <ForumHeadings>
                    <FH1>Topic</FH1>
                    <FH2>Replies</FH2>
                    <FH3>Views</FH3>
                    <FH4>User</FH4>
                    <FH5>Date</FH5>
                </ForumHeadings>
                <ForumDivider></ForumDivider>
                <User1>
                    <Topic1>Ann Liang's Best Work</Topic1>
                    <Replies1>3,599</Replies1>
                    <Views1>4,023</Views1>
                    <img src = {profile1} alt="Profile Img 1" />
                    <Date1>15 seconds ago</Date1>
                </User1>

                <User2>
                    <Topic2>Let's talk about that ending...</Topic2>
                    <Replies2>3,758</Replies2>
                    <Views2>5,135</Views2>
                    <img src = {profile2} alt="Profile Img 1" />
                    <Date2>25 seconds ago</Date2>
                </User2>

                <User3>
                    <Topic3>Chapter 7</Topic3>
                    <Replies3>2,134</Replies3>
                    <Views3>3,952</Views3>
                    <img src = {profile3} alt="Profile Img 3" />
                    <Date3>40 seconds ago</Date3>
                </User3>

                <User4>
                    <Topic4>Favorite Character</Topic4>
                    <Replies4>5,719</Replies4>
                    <Views4>6,085</Views4>
                    <img src = {profile4} alt="Profile Img 3" />
                    <Date4>55 seconds ago</Date4>
                </User4>

                <p>Load More...</p>

                </Forum>
            </BookForumContainer>
            </BFContainerRow>
        
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

    img{
        width: 100%;
        height: auto;
    }
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

const BFContainerRow= styled.div`
  display: flex;
  flex-direction: row;
`;
const BookForumContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 30px;
  margin-bottom: 50px;
`;

const BookCard = styled.div`
display: flex;
flex-direction: column;
margin-top: 120px;
margin-left: 100px;
`;

const BookForumImg1 = styled.div`
    img{
        width: auto;
        height: 500px;
        margin-bottom:40px;
        }
`;

const BookForumImg2 = styled(BookForumImg1)`
    img{
        margin-top:-50px;
        }
`;
const Award = styled.div`
    img{
        z-index: 1;
        margin-top: -120px;
        margin-left: -20px;
}        
`;

const HeaderContent = styled.div`
display: flex;
flex-direction: row;
`;

const BookInfo = styled.div`
margin-left: 50px;
font-family: "Manrope", sans-serif;
font-weight: 700;
font-size: 25px;
color: #3E2D70;
display: flex;
flex-direction: column;
margin-top: 100px;
`;

const GenreButtons = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
gap: 15px;
`;

const BaseGenreButton = styled.div`
font-family: "Manrope", sans-serif;
font-weight: 700;
padding: 12px 30px;
border-radius: 50px;
font-size: 18px;
color: white;
cursor: pointer;
border: none;
`;

const Genre2 = styled(BaseGenreButton)`
background-color: #88C3E4;
`;

const Genre1 = styled(BaseGenreButton)`
background-color: #897AD5;
`;

const Share = styled.div`
font-family: "Manrope", sans-serif;
font-weight: 700;
font-size: 18px;
color: #3E2D70;
margin-left: 200px;
margin-top: 100px;

img{
    margin-right: 20px;
    margin-top: 10px;
}
`;

const Share2 = styled(Share)`
margin-left: 250px;
`;

const Forum = styled.div`
display: flex;
flex-direction: column;
margin-top: 170px;

p{
    text-align: center;
    font-size: 20px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    color: gray;
    margin-top: 20px;

}
`;

const ForumHeadings = styled.div`
display: flex;
flex-direction: row;
font-size: 20px;
font-family: "Manrope", sans-serif;
font-weight: 600;
color: #3E2D70;
margin-top: -80px;
margin-left: 60px;
`;

const FH1 = styled(ForumHeadings)`
margin-left: -10px;
`;

const FH2 = styled(ForumHeadings)`
margin-left: 300px;
`;

const FH3 = styled(ForumHeadings)`
`;

const FH4 = styled(ForumHeadings)`
`;

const FH5 = styled(ForumHeadings)`
margin-left: 70px;
`;

const ForumDivider = styled.div`
height: 2px;
width: 820px;
background-color: #ccc; 
margin-top: -40px;
margin-left: 50px;
`;

const User1 = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
font-size: 20px;
font-family: "Manrope", sans-serif;
font-weight: 600;
color: #3E2D70;

img{
    width: 45px;
    height: auto;
    margin-left: 60px;
}
`;

const Topic1 = styled(User1)`
margin-left: 50px;
margin-right: 110px;
`;

const Replies1 = styled(User1)`
margin-left: 40px;
`;

const Views1 = styled(User1)`
margin-left: 70px;
`;

const Date1 = styled(User1)`
margin-left: 30px;
`;

const User2 = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
font-size: 20px;
font-family: "Manrope", sans-serif;
font-weight: 600;
color: #3E2D70;

img{
    width: 45px;
    height: auto;
    margin-left: 60px;
}
`;

const Topic2 = styled(User2)`
margin-left: 50px;
margin-right: 80px;
`;

const Replies2 = styled(User1)`

`;

const Views2 = styled(Views1)`
margin-left: 79px;
`;

const Date2 = styled(Date1)`
`;

const User3 = styled(User1)`
`;

const Topic3 = styled(User1)`
margin-left: 50px;
margin-right: 265px;
`;

const Replies3 = styled(User1)`
`;

const Views3 = styled(Views1)`
margin-left: 76px;
`;

const Date3 = styled(Date1)`
`;

const User4 = styled(User1)`
`;

const Topic4 = styled(User1)`
margin-left: 50px;
margin-right: 180px;
`;

const Replies4 = styled(User1)`
`;

const Views4 = styled(Views1)`
margin-left: 73px;
`;

const Date4 = styled(Date1)`
`;
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DiscussionsImg from '../assets/DiscussionsImg.png';
import DiscussionsImg2 from '../assets/DiscussionsImg2.png';
import DiscussionsImg3 from '../assets/DiscussionsImg3.png';
import { Link } from 'react-router-dom';
import CreatePost from '../components/CreatePost';
import WordLoopAnimation from '../components/WordLoopAnimation';
import bookforumimg1 from '../assets/ifyoucouldseethesun.png';
import profile1 from '../assets/profile1.png';
import profile4 from '../assets/profile4.png';
import profile3 from '../assets/profile3.png';
import profile2 from '../assets/profile2.png';
import bookforumimg2 from '../assets/bookforumimg2.png';
import bookforumimg3 from '../assets/bookforumimg3.png';
import bookforumimg4 from '../assets/bookforumimg4.png';
import instagram from '../assets/Vector.png';
import twitter from '../assets/Vector (1).png';
import BOTMAward from '../assets/award.png';

const DiscussionHeaderContainer = styled.div`
    position: relative;
    height: 450px;
    width: 100vw;
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
    background-image: url(${DiscussionsImg});
    background-size: cover;
    background-position: center;
    opacity: 0.6;

`;

const DiscussionContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px; /* Adjust as needed */
    text-align: center;
`;

const DiscussionTopContent = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0px;
`;

const DisLeftImageContainer = styled.div`
    padding-bottom: 20px;
    z-index:2;
`;

const DisRightImageContainer = styled.div`
    padding-bottom: 20px;
    z-index: 2;
`;

const DisLeftImage = styled.img`
    width: 270px;
    height: auto;
    margin-top: 100px;
    margin-left: 100px;
`;

const DisRightImage = styled.img`
    width: auto; /* Adjust size as needed */
    height: 260px;
`;

const DiscussionSearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    width: 500px;
    margin-left: 100px;
`;

const DiscussionInput = styled.input`
    width: 500px;
    border: 1px solid #ccc;
    padding: 10px 50px ;
    border-radius: 30px;
    height: 50px;
    font-color: #3F3C3C;
    font-family: Inter;
`;

const SearchIcon = styled.div`
    position: absolute;
    left: 10px;
    color: #3F3C3C;
`;

const PopularTopicsText = styled.div`
    font-size: 16px;
    font-family: Roboto;
    color: white;
    z-index: 1;
    margin-top: -100px;
    margin-right: 30px;
`;
const DiscussionTitle = styled.h1`
  font-size: 40px;
  font-family: Roboto;
  font-weight: bold;
  color: white; 
  z-index: 2;
  margin-top: 60px;
  position: relative; 
  overflow: hidden;
  display: flex; 
  align-items: center; /* Align items vertically */
`;

const Text = styled.span`
  margin-right: 10px; 
  font-size: 40px;
  font-family: Roboto;
  
`;

const Discussions = () => {
    return (
        <div>
            <DiscussionHeaderContainer>
            <DiscussionBackgroundImage src={DiscussionsImg} alt="Discussions-img2" />
                <DiscussionContentContainer>
                <DiscussionTitle><Text>Find what you're looking for: </Text> <WordLoopAnimation /></DiscussionTitle>
                
                    <DiscussionTopContent>
                        <DisLeftImageContainer>
                            <DisLeftImage src={DiscussionsImg2} alt="Discussions-img2" />
                        </DisLeftImageContainer>
                        <DiscussionSearchBarContainer>
                            <DiscussionInput type="text" id="searchInput" placeholder="Search for topics..." />
                            <SearchIcon>
                                <FontAwesomeIcon icon={faSearch} />
                            </SearchIcon>
                        </DiscussionSearchBarContainer>
                        <DisRightImageContainer>
                            <DisRightImage src={DiscussionsImg3} alt="Discussions-img3" />
                        </DisRightImageContainer>
                    </DiscussionTopContent>
                    <PopularTopicsText>Popular Topics:  Adventure, Fantasy, Romance, Memoirs</PopularTopicsText>
                </DiscussionContentContainer>
            </DiscussionHeaderContainer>
            
            <EntireDiscussion>
            <BtnsLine1>
                <ViewAllbtn>View All</ViewAllbtn>
                <Trendingbtn>Trending</Trendingbtn>
                <BOTMbtn>Book of the Month</BOTMbtn>
                <Recommendationsbtn>Recommendations</Recommendationsbtn>
                <UserFeedbackbtn>User Feedback</UserFeedbackbtn>
            </BtnsLine1>

            <FilterDivider></FilterDivider>
            <FilterLine2Container>
                <Filter>
                    <h3>Filter:</h3>
                </Filter>
            <Discussionsbuttons>
                    <Thriller>Thriller</Thriller>
                    <Romance>Romance</Romance>
                    <Cliffhanger>Cliff-hanger</Cliffhanger>
                    <BookReview>Book Review</BookReview>
                    <Fantasy>Fantasy</Fantasy>
                    <Morebtn>+</Morebtn>
            </Discussionsbuttons>
            </FilterLine2Container>

            <ForumName>
            <p> Trending Forums</p>
            </ForumName>

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
                    <StyledLink to= "/community/BookDetails"><Topic1>Ann Liang's Best Work</Topic1></StyledLink>
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
        
            <BFContainerRow>
                <BookCard>
                    <BookForumImg2>
                        <img src= {bookforumimg2} alt="Book Cover for Forum 2" />
                    </BookForumImg2>
                </BookCard>
                <BookForumContainer>
                <HeaderContent>
                    <BookInfo>
                    <h2>Things We Left Behind</h2>
                    <h3>Lucy Score</h3>
                    </BookInfo>
                    <Share2>
                        <h2>Share:</h2>
                        <img src= {instagram} alt="Instagram Icon" />
                        <img src= {twitter} alt="Award Icon for Book of the Month" />
                    </Share2>
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
                <User5>
                    <Topic5>Lucian and Sloane</Topic5>
                    <Replies5>4,376</Replies5>
                    <Views5>6,828</Views5>
                    <img src = {profile1} alt="Profile Img 1" />
                    <Date5>7 seconds ago</Date5>
                </User5>

                <User6>
                    <Topic6>Favorite Quotes</Topic6>
                    <Replies6>3,157</Replies6>
                    <Views6>4,985</Views6>
                    <img src = {profile2} alt="Profile Img 2" />
                    <Date6>19 seconds ago</Date6>
                </User6>

                <User7>
                    <Topic7>Initial Reactions?</Topic7>
                    <Replies7>1,579</Replies7>
                    <Views7>3,118</Views7>
                    <img src = {profile3} alt="Profile Img 3" />
                    <Date7>36 seconds ago</Date7>
                </User7>

                <User8>
                    <Topic8>Any Similar Recommendations?</Topic8>
                    <Replies8>4,032</Replies8>
                    <Views8>7,250</Views8>
                    <img src = {profile4} alt="Profile Img 4" />
                    <Date8>49 seconds ago</Date8>
                </User8>

                <p>Load More...</p>

                </Forum>
            </BookForumContainer>
            </BFContainerRow>
        
            <BFContainerRow>
                <BookCard>
                    <BookForumImg2>
                        <img src= {bookforumimg3} alt="Book Cover for Forum 3" />
                    </BookForumImg2>
                </BookCard>
                <BookForumContainer>
                <HeaderContent>
                    <BookInfo>
                    <h2>Love and Other Words</h2>
                    <h3>Christina Lauren</h3>
                    </BookInfo>
                    <Share2>
                        <h2>Share:</h2>
                        <img src= {instagram} alt="Instagram Icon" />
                        <img src= {twitter} alt="Award Icon for Book of the Month" />
                    </Share2>
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
                <User9>
                    <Topic9>Macy's Character Development </Topic9>
                    <Replies9>4,587</Replies9>
                    <Views9>5,724</Views9>
                    <img src = {profile1} alt="Profile Img 1" />
                    <Date9>19 seconds ago</Date9>
                </User9>

                <User10>
                    <Topic10>Themes of Love + Forgiveness</Topic10>
                    <Replies10>1,211</Replies10>
                    <Views10>2,372</Views10>
                    <img src = {profile2} alt="Profile Img 2" />
                    <Date10>29 seconds ago</Date10>
                </User10>

                <User11>
                    <Topic11>Opinions on Dual Timeline</Topic11>
                    <Replies11>2,134</Replies11>
                    <Views11>3,952</Views11>
                    <img src = {profile3} alt="Profile Img 3" />
                    <Date11>40 seconds ago</Date11>
                </User11>

                <User12>
                    <Topic12>Chapter 36</Topic12>
                    <Replies12>5,719</Replies12>
                    <Views12>6,085</Views12>
                    <img src = {profile4} alt="Profile Img 4" />
                    <Date12>55 seconds ago</Date12>
                </User12>

                <p>Load More...</p>

                </Forum>
            </BookForumContainer>
            </BFContainerRow>

            <BFContainerRow>
                <BookCard>
                    <BookForumImg2>
                        <img src= {bookforumimg4} alt="Book Cover for Forum 4" />
                    </BookForumImg2>
                </BookCard>
                <BookForumContainer>
                <HeaderContent>
                    <BookInfo>
                    <h2>You've Reached Sam</h2>
                    <h3>Dustin Thao</h3>
                    </BookInfo>
                    <Share2>
                        <h2>Share:</h2>
                        <img src= {instagram} alt="Instagram Icon" />
                        <img src= {twitter} alt="Award Icon for Book of the Month" />
                    </Share2>
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
                <User13>
                    <Topic13>I'm Still Sobbing </Topic13>
                    <Replies13>2,974</Replies13>
                    <Views13>5,122</Views13>
                    <img src = {profile1} alt="Profile Img 1" />
                    <Date13>8 seconds ago</Date13>
                </User13>

                <User14>
                    <Topic14>What A Rollercoaster</Topic14>
                    <Replies14>3,034</Replies14>
                    <Views14>6,175</Views14>
                    <img src = {profile2} alt="Profile Img 2" />
                    <Date14>17 seconds ago</Date14>
                </User14>

                <User15>
                    <Topic15>Favorite Moments</Topic15>
                    <Replies15>4,372</Replies15>
                    <Views15>5,639</Views15>
                    <img src = {profile3} alt="Profile Img 3" />
                    <Date15>31 seconds ago</Date15>
                </User15>

                <User16>
                    <Topic16>Portrayal of Grief</Topic16>
                    <Replies16>1,989</Replies16>
                    <Views16>3,264</Views16>
                    <img src = {profile4} alt="Profile Img 4" />
                    <Date16>46 seconds ago</Date16>
                </User16>

                <p>Load More...</p>

                </Forum>
            </BookForumContainer>
            </BFContainerRow>
            </EntireDiscussion>
             </div> 
    );
};

const EntireDiscussion = styled.div`
width: 100%;
height: auto;
`;

const BtnsLine1 = styled.div`
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
    gap: 30px;
    text-align: center;
`;

const Line1BaseButton = styled.button`
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    padding: 12px 30px;
    border-radius: 50px;
    font-size: 20px;
    color: #3E2D70;
    background-color: transparent;
    cursor: pointer;
    border: none;

    transition: background-color 0.3s;

    &:hover{
        background-color: #F8A2C0;;
    }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;
const ViewAllbtn = styled(Line1BaseButton)`
    margin-left: 160px;
`;

const Trendingbtn = styled(Line1BaseButton)`
`;

const BOTMbtn = styled(Line1BaseButton)`
`;

const Recommendationsbtn = styled(Line1BaseButton)`
`;

const UserFeedbackbtn = styled(Line1BaseButton)`
`;

const FilterDivider = styled.div`
  width: 76%;
  background-color: #ccc; 
  margin-left: 150px;
  height: 2px;
`;

const FilterLine2Container = styled.div`
display: flex;
flex-direction: row;
margin-top: 20px;
margin-left: 150px;
`;

const Filter = styled.h3`
text-size: 20px;
font-family: "Manrope", sans-serif;
font-weight: 700;   
color: #3E2D70;
margin-top: 10px;
`;

const Discussionsbuttons = styled.div`
     display: flex;
     margin-left: 20px;
     gap: 25px;
`;

const Line2BaseButton = styled.button`
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    padding: 12px 30px;
    border-radius: 50px;
    font-size: 20px;
    color: white;
    cursor: pointer;
    border: none;  
    transition: background-color 0.3s;
`;

const Thriller = styled(Line2BaseButton)`
    background-color: #88C3E4;

    &:hover{
        background-color: #58b7ee;
    }
`;
const Romance = styled(Line2BaseButton)`
    background-color: #F68AAF;

    &:hover{
        background-color: #ef749f;
    }
`;

const Cliffhanger = styled(Line2BaseButton)`
    background-color: #95B9B4;

    &:hover{
        background-color: #50b1a4;
    }
`;

const BookReview = styled(Line2BaseButton)`
    background-color: #B0507F;

    &:hover{
        background-color: #da3c88;
    }
`;

const Fantasy = styled(Line2BaseButton)`
    background-color: #88C3E4;

    &:hover{
        background-color: #58b7ee;
    }
`;

const Morebtn = styled(Line2BaseButton)`
    background-color: #897AD5;

    &:hover{
        background-color: #6c54df;
    }
`;

const ForumName = styled.div`
font-family: "Agbalumo";
font-weight: 700;
padding-left: 100px;
padding-top: 20px;
margin-bottom: -90px;
font-size: 50px;
color: #3E2D70;
`;

const BFContainerRow= styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  
`;
const BookForumContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 30px;
  margin-bottom: 50px;
  width: 100%;
  height: auto;
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

const User5 = styled(User1)`
`;

const Topic5 = styled(Topic1)`
`;

const Replies5 = styled(Replies1)`
margin-left: 80px;
`;

const Views5 = styled(Views1)`
`;

const Date5 = styled(Date1)`
`;

const User6 = styled(User1)`
`;

const Topic6 = styled(Topic1)`
`;

const Replies6 = styled(Replies1)`
margin-left: 107px;
`;

const Views6 = styled(Views1)`
`;

const Date6 = styled(Date1)`
`;

const User7 = styled(User1)`
`;

const Topic7 = styled(Topic1)`
`;

const Replies7 = styled(Replies1)`
margin-left: 90px;
`;

const Views7 = styled(Views1)`
margin-left: 80px;
`;

const Date7 = styled(Date1)`
`;

const User8 = styled(User1)`
`;

const Topic8 = styled(Topic1)`
`;

const Replies8 = styled(Replies1)`
margin-left: -50px;
`;

const Views8 = styled(Views1)`
`;

const Date8 = styled(Date1)`
`;

const User9 = styled(User1)`
`;

const Topic9 = styled(Topic1)`
`;

const Replies9 = styled(Replies1)`
margin-left: -50px;
`;

const Views9 = styled(Views1)`
margin-left: 75px;
`;

const Date9 = styled(Date1)`
`;

const User10 = styled(User1)`
`;

const Topic10 = styled(Topic1)`
`;

const Replies10 = styled(Replies1)`
margin-left: -33px;
`;

const Views10 = styled(Views1)`
margin-left: 80px;
`;

const Date10 = styled(Date1)`
`;

const User11 = styled(User1)`
`;

const Topic11 = styled(Topic1)`
`;

const Replies11 = styled(Replies1)`
margin-left: 1px;
`;

const Views11 = styled(Views1)`
margin-left: 75px;
`;

const Date11 = styled(Date1)`
`;

const User12 = styled(User1)`
`;

const Topic12 = styled(Topic1)`
`;

const Replies12 = styled(Replies1)`
margin-left: 140px;
`;

const Views12 = styled(Views1)`
margin-left: 72px;
`;

const Date12 = styled(Date1)`
`;

const User13 = styled(User1)`
`;

const Topic13 = styled(Topic1)`
`;

const Replies13 = styled(Replies1)`
margin-left: 100px;
`;

const Views13 = styled(Views1)`
margin-left: 72px;
`;

const Date13 = styled(Date1)`
`;

const User14 = styled(User1)`
`;

const Topic14 = styled(Topic1)`
`;

const Replies14 = styled(Replies1)`
margin-left: 50px;
`;

const Views14 = styled(Views1)`
margin-left: 72px;
`;

const Date14 = styled(Date1)`
`;

const User15 = styled(User1)`
`;

const Topic15 = styled(Topic1)`
`;

const Replies15 = styled(Replies1)`
margin-left: 78px;
`;

const Views15 = styled(Views1)`
margin-left: 70px;
`;

const Date15 = styled(Date1)`
`;

const User16 = styled(User1)`
`;

const Topic16 = styled(Topic1)`
`;

const Replies16 = styled(Replies1)`
margin-left: 87px;
`;

const Views16 = styled(Views1)`
margin-left: 70px;
`;

const Date16 = styled(Date1)`
`;

export default Discussions;


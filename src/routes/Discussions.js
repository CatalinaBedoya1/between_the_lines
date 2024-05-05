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
import './Discussions.css';
import bookforum1 from '../assets/DashboardBooks/recent2.png';
import profile1 from '../assets/profile1.png';
import profile4 from '../assets/profile4.png';
import profile3 from '../assets/profile3.png';
import profile2 from '../assets/profile2.png';
import bookforum2 from '../assets/forumbook2.png';
import bookforum3 from '../assets/forumbook3.png';
import bookforum4 from '../assets/forumbook4.png';

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
  margin-top: 50px;
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
            


            <div> 
                <span style={{ marginRight: '20px' }}>
                <header style={{ marginLeft: '10px' }}>
                    View All
                    <Link to="/discussions/trending"> <button className="trending">Trending</button></Link>
                    Book of the Month
                    Trending
                    User Feedback
                        <OnlineDivider></OnlineDivider>
                </header> 
                </span>
            </div> 
            <div>
            <div className='btns-discussion-genres'>
            <header>Filter: </header>
                    <Link to="/discussions/thriller"> <button className="thriller"> Thriller </button> </Link>
                    <Link to="/discussions/booktok"> <button className="booktok">Booktok </button> </Link>
                    <Link to="/discussions/horror"> <button className="horror">Horror </button> </Link>
                    <Link to="/discussions/cliff-hanger"> <button className="cliff-hanger">Cliff-hanger </button> </Link>
                    <Link to="/discussions/fantasy"> <button className="fantasy">Fantasy </button> </Link>
                    <Link to="/discussions/historical"> <button className="historical">Historical </button> </Link>
                    <Link to="/discussions/more"> <button className="more">+</button> </Link> 
            </div>
            <ForumName>
            <h1> Trending Forums</h1>
            </ForumName>

             <BFContainerRow>
             <BookForumContainter>
                <BookCard>
                    <img src= {bookforum1} alt="Book Forum 1" />
                    <BookContent>
                        <h4>IF YOU COULD SEE THE SUN</h4>
                        <h4>ANN LIANG</h4>
                        <br></br>
                        <Link to="/discussions/fantasy"> <button className="fantasy">Fantasy </button> </Link>
                        <Link to="/discussions/fiction"> <button className="fiction">Fiction </button> </Link>
                        <br></br>
                        <br></br>
                        <ForumHeading>
                            <Horizontal>Topics</Horizontal>
                            <Horizontal>Replies</Horizontal>
                            <Horizontal>Views</Horizontal>
                            <Horizontal>User</Horizontal>
                            <Horizontal>Date</Horizontal>
                        </ForumHeading>
                            <br></br>
                            <Divider></Divider>
                            <br></br>
                        <User1>
                            <p>Ann Liang Best Work</p>
                            <p>3,495</p>
                            <p>3,855</p>
                            <img src= {profile1} alt="Profile 1" />
                            <p>10 seconds ago</p>
                        </User1>

                        <User2>
                            <p>Other works by Ann Liang</p>
                            <p>7,777</p>
                            <p>8,452</p>
                            <img src= {profile4} alt="Profile 2" />
                            <p>1 hour ago</p>
                        </User2>
                        <User3>
                            <p>Best chapter</p>
                            <p>3,354</p>
                            <p>7,474</p>
                            <img src= {profile3} alt="Profile 3" />
                            <p>5 hours ago</p>
                        </User3>
                        <User4>
                            <p>Love the character</p>
                            <p>6,578</p>
                            <p>9,456</p>
                            <img src= {profile2} alt="Profile 4" />
                            <p>8 hours ago</p>
                        </User4>      
                        <h6>Load more topics</h6>
                    </BookContent>
                </BookCard>

                <BookCard>
                    <img src= {bookforum2} alt="Book Forum 2" />
                    <BookContent>
                        <br></br>
                        <ForumHeading>
                            <Horizontal>Topics</Horizontal>
                            <Horizontal>Replies</Horizontal>
                            <Horizontal>Views</Horizontal>
                            <Horizontal>User</Horizontal>
                            <Horizontal>Date</Horizontal>
                        </ForumHeading>
                            <br></br>
                            <Divider></Divider>
                            <br></br>
                        <User1>
                            <p>Spicy scenes</p>
                            <p>9,874</p>
                            <p>10,523</p>
                            <img src= {profile2} alt="Profile 1" />
                            <p>10 seconds ago</p>
                        </User1>

                        <User2>
                            <p>Fangirls Unite</p>
                            <p>15,876</p>
                            <p>19,348</p>
                            <img src= {profile3} alt="Profile 2" />
                            <p>1 hour ago</p>
                        </User2>
                        <User3>
                            <p>Next one: worth it?</p>
                            <p>9,876</p>
                            <p>10,532</p>
                            <img src= {profile4} alt="Profile 3" />
                            <p>18 hours ago</p>
                        </User3>
                        <User4>
                            <p>Love or obsession?</p>
                            <p>12,947</p>
                            <p>18,234</p>
                            <img src= {profile1} alt="Profile 4" />
                            <p>8 hours ago</p>
                        </User4>      
                        <h6>Load more topics</h6>
                    </BookContent>
                </BookCard>

                <BookCard>
                    <img src= {bookforum3} alt="Book Forum 3" />
                    <BookContent>
                        <br></br>
                        <ForumHeading>
                            <Horizontal>Topics</Horizontal>
                            <Horizontal>Replies</Horizontal>
                            <Horizontal>Views</Horizontal>
                            <Horizontal>User</Horizontal>
                            <Horizontal>Date</Horizontal>
                        </ForumHeading>
                            <br></br>
                            <Divider></Divider>
                            <br></br>
                        <User1>
                            <p>Slow burn or Death of me?</p>
                            <p>15,837</p>
                            <p>19,746</p>
                            <img src= {profile3} alt="Profile 1" />
                            <p>1 second ago</p>
                        </User1>

                        <User2>
                            <p>Debate of the century: Which trope is the best?</p>
                            <p>15,876</p>
                            <p>19,348</p>
                            <img src= {profile4} alt="Profile 2" />
                            <p>1 hour ago</p>
                        </User2>
                        <User3>
                            <p>Heart vs Mind?</p>
                            <p>9,876</p>
                            <p>10,532</p>
                            <img src= {profile1} alt="Profile 3" />
                            <p>1 day ago</p>
                        </User3>
                        <User4>
                            <p>Do you believe in destiny or fate?</p>
                            <p>15,927</p>
                            <p>20,349</p>
                            <img src= {profile2} alt="Profile 4" />
                            <p>10 hours ago</p>
                        </User4>      
                        <h6>Load more topics</h6>
                    </BookContent>
                </BookCard>

                <BookCard>
                    <img src= {bookforum4} alt="Book Forum 4" />
                    <BookContent>
                        <br></br>
                        <ForumHeading>
                            <Horizontal>Topics</Horizontal>
                            <Horizontal>Replies</Horizontal>
                            <Horizontal>Views</Horizontal>
                            <Horizontal>User</Horizontal>
                            <Horizontal>Date</Horizontal>
                        </ForumHeading>
                            <br></br>
                            <Divider></Divider>
                            <br></br>
                        <User1>
                            <p>What would you do if that happened to you?</p>
                            <p>15,345</p>
                            <p>22,247</p>
                            <img src= {profile4} alt="Profile 1" />
                            <p>1 minute ago</p>
                        </User1>

                        <User2>
                            <p>What is love worth?</p>
                            <p>23,647</p>
                            <p>49,239</p>
                            <img src= {profile1} alt="Profile 2" />
                            <p>1 hour ago</p>
                        </User2>
                        <User3>
                            <p>Best chapters?</p>
                            <p>1,934</p>
                            <p>2,437</p>
                            <img src= {profile2} alt="Profile 3" />
                            <p>1 day ago</p>
                        </User3>
                        <User4>
                            <p>Male author or Female author</p>
                            <p>12,842</p>
                            <p>31,236</p>
                            <img src= {profile3} alt="Profile 4" />
                            <p>15 days ago</p>
                        </User4>      
                        <h6>Load more topics</h6>
                    </BookContent>
                </BookCard>
            </BookForumContainter>
            </BFContainerRow>
            

             </div> 
               {
           <CreatePost /> } 
        </div>
    );
};

const ForumName = styled.div`
  padding-left: 40px;
  padding-top: 20px;
`;
const BFContainerRow= styled.div`
  display: flex;
  flex-direection: row;
  //background-color: pink;
`;
const BookForumContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 100px;

  //background-color: blue;

`;
const BookCard = styled.div`
  display: flex;
  margin: 10px;
  width: 800px;    //800px;
  height: 300px;
  //background-color: green;

  img {
    width: auto; 
    height: 100%; 
  }
`;
const BookContent = styled.div`
  padding-top: 30px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 30px;
`;
const OnlineDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc; 
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000000; 
`;
const Horizontal = styled.div`
    margin: 0 50px;

`;
const ForumHeading = styled.div`
    display: flex;
    justify-content: space-between;
`;
const User1 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;
const User2 = styled.div`
    display: flex;
    justify-content: space-between;
`;
const User3 = styled.div`
    display: flex;
    justify-content: space-between;
`;
const User4 = styled.div`
    display: flex;
    justify-content: space-between;
`;
export default Discussions;


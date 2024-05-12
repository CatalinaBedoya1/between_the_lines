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
import instagram from '../assets/Vector.png';
import twitter from '../assets/Vector (1).png';
import award from '../assets/award.png';

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
            


            
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px', gap: '30px' }}>
                <div style={{ marginLeft: '40px', display: 'inline-flex', alignItems: 'center' }}>
                    View All
                    <Trendingbutton> 
                        <Link to="/discussions/trending"> 
                        <button className="trending">Trending</button>
                        </Link>
                    </Trendingbutton>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center'}}>
                    Book of the Month
                    Trending
                    User Feedback
                </div> 
            </div> 
            <OnlineDivider></OnlineDivider>
            <div>
            <div className='btns-discussion-genres'>
            <header style={{ marginLeft: '80px', display: 'inline-flex', alignItems: 'center' }}>
                Filter:
            <Discussionsbuttons>
                    <Link to="/discussions/thriller"> <button className="thriller"> Thriller </button> </Link>
                    <Link to="/discussions/booktok"> <button className="booktok">Booktok </button> </Link>
                    <Link to="/discussions/horror"> <button className="horror">Horror </button> </Link>
                    <Link to="/discussions/cliff-hanger"> <button className="cliff-hanger">Cliff-hanger </button> </Link>
                    <Link to="/discussions/fantasy"> <button className="fantasy">Fantasy </button> </Link>
                    <Link to="/discussions/historical"> <button className="historical">Historical </button> </Link>
                    <Link to="/discussions/more"> <button className="more">+</button> </Link> 
            </Discussionsbuttons>
            </header>
            </div>

            <ForumName>
            <h1> Trending Forums</h1>
            </ForumName>

             <BFContainerRow>
             <BookForumContainter>
                <BookCard>
                    <Award>
                    <img src= {award} alt="Book of the month award" />
                    </Award>
                    <img src= {bookforum1} alt="Book Forum 1" />
                    <BookContent>
                        <h3 className='Title'>IF YOU COULD SEE THE SUN</h3>
                        <h3 className='Title'>ANN LIANG</h3>
                        <br></br>
                        <Shareoptions>
                        <Discussionsbuttons>
                        <Link to="/discussions/fantasy"> <button className="fantasy">Fantasy </button> </Link>
                        <Link to="/discussions/fiction"> <button className="fiction">Fiction </button> </Link>
                        </Discussionsbuttons>
                            <h3 className='Share'>Share</h3>
                            <img src= {instagram} alt="instagramicon" className='instagram' />
                            <img src= {twitter} alt="twittericon" className="twitter" />
                        </Shareoptions>

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
                        <Link to= '/community/BookDetails' className='bookdetailslink'>
                        <User1>
                            <p className='text'>Ann Liang Best Work</p>
                            <p className='text'>3,495</p>
                            <p className='text'>3,855</p>
                            <img src= {profile1} alt="Profile 1" />
                            <p className='text'>10 seconds ago</p>
                        </User1>

                        <User2>
                            <p className='text'>Other works by Ann Liang</p>
                            <p className='text'>7,777</p>
                            <p className='text'>8,452</p>
                            <img src= {profile4} alt="Profile 2" />
                            <p className='text'>1 hour ago</p>
                        </User2>
                        <User3>
                            <p className='text'>Best chapter</p>
                            <p className='text'>3,354</p>
                            <p className='text'>7,474</p>
                            <img src= {profile3} alt="Profile 3" />
                            <p className='text'>5 hours ago</p>
                        </User3>
                        <User4>
                            <p className='text'>Love the character</p>
                            <p className='text'>6,578</p>
                            <p className='text'>9,456</p>
                            <img src= {profile2} alt="Profile 4" />
                            <p className='text'>8 hours ago</p>
                        </User4>      
                        <p className='MoreTopics'>Load more topics</p>
                        </Link>
                    </BookContent>
                </BookCard>

                <BookCard>
                    <img src= {bookforum2} alt="Book Forum 2" />
                    <BookContent>
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
                            <p className='text'>Spicy scenes</p>
                            <p className='text'>9,874</p>
                            <p className='text'>10,523</p>
                            <img src= {profile2} alt="Profile 1" />
                            <p className='text'>10 seconds ago</p>
                        </User1>

                        <User2>
                            <p className='text'>Fangirls Unite</p>
                            <p className='text'>15,876</p>
                            <p className='text'>19,348</p>
                            <img src= {profile3} alt="Profile 2" />
                            <p className='text'>1 hour ago</p>
                        </User2>
                        <User3>
                            <p className='text'>Next one: worth it?</p>
                            <p className='text'>9,876</p>
                            <p className='text'>10,532</p>
                            <img src= {profile4} alt="Profile 3" />
                            <p className='text'>18 hours ago</p>
                        </User3>
                        <User4>
                            <p className='text'>Love or obsession?</p>
                            <p className='text'>12,947</p>
                            <p className='text'>18,234</p>
                            <img src= {profile1} alt="Profile 4" />
                            <p className='text'>8 hours ago</p>
                        </User4>    
                        <p className='MoreTopics'> Load more topics </p>
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
                            <p className='text'>Slow burn or Death of me?</p>
                            <p className='text'>15,837</p>
                            <p className='text'>19,746</p>
                            <img src= {profile3} alt="Profile 1" />
                            <p className='text'>1 second ago</p>
                        </User1>

                        <User2>
                            <p className='text'>Debate of the century: Which trope is the best?</p>
                            <p className='text'>15,876</p>
                            <p className='text'>19,348</p>
                            <img src= {profile4} alt="Profile 2" />
                            <p className='text'>1 hour ago</p>
                        </User2>
                        <User3>
                            <p className='text'>Heart vs Mind?</p>
                            <p className='text'>9,876</p>
                            <p className='text'>10,532</p>
                            <img src= {profile1} alt="Profile 3" />
                            <p className='text'>1 day ago</p>
                        </User3>
                        <User4>
                            <p className='text'>Do you believe in destiny or fate?</p>
                            <p className='text'>15,927</p>
                            <p className='text'>20,349</p>
                            <img src= {profile2} alt="Profile 4" />
                            <p className='text'>10 hours ago</p>
                        </User4>      
                        <p className='MoreTopics'>Load more topics</p>
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
                            <p className='text'>What would you do if that happened to you?</p>
                            <p className='text'>15,345</p>
                            <p className='text'>22,247</p>
                            <img src= {profile4} alt="Profile 1" />
                            <p className='text'>1 minute ago</p>
                        </User1>

                        <User2>
                            <p className='text'>What is love worth?</p>
                            <p className='text'>23,647</p>
                            <p className='text'>49,239</p>
                            <img src= {profile1} alt="Profile 2" />
                            <p className='text'>1 hour ago</p>
                        </User2>
                        <User3>
                            <p className='text'>Best chapters?</p>
                            <p className='text'>1,934</p>
                            <p className='text'>2,437</p>
                            <img src= {profile2} alt="Profile 3" />
                            <p className='text'>1 day ago</p>
                        </User3>
                        <User4>
                            <p className='text'>Male author or Female author</p>
                            <p className='text'>12,842</p>
                            <p className='text'>31,236</p>
                            <img src= {profile3} alt="Profile 4" />
                            <p className='text'>15 days ago</p>
                        </User4>      
                        <p className='MoreTopics'>Load more topics</p>
                    </BookContent>
                </BookCard>
            </BookForumContainter>
            </BFContainerRow>
            

             </div> 
        </div>
    );
};

const ForumName = styled.div`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
padding-left: 85px;
padding-top: 20px;
margin-bottom: -90px;
`;
const BFContainerRow= styled.div`
  display: flex;
  flex-direection: row;
`;
const BookForumContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 100px;
  height: 2400px;

`;
const Award = styled.div`
    width: 80px; 
    height: 80px; 
    position: absolute; 
    bottom: -185px;
    left: 100px;
`;

const BookCard = styled.div`
  display: flex;
  margin: 10px;
  width: 800px;    
  height: 300px;

  img {
    width: auto; 
    height: 100%; 
  }
`;
const BookContent = styled.div`
  padding-top: -40px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 90px;
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
    margin-top: 5px
    align-items: center;
    width: auto;
    height: 70px;
    text-align: center;

    img {
    width: 40px;
    height: 40px;
  }
`;
const User2 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    align-items: center;
    width: auto;
    height: 70px;
    text-align: center;

    img {
    width: 40px;
    height: 40px;
  }
`;
const User3 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    align-items: center;
    width: auto;
    height: 70px;
    text-align: center;
    img {
    width: 40px;
    height: 40px;
  }
`;
const User4 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    align-items: center;
    width: auto;
    height: 70px;
    text-align: center;

    img {
    width: 40px;
    height: 40px;
  }
`;
const Discussionsbuttons = styled.div`
     display: flex;
     gap: 20px;
     margin-left: 20px;
`;
const Shareoptions = styled.div`
  display: flex;
  
  img {
    padding-left: 10px;
    width: 35px;
    height: 30px;
  }
`;
const Trendingbutton = styled.div`
     display: flex;
     gap: 20px;
     flex-wrap: nowrap;
`;

export default Discussions;


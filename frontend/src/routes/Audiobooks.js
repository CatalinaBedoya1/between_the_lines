import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sample from "../assets/QuizRecBooks/book1.png";
import GreyTriangle from "../assets/greytriangle.png";
import pic1 from "../assets/AudioAnimation/pic1.png";
import pic2 from "../assets/AudioAnimation/pic2.png";
import pic3 from "../assets/AudioAnimation/pic3.png";
import pic4 from "../assets/AudioAnimation/pic4.png";
import pic5 from "../assets/AudioAnimation/pic5.png";
import pic6 from "../assets/AudioAnimation/pic6.png";
import pic7 from "../assets/AudioAnimation/pic7.png";
import pic8 from "../assets/AudioAnimation/pic8.png";
import pic9 from "../assets/AudioAnimation/pic9.png";
import pic10 from "../assets/AudioAnimation/pic10.png";
import pic11 from "../assets/AudioAnimation/pic11.png";
import pic12 from "../assets/AudioAnimation/pic12.png";
import pic13 from "../assets/KingOfSloth.png"
import pic14 from "../assets/AudioAnimation/pic14.png";
import pic15 from "../assets/AudioAnimation/pic15.png";
import pic16 from "../assets/AudioAnimation/pic16.png";
import pic17 from "../assets/AudioAnimation/pic17.png";
import pic18 from "../assets/AudioAnimation/pic18.png";
import pic19 from "../assets/AudioAnimation/pic19.png";
import pic20 from "../assets/AudioAnimation/pic20.png";
import pic21 from "../assets/AudioAnimation/pic21.png";
import pic22 from "../assets/AudioAnimation/pic22.png";
import myImage3 from '../assets/BOTM_GROUP2.png';
import myImage2 from '../assets/ifyoucouldseethesun.png';


const translateAnimation = keyframes`
    from { transform: translateX(0%); }
    to { transform:translateX(-200%); }
`;

const rotateAnimation = keyframes`
    from { transform: rotate (0deg); }
    to { transform: rotate(360deg); }
`;


const NYT_API_KEY = 've27qt7otDqwAHzuCuLsr9M3inbBinNe';

  const Audiobooks = () => {
    const containerRef = useRef();
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState("");
    const category = "hardcover-fiction";
  
    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=${NYT_API_KEY}`);
            const data = await response.json();
            console.log("Fetched data:", data);

            const booksData = data.results.books || [];
            setBooks(booksData);
            setTitle(mapTitle(category)); // Mapping function to get custom title
                
          } catch (error) {
            console.error(`Error fetching ${category} books:`, error);
          }
        };

        fetchBooks();
    }, [category]);

    // Mapping function to get custom title
    const mapTitle = (category) => {
        switch (category) {
          case "hardcover-fiction":
            return "Top Community Picks Fiction";
        }
      };

    const maxBooks = 8;

    //hero animation
    const HEROSECTION_DATA=[
        { id: "01", cover: pic1, title: "Where the Crawdads Sing", author: "Delia Owens" },
        { id: "02", cover: pic2, title: "This is How You Lose the Time War", author: "Amal El-Mohtar & Max Gladstone" },
        { id: "03", cover: pic3, title: "Savage Appetites", author: "Rachel Monroe" },
        { id: "04", cover: pic4, title: "The Man I Never Met", author: "Elle Cook" },
        { id: "05", cover: pic5, title: "Book Lovers", author: "Emily Henry" },
        { id: "06", cover: pic6, title: "Love & Other Words", author: "Christina Lauren" },
        { id: "07", cover: pic7, title: "Future Home of the Living God", author: "Louise Erdrich" },
        { id: "08", cover: pic8, title: "Scoundrel", author: "Sarah Weinman" },
        { id: "09", cover: pic9, title: "A Thousand Spendid Suns", author: "Khaled Hosseini" },
        { id: "10", cover: pic10, title: "The Sirens of Titan", author: "Kurt Vonnegut" },
        { id: "11", cover: pic11, title: "King of Sloth", author: "Ana Huang" },
        { id: "12", cover: pic12, title: "Cold Blooded Liar", author: "Karen Rose" },
    ];

    // New Releases
    const RELEASES_DATA = [
        { id: "01", cover: pic13, title: "King of Sloth", author: "Ana Huang", time: "9 hours", rating: "4/5 stars" },
        { id: "02", cover: pic14, title: "Wild Love", author: "Elsie Silver", time: "9 hours", rating: "4/5 stars" },
        { id: "03", cover: pic15, title: "Powerful", author: "Lauren Roberts", time: "9 hours", rating: "4/5 stars" },
        { id: "04", cover: pic16, title: "The Dixon Rule", author: "Elle Kennedy", time: "9 hours", rating: "4/5 stars" },
        { id: "05", cover: pic17, title: "The Endurance of Wildflowers", author: "Micalea Smeltzer", time: "9 hours", rating: "4/5 stars" },
        { id: "06", cover: pic18, title: "If Only I Had Told Her", author: "Laura Nowlin", time: "9 hours", rating: "4/5 stars" },
        { id: "07", cover: pic19, title: "How To Solve Your Own Murder", author: "Kristen Perrin", time: "9 hours", rating: "4/5 stars" },
        { id: "08", cover: pic20, title: "Love Redesigned", author: "Lauren Asher", time: "9 hours", rating: "4/5 stars" },
        { id: "09", cover: pic21, title: "I Hope This Finds You Well", author: "Natalie Sue", time: "9 hours", rating: "4/5 stars" },
        { id: "10", cover: pic22, title: "Matching All The Way", author: "Veronica Eden", time: "9 hours", rating: "4/5 stars" },
   
        
    ];




    return (
        <AudiobookContainer>
        <AudiobookHeader>
            <AudioHeaderText>Discover our audiobooks</AudioHeaderText>
            <AudioHeaderText2>Choose a book you want to hear</AudioHeaderText2>

            <AudioSearchBarContainer>
                <AudioInput type="text" id="searchInput" placeholder="Find an audiobook ..." />
                <SearchIcon>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
            </AudioSearchBarContainer>

        <HeroAniContainer>
        <HeroScrollContainer ref={containerRef}>
            <HeroAniContentBox>
                {HEROSECTION_DATA.map((HeroData) => (
                    <HeroCard key={HeroData.id}>
                        <img src={HeroData.cover} alt="recordimg" />
                        <Title>{HeroData.title}</Title>
                        <Author>{HeroData.author}</Author>
                    </HeroCard>
                ))}
            </HeroAniContentBox>
        </HeroScrollContainer>
        </HeroAniContainer>
        </AudiobookHeader>

        <AudioSectionText>New Releases ...</AudioSectionText>
        <NewReleasesContainer>
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
        </NewReleasesContainer>

       
       
        <div className="BOTM-container">
          
          <img src={myImage3} alt="Book of the month cover" className="BOTM-imageZoom" />
          <div className="BOTM-content">
            <h1>BOOK OF THE MONTH</h1>
            <h2>If You Could See the Sun</h2>
            <h3>Ann Liang</h3>
            <hr className="BOTM-divider"/>
            <p>In this genre-bending, speculative YA debut, a </p>
              <p> Chinese American girl monetizes her strange </p>
              <p>new invisibility powers by discovering and </p>
              <p> selling her wealthy classmates' most </p> 
              <p>scandalous secrets.</p>
    
            <div className="BOTM-buttons">
              <Link to="/discover/fantasy" className="btn-2">fantasy</Link>
             <Link to="/discover/fiction" className="btn-3">fiction</Link>
            </div>
            
            <img src={myImage2} alt="BOTM cover" className="BOTM-image"/>
          </div>
        </div>




        <AudioSectionText>Trending books ...</AudioSectionText>
        <TrendingAudioContainer ref={containerRef}>
        {books.slice(0, maxBooks).map((book) => {
             console.log(book.cover);
             return (

             
            <TrendingCard key={book.id}>
              <BookCover src={book.book_image} alt={book.title} />
              <TrendingCardContent>
                <GreyText>
                  <img src={GreyTriangle} alt="triangle" />
                  Hover for sample
                </GreyText>
                <TTitle>{book.title}</TTitle>
                <TAuthor>{book.author}</TAuthor>

                {/* i added some links to purchase the books*/}
                <RetailerLinks>
                    <a href={book.amazon_product_url} target="_blank" rel="noopener noreferrer">Amazon</a>
                    <a href="https://www.audible.com/" target="_blank" rel="noopener noreferrer">Audible</a>
                </RetailerLinks>

                <GreyText>See more ...</GreyText>
              </TrendingCardContent>
            </TrendingCard>
             );
        })}

        </TrendingAudioContainer>


        
        <Link to= "/discover/audiobooksDetails" style={{ textDecoration: 'none'}}>
            <SeeMoreButton>See More</SeeMoreButton>
        </Link>

        </AudiobookContainer>
    );
};

export default Audiobooks;


const AudiobookContainer=styled.div`
    display:flex;
    flex-direction: column;
    width:100wh;
    height:auto;
`;


//header styling
const AudiobookHeader =styled.div`
    position: relative;
    width: 100%;
    height: 800px;
   
    background-color: #3D326F;
`;
const AudioHeaderText=styled.div`
    color: white;
    font-size: 50px;
    font-family: Agbalumo;
    text-align: center;

    padding-top:150px;
`;
const AudioHeaderText2=styled.div`
    color: white;
    font-size: 30px;
    font-family: Manrope;
    text-align: center;

    padding-top:10px;
    padding-bottom:20px;
`;
const AudioSearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;//500px;
`;
const AudioInput = styled.input`
    width: 500px;
    border: 1px solid #ccc;
    padding: 10px 50px ;
    border-radius: 30px;
    height: 50px;
    font-color: #3F3C3C;
    font-family: Manrope;
`;
const SearchIcon = styled.div`
    position: absolute;
    left: 500px;
    color: #3F3C3C;
`;




//animation
const HeroAniContainer =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: auto;
    padding-bottom:40px;
`;
const HeroAniContentBox = styled.div`
    width: 100wh;
    height:400px;
    display: flex;
    margin-top:30px;
    align-items: center;
    gap: 70px;
`;
const HeroScrollContainer = styled.div`
    width: 100%; //1150px;
    height: auto; //moves scroll bar
    display: flex;
    flex-direction: row;

    overflow:hidden;
    padding-bottom:20px;
    font-family: Manrope;
    font-size:25px;
`;
const HeroCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 10px;
    width: auto;
    height: auto;

    animation: ${translateAnimation} 15s linear infinite;
    
    img {
        width: 200px; 
        height: 200px;
        border-radius:50%;
        transition: transform 0.2s ease;
    }

    &:hover {
        transform: scale(1.1);
       &:hover img{
        animation: ${rotateAnimation} 10s linear infinite;
       }
    }
`;
const Title = styled.div`
    width: 200px;
    margin-top:10px;
    text-align:center;
    font-size:20px;
    font-family:Manrope;
    color:white;
`;
const Author =styled.div`
    width: 200px;
    margin-top:5px;
    text-align:center;
    font-size:18px;
    font-family: Manrope;
    color:white;

`;




//titles
const AudioSectionText = styled.div`  
    font-size:30px;
    font-family: "Agbalumo";
    font-size: 50px;
    color: #3E2D70;
    padding-left:100px;
    padding-top:30px;

`;




//new release styling
const NewReleasesContainer =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: auto;
    padding-bottom:40px;
   

    //background-color: blue;
`;
const ScrollContainer = styled.div`
    width: 1400px; //1150px;
    height: 380px; //moves scroll bar
    display: flex;
    flex-direction: row;

    overflow-x: scroll;
    scroll-behavior: smooth;
    padding-bottom:20px;
    font-family: Manrope;
    font-size:25px;
    
    //background-color: green;

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
        background: #4BB5D6;
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
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    color: #3E2D70;
`;
const RAuthor =styled.div`
    width: 200px;
    margin-top:5px;
    text-align:center;
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    color: #3E2D70;
`;





//trending styling
const TrendingAudioContainer=styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction:row;
    flex-wrap:wrap;
    width: 100wh;
    height: auto;
    padding-top:50px;
    padding-left:100px;
    padding-right:100px;
    padding-bottom:50px;
    gap:40px;

    font-family: Manrope;
    //background-color: green;
`;
const TrendingCard =styled.div`
    display:flex;
    flex-direction: row;
    width:600px;
    height: 200px;
    gap:30px;

    //background-color:grey;

    img{
        width:200px;
        height:200px;
        border-radius:50%;
    }


    &:hover img{
        animation: ${rotateAnimation} 10s linear infinite;
    }



`;
const TrendingCardContent = styled.div`
    flex-direction: column;
    width:300px;
    height:auto;
    font-size:20px;
    //background-color:blue;
`;
const GreyText = styled.div`
    color: #A2A0A0;
    margin-bottom: 10px;
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    
    img{
        width:15px;
        height:auto;
    }
`;
const TTitle = styled.div`
font-family: "Manrope", sans-serif;
font-weight: 700;
color: #3E2D70;
`;
const TAuthor = styled.div` 
font-family: "Manrope", sans-serif;
font-weight: 600;
color: #3E2D70;
`;
const TTime = styled.div`   
`;
const TRating = styled.div` 
`;

const BookCover = styled.img`
    width: 145px;
    height: 214px;
    object-fit: cover;

    &:hover {
        transform: scale(1.2); 
        transition: transform 0.2s ease; 
    }
`;

const RetailerLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;

    a {
        text-decoration: none;
        background-color: #88C3E4;
        padding: 10px 15px;
        color: white;
        font-weight: 600;
        border: none;
        border-radius: 50px;
        transition: all 0.3s ease;

        &:hover {
            background-color: #58b7ee;
        }
    }
`;

const SeeMoreButton = styled.button`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 600;
font-style: normal;
margin-bottom: 30px;
margin-left: 650px;
padding: 10px 40px;
    background: #F68AAF;
    color: white;
    border: 3px solid #FFF;
    border-radius: 50px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #CD6F90;
    }
`;

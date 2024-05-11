import React, { useRef } from 'react';
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


const translateAnimation = keyframes`
    from { transform: translateX(100%); }
    to { transform:translateX(0%); }
`;

const rotateAnimation = keyframes`
    from { transform: rotate (0deg); }
    to { transform: rotate(360deg); }
`;

const Audiobooks = () => {
    const containerRef = useRef();

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
        { id: "01", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "02", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "03", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "04", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "05", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "06", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "07", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "08", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "09", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "10", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
   
        
    ];

    //Trending Audiobooks
    const TRENDING_DATA =[
        { id: "01", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "02", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "03", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "04", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "05", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "06", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "07", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
        { id: "08", cover: sample, title: "Tess of the Road", author: "Rachel Hartman", time: "9 hours", rating: "4/5 stars" },
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

        {/* WORK IN PROGRESS ;-; -MADDY*/}
        <HeroAniContainer>
        <ScrollContainer ref={containerRef}>
            <HeroAniContentBox>
                {HEROSECTION_DATA.map((HeroData) => (
                    <HeroCard key={HeroData.id}>
                        <img src={HeroData.cover} alt="recordimg" />
                        <Title>{HeroData.title}</Title>
                        <Author>{HeroData.author}</Author>
                    </HeroCard>
                ))}
            </HeroAniContentBox>
        </ScrollContainer>
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

       
       
        {/* insert BOTM */}




        <AudioSectionText>Trending Audiobooks ...</AudioSectionText>

        <TrendingAudioContainer>
                {TRENDING_DATA.map((TrendData) => (

                <TrendingCard key={TrendData.id}>
                    <img src={TrendData.cover} alt="trendingimg" />
                    <TrendingCardContent>
                        
                        <GreyText>
                            <img src={GreyTriangle}/>
                            Hover for sample
                        </GreyText>
                        <TTitle>{TrendData.title}</TTitle>
                        <TAuthor>{TrendData.author}</TAuthor>
                        <TTime>{TrendData.time}</TTime>
                        <TRating>{TrendData.rating}</TRating>
                        <GreyText>See more ...</GreyText>
                    </TrendingCardContent>
                </TrendingCard>
                ))}
        </TrendingAudioContainer>
        
        <Link to= "/discover/audiobooksDetails">
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
    left: 560px;
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


    //animation: ${translateAnimation} 15s linear infinite;
`;
const HeroCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 10px;
    width: auto;
    height: auto;

    
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
    font-family: Manrope;
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
    color: #D9D9D9;
    
    img{
        width:15px;
        height:auto;
    }
`;
const TTitle = styled.div`
`;
const TAuthor = styled.div` 
`;
const TTime = styled.div`   
`;
const TRating = styled.div` 
`;



const SeeMoreButton = styled.div`
    justify-content:center;
    text-align:center;
    width:300px;
    height:40px;
    border-radius:50px;
    font-size: 25px;
    font-family: Manrope;
    margin:0;
    margin-top: 30px;
    margin-bottom: 100px;
    background-color: #F68AAF;
    color:white;
`;



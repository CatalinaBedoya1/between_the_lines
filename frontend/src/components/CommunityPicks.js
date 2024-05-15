
// EDITED CODE WIP- MADDY

import React, { useRef, useState, useEffect } from 'react';

import styled from 'styled-components';

const NYT_API_KEY = 've27qt7otDqwAHzuCuLsr9M3inbBinNe';

const NewCPPicks = () => {
    return (
        <Container>
            
            <NewSection category="hardcover-fiction" />
            <br></br>
            
            <NewSection category="hardcover-nonfiction" />
            <br></br>
          
            <NewSection category="trade-fiction-paperback" />
            <br></br>
            
            <NewSection category="young-adult-hardcover" />
            <br></br>
            

            
            <SeeMoreButton>See More</SeeMoreButton>
        </Container>
    );
};

const NewSection = ({ category }) => {
    const containerRef = useRef();
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState("");
    
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=${NYT_API_KEY}`);
                const data = await response.json();
                setBooks(data.results.books || []);
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
            case "hardcover-nonfiction":
                return "Top Community Picks in Nonfiction";
            case "trade-fiction-paperback":
                return "Top Community Picks in Young Adult Fiction";
            case "young-adult-hardcover":
                return "Top Community Picks in Fantasy ";
            default:
                return "";
        }
    };

    const truncateSummary = (summary) => {
        const words = summary.split(' ');
        if (words.length <= 16) {
            return summary;
        } else {
            return words.slice(0, 16).join(' ') + ' ...';
        }
    };

    return (
        <>
            <NewQuizResult>
                <p>{title}</p> {/* Display custom title */}
            </NewQuizResult>


            <ScrollContainer ref={containerRef}>
                <ContentBox>
                    {books.map((book, index) => (
                        <CPcard key={index}>
                            <BookCover src={book.book_image} alt={book.title} />
                            
                            <HoverOverlay>
                                <HoverText>
                                {book.title}
                                <br></br>
                                {book.author}
                                <br></br>
                                <br></br>
                                {truncateSummary(book.description)}

                                <HoverLink to="/routes/Discussions.js">
                                    <CardHoverButton>View Details</CardHoverButton>
                                </HoverLink>

                                </HoverText>
                            </HoverOverlay>
                        </CPcard>
                    ))}
                </ContentBox>
            </ScrollContainer>
        </>
    );
};

export default NewCPPicks;



/*style containers*/

const NewQuizResult = styled.div`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
color: #3E2D70;

    margin-bottom: 30px;
    text-align: left;
    margin-left: 130px;
    width: 100%;
    //padding: 20px;
`;

const Container = styled.div`  //whole container
    width: 100vw;
    height: 225vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //background-color: red;
    padding-top: 50px;
`;

const ScrollContainer = styled.div`
    width: 1300px; //1150px;
    height: 315px; //moves scroll bar
    display: flex;
    flex-direction: row;

    overflow-x: scroll;
    scroll-behavior: smooth;
    padding: 10px;

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

const ContentBox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;          //spacing between cards
`;

const CPcard = styled.div`
    display: flex; 
    margin: 10px;   
    width: 145px;
    height: 214px;
    position: relative;

    &:hover {
        //transform: scale(1.2); 
        transition: transform 0.2s ease; 
     
    }
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

const HoverOverlay = styled.div`
    position: absolute;
    top: 0;
    left:  calc(100% + 35px);
    width: 140%;
    height: 100%;
    background-color: #4281A4; //rgba(0, 0, 0, 0.3);
    color: white;
    display: flex;
    justify-content: center;
    //align-items: center;
    padding: 20px;
    opacity: 0;
    z-index: -1;
    
    transition: opacity 0.3s ease;

    ${CPcard}:hover  & {
        opacity: 1;
        z-index: 1;
        transform: scale(1.2);
    }
`;


const HoverText =styled.div`
    font-size: 15px;
`;

const HoverLink =styled.div`
    padding-top: 5px;
`;

const CardHoverButton = styled.div`
    width: 100px;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 50px;
    cursor: pointer;

    background-color: #88C3E4;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #3a738e;
    }
`;
const SeeMoreButton = styled.div`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
padding: 10px 60px;
    background: linear-gradient(230.28deg, #ddbfb5, #5397ac);
    color: white;
    border: 3px solid #FFF;
    border-radius: 20px;
    font-size: 18px;

    cursor: pointer;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #0056b3;
    }
    `
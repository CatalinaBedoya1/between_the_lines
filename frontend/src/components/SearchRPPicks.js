import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const NYT_API_KEY = 've27qt7otDqwAHzuCuLsr9M3inbBinNe';

const SearchRPPicks = () => {
    const containerRef = useRef();
    const [trendingBooks, setTrendingBooks] = useState([]);

    useEffect(() => {
        const fetchTrendingBooks = async () => {
            try {
                const response = await fetch(
                    `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${NYT_API_KEY}`
                );
                const data = await response.json();
                if (data.results && data.results.books) {
                    setTrendingBooks(data.results.books);
                }
            } catch (error) {
                console.error('Error fetching trending books:', error);
            }
        };

        fetchTrendingBooks();
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    return (
        <Container>
            <QuizResult>
                <p>Top Community Picks...</p>
            </QuizResult>

            <ScrollContainer ref={containerRef}>
                <ContentBox>
                    {trendingBooks.map((book, index) => (
                        <CPcard key={index}>
                            <BookCover src={book.book_image} alt={book.title} />
                            
                            <HoverOverlay>
                                <HoverText>
                                    {book.title}
                                    <br />
                                    {book.author}
                                    <br />
                                    <br />
                                    {book.description}
                                    {book.amazon_product_url ? (
                                        <RetailerLinks amazonUrl={book.amazon_product_url} />
                                    ) : (
                                        <p>No Amazon link available</p>
                                    )}
                                </HoverText>
                            </HoverOverlay>
                        </CPcard>
                    ))}
                </ContentBox>
            </ScrollContainer>
        </Container>
    );
};

const RetailerLinks = ({ amazonUrl }) => {
    return (
        <RetailerContainer>
            <HoverLink href={amazonUrl} target="_blank" rel="noopener noreferrer">
                <CardHoverButton>View Details</CardHoverButton>
            </HoverLink>
           
        </RetailerContainer>
    );
};

export default SearchRPPicks;

// Styled components...

const QuizResult = styled.div`
    font-family: "Manrope", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    color: #3E2D70;
    margin-bottom: 30px;
    text-align: left;
    margin-left: 130px;
    width: 100%;
    font-size: 26px;
    line-height: normal;
    letter-spacing: 1.08px;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ScrollContainer = styled.div`
    width: 1300px;
    height: 315px;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding: 10px;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #d6d6d6;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #5397AC;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #4BB5D6;
    }
`;

const ContentBox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const CPcard = styled.div`
    display: flex; 
    margin: 10px;   
    width: 145px;
    height: 214px;
    position: relative;

    &:hover {
        transition: transform 0.2s ease; 
    }
`;

const BookCover = styled.img`
    width: 145px;
    height: 214px;

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
    background-color: #4281A4;
    color: white;
    display: flex;
    justify-content: center;
    padding: 20px;
    opacity: 0;
    z-index: -1;
    
    transition: opacity 0.3s ease;

    ${CPcard}:hover & {
        opacity: 1;
        z-index: 1;
        transform: scale(1.2);
    }
`;

const HoverText = styled.p`
    font-family: "Manrope", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 12px;
`;

const RetailerContainer = styled.div`
    margin-top: 10px;

    a {
        margin-right: 10px;
        color: #007185;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`;

const HoverLink = styled.a`
    display: block;
    margin-top: 10px;
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
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

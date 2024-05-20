import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const NYT_API_KEY = 've27qt7otDqwAHzuCuLsr9M3inbBinNe';

const NewCPPicks = () => {
    return (
        <Container>
            <NewSection category="hardcover-fiction" />
            <br />
            <NewSection category="hardcover-nonfiction" />
            <br />
            <NewSection category="trade-fiction-paperback" />
            <br />
            <NewSection category="young-adult-hardcover" />
            <br />
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
                setTitle(mapTitle(category));
            } catch (error) {
                console.error(`Error fetching ${category} books:`, error);
            }
        };

        fetchBooks();
    }, [category]);

    const mapTitle = (category) => {
        switch (category) {
            case "hardcover-fiction":
                return "Top Community Picks Fiction";
            case "hardcover-nonfiction":
                return "Top Community Picks in Nonfiction";
            case "trade-fiction-paperback":
                return "Top Community Picks in Young Adult Fiction";
            case "young-adult-hardcover":
                return "Top Community Picks in Fantasy";
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
                <p>{title}</p>
            </NewQuizResult>
            <ScrollContainer ref={containerRef}>
                <ContentBox>
                    {books.map((book, index) => (
                        <CPcard key={index}>
                            <BookCover src={book.book_image} alt={book.title} />
                            <HoverOverlay>
                                <HoverText>
                                    {book.title}
                                    <br />
                                    {book.author}
                                    <br />
                                    <br />
                                    {truncateSummary(book.description)}
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
        </>
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

export default NewCPPicks;

const Container = styled.div`
    width: 100vw;
    height: 225vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
`;

const NewQuizResult = styled.div`
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    color: #3E2D70;
    margin-bottom: 30px;
    text-align: left;
    margin-left: 130px;
    width: 100%;
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
    left: calc(100% + 35px);
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

const HoverText = styled.div`
    font-size: 15px;
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

const SeeMoreButton = styled.div`
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    margin-bottom: 30px;
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

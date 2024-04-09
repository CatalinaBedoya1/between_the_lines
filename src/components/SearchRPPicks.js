import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const NEW_ITEM_WIDTH = 200;
const NYT_API_KEY = 've27qt7otDqwAHzuCuLsr9M3inbBinNe';

const SearchRPPicks = () => {
    const [newScrollPosition, setNewScrollPosition] = useState(0);
    const newContainerRef = useRef();
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

    // Scroll when button clicked
    const handleNewScroll = (scrollAmount) => {
        const newNewScrollPosition = newScrollPosition + scrollAmount;
        setNewScrollPosition(newNewScrollPosition);
        newContainerRef.current.scrollLeft = newNewScrollPosition;
    };

    return (
        <Container>
            <QuizResult>
                <p>Top Community Picks...</p>
            </QuizResult>

            <div
                ref={newContainerRef}
                style={{
                    width: "1150px",
                    overflowX: "scroll",
                    scrollBehavior: "smooth",
                }}
            >
                <ContentBox>
                    {trendingBooks.map((book, index) => (
                        <CPcard key={index}>
                            <BookCover src={book.book_image} alt={book.title} />
                            <BookTitle>{book.title}</BookTitle>
                        </CPcard>
                    ))}
                </ContentBox>
            </div>

            <ActionButtons>
                <Button
                    onClick={() => { handleNewScroll(-NEW_ITEM_WIDTH) }}
                >
                    &lt;
                </Button>
                <Button
                    onClick={() => { handleNewScroll(NEW_ITEM_WIDTH) }}
                >
                    &gt;
                </Button>
            </ActionButtons>
        </Container>
    );
};

export default SearchRPPicks;

// Styled components...
const QuizResult = styled.div`
    margin-bottom: 20px;
    text-align: left;
    margin-left: 130px;
    width: 100%;
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
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

const ContentBox = styled.div`
    width: 1800px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const CPcard = styled.div`
    width: 214px;
    height: 314px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const BookCover = styled.img`
    width: 150px;
    height: 200px;
`;

const BookTitle = styled.p`
    font-size: 16px;
    margin-top: 10px;
`;

const ActionButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 1100px;
    margin-top: 20px;
`;

const Button = styled.button`
    width: 25px;
    height: 50px;
    font-size:
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        // Add hover styles if needed
    }
`;
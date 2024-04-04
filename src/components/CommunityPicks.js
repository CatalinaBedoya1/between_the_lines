import React, { useRef, useState, useEffect } from 'react';
import newRightArrow from "../assets/RightArrow.png";
import newLeftArrow from "../assets/LeftArrow.png";
import seeMore from "../assets/seemorebtn.png";
import styled from 'styled-components';

const NEW_ITEM_WIDTH = 200;
const NYT_API_KEY = 'EhyMWDy9K5iT2H5QRhcpOrSaBGlBtm1G';

const NewCPPicks = () => {
    return (
        <NewContainer>
            <NewSection category="hardcover-fiction" />
            <NewSection category="hardcover-nonfiction" />
            <NewSection category="trade-fiction-paperback" />
            <NewSection category="young-adult-hardcover" />

            <div className="seemorebtn">
                <img src={seeMore} alt="seemore" className="seemore-static" />
            </div>
        </NewContainer>
    );
};

const NewSection = ({ category }) => {
    const newContainerRef = useRef();
    const [newScrollPosition, setNewScrollPosition] = useState(0);
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

    const handleNewScroll = (scrollAmount) => {
        const newNewScrollPosition = newScrollPosition + scrollAmount;
        setNewScrollPosition(newNewScrollPosition);
        newContainerRef.current.scrollLeft = newNewScrollPosition;
    };

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

    return (
        <>
            <NewQuizResult>
                <p>{title}</p> {/* Display custom title */}
            </NewQuizResult>

            <div
                ref={newContainerRef}
                style={{
                    width: "1150px",
                    overflowX: "scroll",
                    scrollBehavior: "smooth",
                }}
            >
                <NewContentBox>
                    {books.map((book, index) => (
                        <NewCPcard key={index}>
                            <BookCover src={book.book_image} alt={book.title} />
                            <BookTitle>{book.title}</BookTitle>
                        </NewCPcard>
                    ))}
                </NewContentBox>
            </div>


        </>
    );
};

export default NewCPPicks;

const NewQuizResult = styled.div`
    margin-bottom: 20px;
    text-align: left;
    margin-left: 130px;
    width: 100%;
`;

const NewContainer = styled.div`
    width: 100vw;
    height: 300vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

const NewContentBox = styled.div`
    width: 1800px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const NewCPcard = styled.div`
    width: 214px;
    height: 314px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color};
`;

const BookCover = styled.img`
    width: 150px;
    height: 200px;
`;

const BookTitle = styled.p`
    font-size: 16px;
    margin-top: 10px;
`;
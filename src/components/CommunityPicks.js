// ORIGINAL CODE
import React, { useRef, useState, useEffect } from 'react';
import seeMore from "../assets/seemorebtn.png";
import styled from 'styled-components';

const NYT_API_KEY = 've27qt7otDqwAHzuCuLsr9M3inbBinNe';

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

// const BookTitle = styled.p`
//     font-size: 16px;
//     margin-top: 10px;
// `;







// EDITED CODE WIP- MADDY

// import React, { useRef, useState, useEffect } from 'react';
// import seeMore from "../assets/seemorebtn.png";
// import styled from 'styled-components';



// const NewCPPicks = () => {
//     return (
//         <Container>
//             <NewSection category="hardcover-fiction" />
//             <NewSection category="hardcover-nonfiction" />
//             <NewSection category="trade-fiction-paperback" />
//             <NewSection category="young-adult-hardcover" />

//             <div className="seemorebtn">
//                 <img src={seeMore} alt="seemore" className="seemore-static" />
//             </div>
//         </Container>
//     );
// };

// const NewSection = ({ category }) => {
//     const containerRef = useRef();
//     const [books, setBooks] = useState([]);
//     const [title, setTitle] = useState("");

//     useEffect(() => {
//         const fetchBooks = async () => {
//             try {
//                 const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=${NYT_API_KEY}`);
//                 const data = await response.json();
//                 setBooks(data.results.books || []);
//                 setTitle(mapTitle(category)); // Mapping function to get custom title
//             } catch (error) {
//                 console.error(`Error fetching ${category} books:`, error);
//             }
//         };

//         fetchBooks();
//     }, [category]);


//     // Mapping function to get custom title
//     const mapTitle = (category) => {
//         switch (category) {
//             case "hardcover-fiction":
//                 return "Top Community Picks Fiction";
//             case "hardcover-nonfiction":
//                 return "Top Community Picks in Nonfiction";
//             case "trade-fiction-paperback":
//                 return "Top Community Picks in Young Adult Fiction";
//             case "young-adult-hardcover":
//                 return "Top Community Picks in Fantasy ";
//             default:
//                 return "";
//         }
//     };

//     return (
//         <>
//             <NewQuizResult>
//                 <p>{title}</p> {/* Display custom title */}
//             </NewQuizResult>


//             <ScrollContainer ref={containerRef}>
//                 <ContentBox>
//                     {books.map((book, index) => (
//                         <CPcard key={index}>
//                             <BookCover src={book.book_image} alt={book.title} />
//                             {/* <BookTitle>{book.title}</BookTitle> */}
//                         </CPcard>
//                     ))}
//                 </ContentBox>
//             </ScrollContainer>
            
//         </>
//     );
// };

// export default NewCPPicks;



// /*style containers*/

// const NewQuizResult = styled.div`
//     margin-bottom: 30px;
//     text-align: left;
//     margin-left: 130px;
//     width: 100%;
//     //padding: 20px;
// `;

// const Container = styled.div`  //whole container
//     width: 100vw;
//     height: 225vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     //background-color: red;
//     //padding-top: 50px;
// `;

// const ScrollContainer = styled.div`
//     width: 1150px;
//     height: 500px; //moves scroll bar
//     overflow-x: scroll;
//     scroll-behavior: smooth;
//     //background-color: green;
//     padding-top: 10px;  //spacing on top of books imgs

//     &::-webkit-scrollbar {
//         width: 10px;
//     }

//     /* Track */
//     &::-webkit-scrollbar-track {
//         background: #d6d6d6;
//         border-radius: 10px;
//     }

//     /* Handle */
//     &::-webkit-scrollbar-thumb {
//         background: #5397AC;
//         border-radius: 10px;
//     }

//     /* Handle on hover */
//     &::-webkit-scrollbar-thumb:hover {
//         background: #555;
//     }
// `;

// const ContentBox = styled.div`
//     width: 2250px;
//     display: flex;
//     align-items: center;
//     gap: 15px;          //spacing between cards
//     //background-color: blue;
// `;

// const CPcard = styled.div`
//     width: 150px;
//     height: 200px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     background-color: ${(props) => props.color};

//     &:hover {
//         transform: scale(1.1); /* Increase the size of the card on hover */
//         transition: transform 0.3s ease; /* Add a smooth transition effect */
//     }
// `;

// const BookCover = styled.img`
//     width: 150px;
//     height: 200px;

//     /* hover effect */
//     ${CPcard}:hover & {
//         filter: brightness(70%); 
//     }
// `;


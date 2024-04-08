import React, { useRef } from 'react';
import quizRec01 from "../assets/QuizRecBooks/book1.png";
import quizRec02 from "../assets/QuizRecBooks/book2.png";
import quizRec03 from "../assets/QuizRecBooks/book3.png";
import quizRec04 from "../assets/QuizRecBooks/book4.png";
import quizRec05 from "../assets/QuizRecBooks/book5.png";
import quizRec06 from "../assets/QuizRecBooks/book6.png";
import quizRec07 from "../assets/QuizRecBooks/book7.png";
import quizRec08 from "../assets/QuizRecBooks/book8.png";
import quizRec09 from "../assets/QuizRecBooks/book9.png";
import quizRec10 from "../assets/QuizRecBooks/book10.png";
import styled from 'styled-components';


const QuizRecs = () => {
    const containerRef = useRef();

    // Data array
    const QUIZ_DATA = [
        { id: "01", cover: quizRec01, details: "Tess of the Road by Rachel Hartman" },
        { id: "02", cover: quizRec02, details: "The First Bright Thing by J.R. Dawson" },
        { id: "03", cover: quizRec03, details: "A Tempest of Tea by Hafsah Faizal"},
        { id: "04", cover: quizRec04, details: "Sword Catcher by Cassandra Clare" },
        { id: "05", cover: quizRec05, details: "Supernova by Marissa Meyer" },
        { id: "06", cover: quizRec06, details: "Immortal Longings by Chloe Gong" },
        { id: "07", cover: quizRec07, details: "Stone Blind by Natalie Haynes" },
        { id: "08", cover: quizRec08, details: "Percy Jackson by Rick Riordan" },
        { id: "09", cover: quizRec09, details: "Harry Potter and the Goblet of Fire by J.K. Rowling" },
        { id: "10", cover: quizRec10, details: "The Martian by Andy Weir" },
    ];

    return (
        <QuizRecContainer>
            <ScrollContainer ref={containerRef}>
                <QuizContentBox>
                    {QUIZ_DATA.map((QuizRecData) => (
                        <QRCard key={QuizRecData.id}>
                            <img src={QuizRecData.cover} alt={QuizRecData.details} />
                            
                            <HoverOverlay>{QuizRecData.details}</HoverOverlay>
                        
                        </QRCard>
                    ))}
                </QuizContentBox>
            </ScrollContainer>
        </QuizRecContainer>
    );
};
export default QuizRecs;


// Styled components
const QuizRecContainer = styled.div`
    //override by scroll container
`;

const ScrollContainer = styled.div`
    width: 1500px; //1150px;
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

const QuizContentBox = styled.div`
    //width: 2250px;
    display: flex;
    align-items: center;
    gap: 20px;

    //background-color: blue;
`;

const QRCard = styled.div`
    display: flex;
    margin: 10px;
    width: 145px;
    height: 214px;
    position: relative;

    img {
        width: auto; 
        height: 100%;
        transition: transform 0.2s ease;
    }

    &:hover img {
        transform: scale(1.1);
    }
`;

const HoverOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    
    transition: opacity 0.3s ease;

    ${QRCard}:hover & {
        opacity: 1;
    }
`;




//// OLD CODE
// import React, { useRef, useState } from 'react';
// import quizRec01 from "../assets/book1.png";
// import quizRec02 from "../assets/book2.png";
// import quizRec03 from "../assets/book3.png";
// import quizRec04 from "../assets/book4.png";
// import quizRec05 from "../assets/book5.png";
// import quizRec06 from "../assets/book6.png";
// import quizRec07 from "../assets/book7.png";
// import quizRec08 from "../assets/book8.png";
// import quizRec09 from "../assets/book9.png";
// import quizRec10 from "../assets/book10.png";
// import styled from 'styled-components';


// const CPPicks = () => {
//     const containerRef = useRef();

//     // Data array
//     const QUIZ_DATA = [
//         { id: "01", image: quizRec01, details: "Tess of the Road by Rachel Hartman" },
//         { id: "02", image: quizRec02, details: "The First Bright Thing by J.R. Dawson" },
//         { id: "03", image: quizRec03, details: "A Tempest of Tea by Hafsah Faizal"},
//         { id: "04", image: quizRec04, details: "Sword Catcher by Cassandra Clare" },
//         { id: "05", image: quizRec05, details: "Supernova by Marissa Meyer" },
//         { id: "06", image: quizRec06, details: "Immortal Longings by Chloe Gong" },
//         { id: "07", image: quizRec07, details: "Stone Blind by Natalie Haynes" },
//         { id: "08", image: quizRec08, details: "Percy Jackson by Rick Riordan" },
//         { id: "09", image: quizRec09, details: "Harry Potter and the Goblet of Fire by J.K. Rowling" },
//         { id: "10", image: quizRec10, details: "The Martian by Andy Weir" },
//     ];

//     return (
//         <QuizRecContainer>
//             <ScrollContainer ref={containerRef}>
//                 <ContentBox>
//                     {QUIZ_DATA.map((item) => (
//                         <BookCard 
//                             key={item.id} 
//                             image={item.image}
//                             details={item.details}
//                         />
//                     ))}
//                 </ContentBox>
//             </ScrollContainer>
 
//         </QuizRecContainer>
//     );
// };

// export default CPPicks;

// // Styled components
// const QuizRecContainer = styled.div`
//     width: 100vw;
//     height: 60vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

//     background-color: blue;
// `;

// const ScrollContainer = styled.div`
//     width: 1150px;
//     height: 275px; //moves scroll bar
//     overflow-x: scroll;
//     scroll-behavior: smooth;
//     padding-top: 20px;
//     padding-left: 10px;
//     padding-right: 10px;

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
//     gap: 20px;
// `;

// const BookCard = ({ image, details }) => {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <StyledBookCard 
//             image={image}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             {isHovered && 
//                 <DetailsContainer>
//                     <Details>{details}</Details>
//                 </DetailsContainer>  
//             }

//         </StyledBookCard>
//     );
// };

// const StyledBookCard = styled.div`
//     width: 145px; //214
//     height: 214px;  //314
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-image: ${(props) => `url(${props.image})`};
//     background-size: contain;


//     transition: transform 0.2s ease;
//     &:hover {
//         transform: scale(1.1);
//     }
// `;

// const DetailsContainer = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5);
    
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// const Details = styled.p`
//     color: white;
//     font-size: 20px;
//     font-weight: bold;
//     text-align: center;
// `;




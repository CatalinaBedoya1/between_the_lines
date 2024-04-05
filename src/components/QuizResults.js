import React, { useRef, useState } from 'react';
import quizRec01 from "../assets/book1.png";
import quizRec02 from "../assets/book2.png";
import quizRec03 from "../assets/book3.png";
import quizRec04 from "../assets/book4.png";
import quizRec05 from "../assets/book5.png";
import quizRec06 from "../assets/book6.png";
import quizRec07 from "../assets/book7.png";
import quizRec08 from "../assets/book8.png";
import quizRec09 from "../assets/book9.png";
import quizRec10 from "../assets/book10.png";
// import rightArrow from "../assets/RightArrow.png";
// import leftArrow from "../assets/LeftArrow.png";
import styled from 'styled-components';

// const ITEM_WIDTH = 214;

const CPPicks = () => {
    // const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef();

    // Data array
    const QUIZ_DATA = [
        { id: "01", image: quizRec01, details: "title1" },
        { id: "02", image: quizRec02 },
        { id: "03", image: quizRec03 },
        { id: "04", image: quizRec04 },
        { id: "05", image: quizRec05 },
        { id: "06", image: quizRec06 },
        { id: "07", image: quizRec07 },
        { id: "08", image: quizRec08 },
        { id: "09", image: quizRec09 },
        { id: "10", image: quizRec10 },
    ];

    // Function to handle scroll when button clicked
    // const handleScroll = (scrollAmount) => {
    //     // Calculate new scroll position
    //     const newScrollPosition = scrollPosition + scrollAmount;

    //     // Update new scroll position
    //     setScrollPosition(newScrollPosition);

    //     // Set scrollLeft
    //     containerRef.current.scrollLeft = newScrollPosition;
    // };

    return (
        <Container>
            <ScrollContainer ref={containerRef}>
                <ContentBox>
                    {QUIZ_DATA.map((item) => (
                        <BookCard 
                            key={item.id} 
                            image={item.image}
                            details={item.details}
                        />
                    ))}
                </ContentBox>
            </ScrollContainer>
 
            {/* <ActionButtons> */}
                {/*Code before*/}
                {/* <Button onClick={() => { handleScroll(-ITEM_WIDTH) }}>Scroll Left</Button> */}
                
                {/* <Button
                    style={{ backgroundImage: `url(${leftArrow})` }}
                    onClick={() => { handleScroll(-ITEM_WIDTH) }}
                    >
                </Button>
               
                <Button
                    style={{ backgroundImage: `url(${rightArrow})` }}
                    onClick={() => { handleScroll(ITEM_WIDTH) }}
                    >
                </Button> */}

            {/* </ActionButtons> */}
        </Container>
    );
};

export default CPPicks;

// Styled components
const Container = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ScrollContainer = styled.div`
    width: 1150px;
    height: 275px; //moves scroll bar
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding-top: 20px;

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
    width: 2250px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const BookCard = ({ image, details }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StyledBookCard 
            image={image}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && <Details>{details}</Details>}
        </StyledBookCard>
    );
};

const StyledBookCard = styled.div`
    width: 155px;
    height: 205px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${(props) => `url(${props.image})`};
    background-size: cover;

    transition: transform 0.2s ease;
    &:hover {
        transform: scale(1.1);
    }
`;

const Details = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    padding-top: 10px;
    //border-radius: 5px;
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


// const ActionButtons = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 1100px;
//     margin-top: 20px;
// `;

// const Button = styled.button`
//     width: 25px; /* Adjust width according to your arrow image */
//     height: 50px; /* Adjust height according to your arrow image */
//     background-color: transparent;
//     border: none;
//     cursor: pointer;
//     background-size: cover;
//     background-repeat: no-repeat;
//     transition: all 0.5s ease;

//     &:hover {
//         // Adjust styles for hover state if needed
//     }
// `;


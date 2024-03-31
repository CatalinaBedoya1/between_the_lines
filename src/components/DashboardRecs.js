// import React, { useRef, useState } from 'react';
import React, {useRef } from 'react';
import recommended01 from "../assets/book1.png";
import recommended02 from "../assets/book2.png";
import recommended03 from "../assets/book3.png";
import recommended04 from "../assets/book4.png";
import recommended05 from "../assets/book5.png";
import recommended06 from "../assets/book6.png";
import recommended07 from "../assets/book7.png";
import recommended08 from "../assets/book8.png";
import recommended09 from "../assets/book9.png";
import recommended10 from "../assets/book10.png";
// import rightArrowIcon from "../assets/RightArrow.png";
// import leftArrowIcon from "../assets/LeftArrow.png";
import styled from 'styled-components';

// const ITEM_WIDTH = 214;

const CustomComponent = () => {
    // const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef();

    // Data array
    const WANTTOREAD_DATA = [
        { id: "01", image: recommended01 },
        { id: "02", image: recommended02 },
        { id: "03", image: recommended03 },
        { id: "04", image: recommended04 },
        { id: "05", image: recommended05 },
        { id: "06", image: recommended06 },
        { id: "07", image: recommended07 },
        { id: "08", image: recommended08 },
        { id: "09", image: recommended09 },
        { id: "10", image: recommended10 },
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
            <RecommendationSection>
                <p>Want to Read ...</p>
            </RecommendationSection>

            <div
                ref={containerRef}
                style={{
                    width: "1150px",
                    overflowX: "scroll",
                    scrollBehavior: "smooth",
                }}
            >
                <ContentBox>
                    {WANTTOREAD_DATA.map((item) => (
                        <BookCard 
                            key={item.id} 
                            image={item.image}
                            >
                        </BookCard>
                    ))}
                </ContentBox>
            </div>
            

            {/*edit later*/}
            {/* <ActionButtons>
                <NavigationButton
                    style={{ backgroundImage: `url(${leftArrowIcon})` }}
                    onClick={() => { handleScroll(-ITEM_WIDTH) }}
                />
                
                <NavigationButton
                    style={{ backgroundImage: `url(${rightArrowIcon})` }}
                    onClick={() => { handleScroll(ITEM_WIDTH) }}
                />
            </ActionButtons> */}

            

            <RecommendationSection>
                <br></br>
                <p>Recently Read ...</p>
            </RecommendationSection>

            <div
                ref={containerRef}
                style={{
                    width: "1150px",
                    overflowX: "scroll",
                    scrollBehavior: "smooth",
                }}
            >
                <ContentBox>
                    {WANTTOREAD_DATA.map((item) => (
                        <BookCard 
                            key={item.id} 
                            image={item.image}
                            >
                        </BookCard>
                    ))}
                </ContentBox>
            </div>

        </Container>
    );
};

export default CustomComponent;

// Styled components
const RecommendationSection = styled.div`
    margin-bottom: 20px;
    text-align: left;
    margin-left: 130px;
    width: 100%;
    color: white;
`;

const Container = styled.div`
    width: 100vw;
    height: 125vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #9DBEBD;
`;

const ContentBox = styled.div`
    width: 2250px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const BookCard = styled.div`
    width: 155px;
    height: 205px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: ${(props) => `url(${props.image})`};
    background-size: cover;
`;

// const ActionButtons = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 1100px;
//     margin-top: 20px;
// `;

// const NavigationButton = styled.button`
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

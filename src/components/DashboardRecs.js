import React, {useRef, useState } from 'react';
import want1 from "../assets/DashboardBooks/want1.png";
import want2 from "../assets/DashboardBooks/want2.png";
import want3 from "../assets/DashboardBooks/want3.png";
import want4 from "../assets/DashboardBooks/want4.png";
import want5 from "../assets/DashboardBooks/want5.png";
import want6 from "../assets/DashboardBooks/want6.png";
import want7 from "../assets/DashboardBooks/want7.png";
import want8 from "../assets/DashboardBooks/want8.png";
import recent1 from "../assets/DashboardBooks/recent1.png";
import recent2 from "../assets/DashboardBooks/recent2.png";
import recent3 from "../assets/DashboardBooks/recent3.png";
import recent4 from "../assets/DashboardBooks/recent4.png";
import recent5 from "../assets/DashboardBooks/recent5.png";
import recent6 from "../assets/DashboardBooks/recent6.png";
import recent7 from "../assets/DashboardBooks/recent7.png";
import recent8 from "../assets/DashboardBooks/recent8.png";
// import rightArrowIcon from "../assets/RightArrow.png";
// import leftArrowIcon from "../assets/LeftArrow.png";
import styled from 'styled-components';


const BookSlider = () => {
    const containerRef = useRef();

    // Data array
    const WANTTOREAD_DATA = [
        { id: "01", image: want1, details: "Thicker Than Water by Kerry Washington" },
        { id: "02", image: want2, details: "Things We Never Got Over by Lucy Score" },
        { id: "03", image: want3, details: "Firefly Lane by Kristin Hannah" },
        { id: "04", image: want4, details: "Crying In Hmart by Michelle Zauner" },
        { id: "05", image: want5, details: "The House in the Cerulean Sea by TJ Klune" },
        { id: "06", image: want6, details: "Anxious People by Fredrik Backman" },
        { id: "07", image: want7, details: "If He Had Been With Me by Laura Nowlin" },
        { id: "08", image: want8, details: "Happy Place by Emily Henry" },
        { id: "09", image: want1, details: "Thicker Than Water by Kerry Washington" },
        { id: "10", image: want2, details: "Things We Never Got Over by Lucy Score" },
        { id: "11", image: want3, details: "Firefly Lane by Kristin Hannah"  },
        { id: "12", image: want4, details: "Crying In Hmart by Michelle Zauner" },
    ];

    // Data array
    const RECENTREAD_DATA = [
        { id: "01", image: recent1, details: "The Seven Husbands of Evelyn Hugo by Taylor Jenkins Reid" },
        { id: "02", image: recent2, details: "The Way I used to Be by Amber Smith" },
        { id: "03", image: recent3, details: "Twisted Lies by Ana Huang" },
        { id: "04", image: recent4, details: "It Happened One Summer by Tessa Bailey" },
        { id: "05", image: recent5, details: "The Silent Patient by Alex Michaelides" },
        { id: "06", image: recent6, details: "The Stand- In by Lily Chu" },
        { id: "07", image: recent7, details: "Twisted Hate by Ana Huang" },
        { id: "08", image: recent8, details: "Litte Fires Everywhere by Celeste Ng" },
        { id: "09", image: recent1, details: "The Seven Husbands of Evelyn Hugo by Taylor Jenkins Reid" },
        { id: "10", image: recent2, details: "The Way I used to Be by Amber Smith" },
        { id: "11", image: recent3, details: "Twisted Lies by Ana Huang" },
        { id: "12", image: recent4, details: "It Happened One Summer by Tessa Bailey" },
    ];

    return (
        <Container>
            <RecommendationSection>
                <p>Want to Read ...</p>
            </RecommendationSection>

            <ScrollContainer ref={containerRef}>
                <ContentBox>
                    {WANTTOREAD_DATA.map((item) => (
                        <BookCard 
                            key={item.id} 
                            image={item.image}
                            details={item.details}
                        />
                    ))}
                </ContentBox>
            </ScrollContainer>
            

            <RecommendationSection>
                <br></br>
                <p>Recently Read ...</p>
            </RecommendationSection>

            <ScrollContainer ref={containerRef}>
                <ContentBox>
                    {RECENTREAD_DATA.map((item) => (
                        <BookCard 
                            key={item.id} 
                            image={item.image}
                            details={item.details}
                        />
                    ))}
                </ContentBox>
            </ScrollContainer>
            

        </Container>
    );
};

export default BookSlider;



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

const ScrollContainer = styled.div`
    width: 1150px;
    height: 275px; //moves scroll bar
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;

    &::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: white;
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
    gap: 20px;
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
    width: 145px;
    height: 214px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${(props) => `url(${props.image})`};
    background-size: contain;

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
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 10px;
    //border-radius: 5px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
        { id: "01", cover: quizRec01, title: "Tess of the Road", author: "Rachel Hartman", rating: "4/5 stars", summary: "This novel follows Tess Dombegh, a complex and spirited young woman, as she embarks on a journey of self-discovery and redemption. Set in a richly imagined fantasy world, Tess confronts societal expectations, personal demons, and the legacy of her family as she travels the road seeking her own truth and purpose. It's a compelling tale of resilience, growth, and the power of forging one's own path." },
        { id: "02", cover: quizRec02, title: "The First Bright Thing", author: "J.R. Dawson",  rating: "4/5 stars", summary: "A gripping sci-fi tale about humanity's fight for survival after a catastrophic solar storm. As hope flickers in the darkness, a mysterious phenomenon brings a glimmer of light to a world on the brink of extinction." },
        { id: "03", cover: quizRec03, title: "A Tempest of Tea", author: "Hafsah Faizal",  rating: "4/5 stars", summary: " Hafsah Faizal crafts a captivating fantasy where tea holds magical sway. Follow the protagonist on a quest brimming with danger, romance, and unexpected alliances, all swirling amidst the secrets of tea-making."},
        { id: "04", cover: quizRec04, title: "Sword Catcher", author: "Cassandra Clare",  rating: "4/5 stars", summary: "A gripping fantasy short story set in a world of magic and intrigue. Follow the protagonist as they navigate treacherous politics and deadly battles, all while grappling with their own inner demons. Clare weaves a tale of courage, sacrifice, and the enduring power of the human spirit in the face of adversity." },
        { id: "05", cover: quizRec05, title: "Supernova", author: "Marissa Meyer",  rating: "4/5 stars", summary: "The electrifying finale to the Renegades trilogy, where Nova faces a gripping struggle between her loyalties to the Renegades and her Anarchist origins. Meyer delivers a pulse-pounding conclusion packed with action, romance, and moral dilemmas in a world of superheroes and villains." },
        { id: "06", cover: quizRec06, title: "Immortal Longings", author: "Chloe Gong",  rating: "4/5 stars", summary: "A mesmerizing retelling of Romeo and Juliet set in 1920s Shanghai, where rival gangs clash against a backdrop of political unrest and forbidden love. Gong weaves a tale of passion, betrayal, and sacrifice, blending historical fiction with elements of fantasy and romance. Get ready for a riveting journey through the opulent streets of Shanghai, where love and danger collide in a world teetering on the brink of revolution." },
        { id: "07", cover: quizRec07, title: "Stone Blind", author: "Natalie Haynes",  rating: "4/5 stars", summary: " A gripping psychological thriller set in a small town plagued by its dark history. As protagonist delves into a series of mysterious events, secrets unravel and tensions rise, leading to a shocking conclusion." },
        { id: "08", cover: quizRec08, title: "Percy Jackson and the Lighting Thief", author: "Rick Riordan",  rating: "4/5 stars", summary: "The first book in Rick Riordan's captivating fantasy series, following the adventures of Percy Jackson, a modern-day demigod. Filled with Greek mythology, thrilling quests, and memorable characters, this novel takes readers on an epic journey through the realms of gods and monsters as Percy discovers his true heritage and battles ancient foes." },
        { id: "09", cover: quizRec09, title: "Harry Potter and the Goblet of Fire", author: "J.K. Rowling",  rating: "4/5 stars", summary: "The fourth book in J.K. Rowling's iconic series. Harry competes in the dangerous Triwizard Tournament, facing challenges and discovering dark secrets. As tensions rise and a formidable enemy returns, Hogwarts becomes the battleground for a brewing conflict." },
        { id: "10", cover: quizRec10, title: "The Martian", author: "Andy Weir",  rating: "4/5 stars", summary: "A gripping sci-fi novel about astronaut Mark Watney's fight for survival after being stranded on Mars. With humor and ingenuity, Watney battles the harsh environment and uses his skills to stay alive until help arrives." },
    ];

    const truncateSummary = (summary) => {
        const words = summary.split(' ');
        if (words.length <= 16) {
            return summary;
        } else {
            return words.slice(0, 16).join(' ') + ' ...';
        }
    };


    return (
        <QuizRecContainer>
            <ScrollContainer ref={containerRef}>
                <QuizContentBox>
                    {QUIZ_DATA.map((QuizRecData) => (
                        <QRCard key={QuizRecData.id}>
                            <img src={QuizRecData.cover} alt="" />
                            
                            <HoverOverlay>
                                <HoverText>
                                {QuizRecData.title}
                                <br></br>
                                {QuizRecData.author}
                                <br></br>
                                {QuizRecData.rating}
                                <br></br>
                                <br></br>
                                {truncateSummary(QuizRecData.summary)}
                                
                                <HoverLink to="/routes/Discussions.js">
                                    <CardHoverButton>View Details</CardHoverButton>
                                </HoverLink>

                                </HoverText>
                            </HoverOverlay>
    
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
    padding-bottom: 30px;
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
        background: #4BB5D6;
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
        transform: scale(1.2);
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

    ${QRCard}:hover  & {
        opacity: 1;
        z-index: 1;
        transform: scale(1.2);
    }
`;


const HoverText =styled.div`
    font-size: 13px;
    font-family: "Manrope", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
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




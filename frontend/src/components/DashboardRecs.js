import React, { useRef } from 'react';
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
import styled from 'styled-components';


const BookSlider = () => {
    const containerRef = useRef();

    // Data array
    const WANTTOREAD_DATA = [
        { id: "01", cover: want1, title: "Thicker Than Water", author: "Kerry Washington", rating: "4/5 stars", summary: "A compelling family drama that explores love, loyalty, and secrets within a tight-knit community, testing the bonds between siblings." },
        { id: "02", cover: want2, title: "Things We Never Got Over", author: "Lucy Score", rating: "4/5 stars", summary: "A poignant romance novel about second chances and forgiveness. As old flames reconnect, protagonists confront their pasts and rediscover the power of love to heal."  },
        { id: "03", cover: want3, title: "Firefly Lane", author: "Kristin Hannah", rating: "4/5 stars", summary: "A heartwarming novel that follows the lifelong friendship between two women, Tully and Kate, as they navigate the ups and downs of life from their teenage years in the 1970s to adulthood." },
        { id: "04", cover: want4, title: "Crying In Hmart", author: "Michelle Zauner", rating: "4/5 stars", summary: "A touching memoir about the author's journey as a Korean American navigating identity and loss after her mother's death from cancer. Through heartfelt storytelling, Zauner reflects on grief, family, and the healing power of food."  },
        { id: "05", cover: want5, title: "The House in the Cerulean Sea", author: "TJ Klune", rating: "4/5 stars", summary: "A whimsical fantasy novel about Linus Baker, a caseworker sent to observe a magical orphanage on a remote island. With its endearing characters and themes of love and acceptance, Klune's book is a heartwarming and uplifting read."  },
        { id: "06", cover: want6, title: "Anxious People", author: "Fredrik Backman", rating: "4/5 stars", summary: "A heartwarming and humorous novel about a group of strangers thrown together during a failed bank robbery. As they navigate a hostage situation, unexpected connections emerge, revealing profound truths about human nature and empathy."  },
        { id: "07", cover: want7, title: "If He Had Been With Me", author: "Laura Nowlin", rating: "4/5 stars", summary: "A touching coming-of-age story about Autumn and Finn, childhood friends whose lives diverge as they grapple with love, loss, and self-discovery. "  },
        { id: "08", cover: want8, title: "Happy Place", author: "Emily Henry", rating: "4/5 stars", summary: "A charming romance about childhood friends Harper and Jacob who reunite and discover a deeper connection. Henry's novel beautifully explores second chances and the power of love to heal." },
        { id: "09", cover: want1, title: "Thicker Than Water", author: "Kerry Washington", rating: "4/5 stars", summary: "A compelling family drama that explores love, loyalty, and secrets within a tight-knit community, testing the bonds between siblings."  },
        { id: "10", cover: want2, title: "Things We Never Got Over", author: "Lucy Score", rating: "4/5 stars", summary: "A poignant romance novel about second chances and forgiveness. As old flames reconnect, protagonists confront their pasts and rediscover the power of love to heal."  },
        { id: "11", cover: want3, title: "Firefly Lane", author: "Kristin Hannah", rating: "4/5 stars", summary: "A heartwarming novel that follows the lifelong friendship between two women, Tully and Kate, as they navigate the ups and downs of life from their teenage years in the 1970s to adulthood."   },
        { id: "12", cover: want4, title: "Crying In Hmart", author: "Michelle Zauner", rating: "4/5 stars", summary: "A touching memoir about the author's journey as a Korean American navigating identity and loss after her mother's death from cancer. Through heartfelt storytelling, Zauner reflects on grief, family, and the healing power of food."  },
    ];

    // Data array
    const RECENTREAD_DATA = [
        { id: "01", cover: recent1, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", rating: "4/5 stars", summary: "A mesmerizing tale of the iconic film actress's tumultuous life. Through interviews with a journalist, Evelyn unveils the secrets behind her seven marriages, exploring themes of love, ambition, and identity. Reid's storytelling captivates readers, making it a must-read until the last page." },
        { id: "02", cover: recent2, title: "If You Could See the Sun", author: "Ann Liang", rating: "4/5 stars", summary: "In this genre-bending YA debut, a Chinese American girl monetizes her strange new invisibility powers by discovering and selling her wealthy classmates’ most scandalous secrets." },
        { id: "03", cover: recent3, title: "Twisted Lies", author: "Ana Huang", rating: "4/5 stars", summary: "A thrilling romance novel filled with deception and secrets. As the protagonist uncovers the truth about her past, she faces unexpected allies and dangerous foes. With suspenseful twists, Huang crafts a captivating tale of love, betrayal, and redemption." },
        { id: "04", cover: recent4, title: "It Happened One Summer", author: "Tessa Bailey", rating: "4/5 stars", summary: "A delightful romantic comedy set in a coastal town. When a socialite gets stranded, she finds unexpected love and friendship with a local fisherman. Bailey weaves a heartwarming tale of romance and self-discovery in this charming seaside story." },
        { id: "05", cover: recent5, title: "The Silent Patient", author: "Alex Michaelides", rating: "4/5 stars", summary: "A psychological thriller about Alicia Berenson, a painter who stops speaking after murdering her husband. As Theo Faber investigates her case, shocking secrets are unveiled, leading to a gripping conclusion that will leave readers on the edge of their seats." },
        { id: "06", cover: recent6, title: "The Stand- In", author: "Lily Chu", rating: "4/5 stars", summary: "A delightful romantic comedy about a woman who becomes a stand-in girlfriend for her best friend's brother. Chu crafts a charming tale filled with humor and heart as they navigate this unconventional arrangement and discover unexpected feelings." },
        { id: "07", cover: recent7, title: "Twisted Hate", author: "Ana Huang", rating: "4/5 stars", summary: "A romance novel that explores themes of love and redemption amidst a backdrop of deception and betrayal. With captivating twists and turns, Huang weaves a tale of passion and suspense that keeps readers enthralled until the very end." },
        { id: "08", cover: recent8, title: "Litte Fires Everywhere", author: "Celeste Ng", rating: "4/5 stars", summary: "Celeste Ng intricately weaves together the lives of two families in Shaker Heights, exploring themes of motherhood, race, and societal expectations. With compelling characters and a gripping narrative, Ng's novel delves into the complexities of human relationships and the search for identity." },
        { id: "09", cover: recent1, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", rating: "4/5 stars", summary: "A mesmerizing tale of the iconic film actress's tumultuous life. Through interviews with a journalist, Evelyn unveils the secrets behind her seven marriages, exploring themes of love, ambition, and identity. Reid's storytelling captivates readers, making it a must-read until the last page." },
        { id: "10", cover: recent2, title: "The Way I used to Be", author: "Amber Smith", rating: "4/5 stars", summary: "Amber Smith delves into the aftermath of sexual assault on teenager Eden, tracing her emotional journey over four years. Smith's poignant novel explores themes of trauma, recovery, and the power of finding one's voice in the face of adversity." },
        { id: "11", cover: recent3, title: "Twisted Lies", author: "Ana Huang", rating: "4/5 stars", summary: "A thrilling romance novel filled with deception and secrets. As the protagonist uncovers the truth about her past, she faces unexpected allies and dangerous foes. With suspenseful twists, Huang crafts a captivating tale of love, betrayal, and redemption." },
        { id: "12", cover: recent4, title: "It Happened One Summer", author: "Tessa Bailey", rating: "4/5 stars", summary: "A delightful romantic comedy set in a coastal town. When a socialite gets stranded, she finds unexpected love and friendship with a local fisherman. Bailey weaves a heartwarming tale of romance and self-discovery in this charming seaside story." },
    ];


    const truncateSummary = (summary) => {
        const words = summary.split(' ');
        if (words.length <= 10) {
            return summary;
        } else {
            return words.slice(0, 10).join(' ') + ' ...';
        }
    };

    return (
        <DashContainer>
            <RecommendationSection>
                <p>Recently Read ...</p>
            </RecommendationSection>

            <ScrollContainer ref={containerRef}>
                <ContentBox>
                    {RECENTREAD_DATA.map((RecentData) => (
                        
                        <DashCard key={RecentData.id}>
                            <img src={RecentData.cover} alt="" />
                            
                            <HoverOverlay>
                                <HoverText>
                                {RecentData.title}
                                <br></br>
                                {RecentData.author}
                                <br></br>
                                {RecentData.rating}
                                <br></br>
                                <br></br>
                                {truncateSummary(RecentData.summary)}
                                
                                <HoverLink to="/routes/Discussions.js">
                                    <CardHoverButton>View Details</CardHoverButton>
                                </HoverLink>
                                </HoverText>
                            </HoverOverlay>
                            
                        </DashCard>
                    ))}
                </ContentBox>
            </ScrollContainer>

            <br></br>
            
            <RecommendationSection>
                <p>Want to Read ...</p>
            </RecommendationSection>

            <ScrollContainer ref={containerRef}>
                <ContentBox>
                    {WANTTOREAD_DATA.map((WantToReadData) => (
                        
                        <DashCard key={WantToReadData.id}>
                            <img src={WantToReadData.cover} alt={WantToReadData.details} />
                            
                            <HoverOverlay>
                                <HoverText>
                                {WantToReadData.title}
                                <br></br>
                                {WantToReadData.author}
                                <br></br>
                                {WantToReadData.rating}
                                <br></br>
                                <br></br>
                                {truncateSummary(WantToReadData.summary)}
                                
                                <HoverLink to="/routes/Discussions.js">
                                    <CardHoverButton>View Details</CardHoverButton>
                                </HoverLink>
                                </HoverText>
                            </HoverOverlay>
                            
                        </DashCard>
                    ))}
                </ContentBox>
            </ScrollContainer>
            

        </DashContainer>
    );
};

export default BookSlider;



// Styled components
const RecommendationSection = styled.div`
    text-align: left;
    color: white;
    font-family: "Agbalumo", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 40px;
`;

const DashContainer = styled.div`
    background-color: #64A3C6;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 20px;
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
        background: #29739B;
        border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #5AC9EB;
    }
`;


const ContentBox = styled.div`
    //width: 2250px;
    display: flex;
    align-items: center;
    gap: 20px;
`;


const DashCard = styled.div`
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
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 400;
font-style: normal;
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

    ${DashCard}:hover  & {
        opacity: 1;
        z-index: 1;
        transform: scale(1.2);
    }
`;

const HoverText =styled.div`
    font-size: 14px;
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



// import React, {useRef, useState } from 'react';
// import want1 from "../assets/DashboardBooks/want1.png";
// import want2 from "../assets/DashboardBooks/want2.png";
// import want3 from "../assets/DashboardBooks/want3.png";
// import want4 from "../assets/DashboardBooks/want4.png";
// import want5 from "../assets/DashboardBooks/want5.png";
// import want6 from "../assets/DashboardBooks/want6.png";
// import want7 from "../assets/DashboardBooks/want7.png";
// import want8 from "../assets/DashboardBooks/want8.png";
// import recent1 from "../assets/DashboardBooks/recent1.png";
// import recent2 from "../assets/DashboardBooks/recent2.png";
// import recent3 from "../assets/DashboardBooks/recent3.png";
// import recent4 from "../assets/DashboardBooks/recent4.png";
// import recent5 from "../assets/DashboardBooks/recent5.png";
// import recent6 from "../assets/DashboardBooks/recent6.png";
// import recent7 from "../assets/DashboardBooks/recent7.png";
// import recent8 from "../assets/DashboardBooks/recent8.png";
// // import rightArrowIcon from "../assets/RightArrow.png";
// // import leftArrowIcon from "../assets/LeftArrow.png";
// import styled from 'styled-components';


// const BookSlider = () => {
//     const containerRef = useRef();

//     // Data array
//     const WANTTOREAD_DATA = [
//         { id: "01", image: want1, details: "Thicker Than Water by Kerry Washington" },
//         { id: "02", image: want2, details: "Things We Never Got Over by Lucy Score" },
//         { id: "03", image: want3, details: "Firefly Lane by Kristin Hannah" },
//         { id: "04", image: want4, details: "Crying In Hmart by Michelle Zauner" },
//         { id: "05", image: want5, details: "The House in the Cerulean Sea by TJ Klune" },
//         { id: "06", image: want6, details: "Anxious People by Fredrik Backman" },
//         { id: "07", image: want7, details: "If He Had Been With Me by Laura Nowlin" },
//         { id: "08", image: want8, details: "Happy Place by Emily Henry" },
//         { id: "09", image: want1, details: "Thicker Than Water by Kerry Washington" },
//         { id: "10", image: want2, details: "Things We Never Got Over by Lucy Score" },
//         { id: "11", image: want3, details: "Firefly Lane by Kristin Hannah"  },
//         { id: "12", image: want4, details: "Crying In Hmart by Michelle Zauner" },
//     ];

//     // Data array
//     const RECENTREAD_DATA = [
//         { id: "01", image: recent1, details: "The Seven Husbands of Evelyn Hugo by Taylor Jenkins Reid" },
//         { id: "02", image: recent2, details: "The Way I used to Be by Amber Smith" },
//         { id: "03", image: recent3, details: "Twisted Lies by Ana Huang" },
//         { id: "04", image: recent4, details: "It Happened One Summer by Tessa Bailey" },
//         { id: "05", image: recent5, details: "The Silent Patient by Alex Michaelides" },
//         { id: "06", image: recent6, details: "The Stand- In by Lily Chu" },
//         { id: "07", image: recent7, details: "Twisted Hate by Ana Huang" },
//         { id: "08", image: recent8, details: "Litte Fires Everywhere by Celeste Ng" },
//         { id: "09", image: recent1, details: "The Seven Husbands of Evelyn Hugo by Taylor Jenkins Reid" },
//         { id: "10", image: recent2, details: "The Way I used to Be by Amber Smith" },
//         { id: "11", image: recent3, details: "Twisted Lies by Ana Huang" },
//         { id: "12", image: recent4, details: "It Happened One Summer by Tessa Bailey" },
//     ];

//     return (
//         <Container>
//             <RecommendationSection>
//                 <p>Want to Read ...</p>
//             </RecommendationSection>

//             <ScrollContainer ref={containerRef}>
//                 <ContentBox>
//                     {WANTTOREAD_DATA.map((item) => (
//                         <BookCard 
//                             key={item.id} 
//                             image={item.image}
//                             details={item.details}
//                         />
//                     ))}
//                 </ContentBox>
//             </ScrollContainer>
            

//             <RecommendationSection>
//                 <br></br>
//                 <p>Recently Read ...</p>
//             </RecommendationSection>

//             <ScrollContainer ref={containerRef}>
//                 <ContentBox>
//                     {RECENTREAD_DATA.map((item) => (
//                         <BookCard 
//                             key={item.id} 
//                             image={item.image}
//                             details={item.details}
//                         />
//                     ))}
//                 </ContentBox>
//             </ScrollContainer>
            

//         </Container>
//     );
// };

// export default BookSlider;



// // Styled components
// const RecommendationSection = styled.div`
//     margin-bottom: 20px;
//     text-align: left;
//     margin-left: 130px;
//     width: 100%;
//     color: white;
// `;

// const Container = styled.div`
//     width: 100vw;
//     height: 125vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     background-color: #9DBEBD;
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
//         background: white;
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
//             {isHovered && <Details>{details}</Details>}
//         </StyledBookCard>
//     );
// };

// const StyledBookCard = styled.div`
//     width: 145px;
//     height: 214px;
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

// const Details = styled.p`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     color: white;
//     font-size: 20px;
//     font-weight: bold;
//     text-align: center;
//     background-color: rgba(0, 0, 0, 0.5);
//     padding-top: 10px;
//     //border-radius: 5px;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

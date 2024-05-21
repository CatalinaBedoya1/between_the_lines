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
        { id: "01", cover: quizRec01, title: "King Of Pride", author: "Ana Huang", rating: "4/5 stars", summary: "She's his opposite in every way...and the greatest temptation he's ever known. Reserved, controlled, and proper to a fault, Kai Young has neither the time nor inclination for chaos―and Isabella, with her purple hair and inappropriate jokes, is chaos personified. With a crucial CEO vote looming and a media empire at stake, the billionaire heir can't afford the distraction she brings. Isabella is everything he shouldn't want, but with every look and every touch, he's tempted to break all his rules…and claim her as his own." },
        { id: "02", cover: quizRec02, title: "Part Of Your World", author: "Abby Jimenez",  rating: "4.5/5 stars", summary: "After a wild bet, gourmet grilled-cheese sandwich, and cuddle with a baby goat, Alexis Montgomery has had her world turned upside down. The cause: Daniel Grant, a ridiculously hot carpenter who’s ten years younger than her and as casual as they come—the complete opposite of sophisticated city-girl Alexis. And yet their chemistry is undeniable. While her ultra-wealthy parents want her to carry on the family legacy of world-renowned surgeons, Alexis doesn’t need glory or fame. She’s fine with being a “mere” ER doctor. And every minute she spends with Daniel and the tight-knit town where he lives, she’s discovering just what’s really important. Yet letting their relationship become anything more than a short-term fling would mean turning her back on her family and giving up the opportunity to help thousands of people. Bringing Daniel into her world is impossible, and yet she can’t just give up the joy she’s found with him either. With so many differences between them, how can Alexis possibly choose between her world and his?" },
        { id: "03", cover: quizRec03, title: "Bridesmaid for Hire", author: "Meghan Quinn",  rating: "4/5 stars", summary: " Sometimes the wedding of the century calls for desperate measures. And sometimes those desperate measures are to pretend the person you hate most is actually your boyfriend. After years of working her tail off at her event-planning business, Maggie Mitchell is ready for a vacation. With nothing on her mind but R & R, she’s enjoying the warm weather of Bora Bora when in saunters Brody McFadden, her brother’s best friend and also her sworn enemy. Thanks to years of tension between the two—kicked off by a make-out session at her brother’s wedding that ended horribly—Maggie has sworn to stay away from the man. That is, until she finds out he’s in Bora Bora for his boss’s daughter’s wedding, hoping to use the trip to win a real future at the company."},
        { id: "04", cover: quizRec04, title: "Happily Never After", author: "Lynn Painter",  rating: "4/5 stars", summary: "When Sophie Steinbeck finds out just before her nuptials that her fiancé has cheated yet again, she desperately wants to call it off. But because her future father-in-law is her dad’s cutthroat boss, she doesn’t want to be the one to do it. Her savior comes in the form of a professional objector, whose purpose is to show up at weddings and proclaim the words no couple (usually) wants to hear at their ceremony: “I object!” During anti-wedding festivities that night, Sophie learns more about Max the Objector’s job. It makes perfect sense to her: he saves people from wasting their lives, from hurting each other. He’s a modern-day hero. And Sophie wants in." },
        { id: "05", cover: quizRec05, title: "Hook, Line, and Sinker", author: "Tessa Bailey",  rating: "4.5/5 stars", summary: "King crab fisherman Fox Thornton has a reputation as a sexy, carefree flirt. Everyone knows he’s a guaranteed good time—in bed and out—and that’s exactly how he prefers it. Until he meets Hannah Bellinger. She’s immune to his charm and looks, but she seems to enjoy his… personality? And wants to be friends? Bizarre. But he likes her too much to risk a fling, so platonic pals it is. Now, Hannah's in town for work, crashing in Fox’s spare bedroom. She knows he’s a notorious ladies’ man, but they’re definitely just friends. In fact, she's nursing a hopeless crush on a colleague and Fox is just the person to help with her lackluster love life. Armed with a few tips from Westport’s resident Casanova, Hannah sets out to catch her coworker’s eye… yet the more time she spends with Fox, the more she wants him instead. As the line between friendship and flirtation begins to blur, Hannah can't deny she loves everything about Fox, but she refuses to be another notch on his bedpost. " },
        { id: "06", cover: quizRec06, title: "What I Should've Said", author: "Max Monroe",  rating: "4.5/5 stars", summary: "When grumpy, muscled-up artist Bennett Bishop bothers to speak, it’s usually to say something you’re not ready to hear. When he first speaks to Norah Ellis, a rambling runaway bride who hitchhikes a ride from him, it’s to tell her to get out of his truck and walk because she’s a pain in the a-s-s." },
        { id: "07", cover: quizRec07, title: "The Reunion", author: "Meghan Quinn",  rating: "4/5 stars", summary: "Martin and Peggy Chance believe love should last a lifetime. With their fiftieth wedding anniversary on the horizon, they’ve modeled a beautiful relationship for their three grown children. But to their dismay, that lesson hasn’t quite caught on—the three siblings just can’t seem to take a chance and find love in their own lives. There’s Ford, the eldest, devoted to his work and resistant to romance...or so he claims. Cooper, the middle child, can’t get past his divorce—until he reconnects with a feisty baker from his past. And Palmer, the baby of the family, is the free-spirited world traveler who always pictured herself with someone other than a handsome small-town family doctor. When the Chance siblings come together to plan the ultimate anniversary party for their parents, they’ll have to navigate romantic entanglements, sibling rivalries, and the definitive end of their childhood. " },
        { id: "08", cover: quizRec08, title: "A Lady's Guide to Fortune-Hunting", author: "Sophie Irwin",  rating: "4/5 stars", summary: "Kitty Talbot needs a fortune. Or rather, she needs a husband who has a fortune. Left with her father’s massive debts, she has only twelve weeks to save her family from ruin. Kitty has never been one to back down from a challenge, so she leaves home and heads toward the most dangerous battleground in all of England: the London season. Kitty may be neither accomplished nor especially genteel—but she is utterly single-minded; imbued with cunning and ingenuity, she knows that risk is just part of the game. The only thing she doesn’t anticipate is Lord Radcliffe. The worldly Radcliffe sees Kitty for the mercenary fortune-hunter that she really is and is determined to scotch her plans at all costs, until their parrying takes a completely different turn…." },
        { id: "09", cover: quizRec09, title: "Hate Mail", author: "Donna Marchetti",  rating: "4/5 stars", summary: "Naomi and Luca have been pen-pals since fifth-grade. Well, more like bitter rivals caught in an epic battle of insults and verbal jousting... But what starts as a hilarious chain of hate filled letters, slowly develops into a friendship spanning coasts and years. That is until one day, years later, when the letters suddenly stop. It's been two years since Naomi last heard from Luca. Two years since the letter that changed everything. But when a new envelope turns up out of the blue at her desk at the local news station, Naomi is determined not to let Luca have the final word." },
        { id: "10", cover: quizRec10, title: "The Things We Leave Unfinished", author: "Rebecca Yarros",  rating: "4.5/5 stars", summary: "Twenty-eight-year-old Georgia Stanton has to start over after she gave up almost everything in a brutal divorce―the New York house, the friends, and her pride. Now back home at her late great-grandmother’s estate in Colorado, she finds herself face-to-face with Noah Harrison, the bestselling author of a million books where the cover is always people nearly kissing. He’s just as arrogant in person as in interviews, and she’ll be damned if the good-looking writer of love stories thinks he’s the one to finish her grandmother’s final novel…even if the publisher swears he’s the perfect fit." },
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




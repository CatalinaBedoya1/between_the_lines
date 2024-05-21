import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import AboutUsHero from '../assets/bookgirlreading.png';
import CatGroup from '../assets/AboutUs/catgroup.png';
import FranGroup from '../assets/AboutUs/frangroup.png';
import MaddyGroup from '../assets/AboutUs/maddygroup.png';
import JustineGroup from '../assets/AboutUs/justinegroup.png';
import ReyaGroup from '../assets/AboutUs/reyagroup.png';
import RightArrow from '../assets/AboutUs/whitearrow.png';
import LogoStair from '../assets/AboutUs/aboutusicon.png';
import styled from 'styled-components';


// data array
const AboutUsData = [
  {
    image: CatGroup,
    name: "Catalina",
    founder: "Co-Founder",
    jobtitle: "Full Stack Developer",
    description: "When I’m not stressing over school, I love to grab a book and enter a different world. With the creation of Between The Lines, I hope more people can revisit this hobby in a fun, collaborative environment.",
  },
  {
    image: FranGroup,
    name: " Francesca",
    founder: "Co-Founder",
    jobtitle: "UX/UI and FrontEnd Developer",
    description: "After recently getting back into reading in the past two years, I’ve always been looking for new books to immerse myself into. My hope is that people will be able to connect with like-minded readers and share their mutual love for literature.",
  },
  {
    image: MaddyGroup,
    name: "Madeline",
    founder: "Co-Founder",
    jobtitle: "UX/UI and FrontEnd Developer",
    description: "I started this project because wanted to create a community that cherishes storytelling, adventure, and fantasy. I love reading about Greek myths and adventures that inspired wonder and imagination. ",
  },
  {
    image: JustineGroup,
    name: "Justine",
    founder: "Co-Founder",
    jobtitle: "FrontEnd Developer",
    description: "Freedom without any purpose feels a whole lot like boredom- Asano Ino. I am a big fan of graphic novels, Junji Ito and Inio Asano have my heart. I spend my free time playing videogames and making music.",
  },
  {
    image: ReyaGroup,
    name: "Reya",
    founder: "Co-Founder",
    jobtitle: "FrontEnd Developer",
    description: "I started this project to show my love for books and help others explore other worlds through pages. Personally, every time I fell in love with a book I wanted to find other similar kinds of books but finding those types were hard and there weren't any good recommendations places that would help me. P.S. don't ever judge a book by its cover!",
  },
];


const FlipCard = ({ image, name, founder, jobtitle, description}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return(
    <AboutUsCard>
      <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          flipSpeedBackToFront={2}
          flipSpeedFrontToBack={3}
        >  
            <FrontAboutUsCard
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={image} alt="pic"/>
              <AboutUsCardContent>
                <AboutUsName>
                <br></br>
                <h2>{name}</h2>
  
                </AboutUsName>
                <AboutUsTitle>
                <CoFounder>{founder}</CoFounder>
                <JobTitle>{jobtitle}</JobTitle>
                </AboutUsTitle>
              </AboutUsCardContent>
            </FrontAboutUsCard>

            <BackAboutUsCard
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <AboutUsCardContent2>
              <AboutUsName2>
                <h2>{name}</h2>
                <br></br>
                </AboutUsName2>
                <Quote>{description}</Quote>
              </AboutUsCardContent2>
            </BackAboutUsCard> 

      </ReactCardFlip>
    </AboutUsCard>
  )
}



function AboutUs() {
    return (
      <div>
    
        <AboutUsHeroContainer>
          <AboutUsHeroContent>
            <AHtitle>nice to meet you ...</AHtitle>
            <br></br>
            <AHdetails>We are a team of avid readers hoping to create a safe space to join communities, find recommendations, and meet other book enthusiasts. </AHdetails>
          </AboutUsHeroContent>
          <AboutUsHeroImg src={AboutUsHero} alt='About us hero pic'/>
          </AboutUsHeroContainer>


          <FeaturesContainer>
            <FeaturesCard>
              <LogoStaircase img src={LogoStair} alt="3 logo stacked"/>
              <FeatureContent>
              <h1>How we are different?</h1>
              <br></br>
              <h2>We offer public and private community book forums, <br></br>up to date events, curated book recommendations, <br></br>and free membership to a welcoming community of alike readers!</h2>
              </FeatureContent>
            </FeaturesCard>
          </FeaturesContainer>
    
          

          <AboutUsContainer>
            <AboutUsIntroCard>
              <h1>BRIDGING OUR LOVE FOR BOOKS AND COMMUNITY</h1>
              <br></br>
              <br></br>
              <IntroCardArrow>
              <h2>Check out the team</h2>
              <img src={RightArrow} alt="right arrow"/>
              </IntroCardArrow>
            </AboutUsIntroCard>


            {/* flip card array */}
            {AboutUsData.map((data, index) => (
              <FlipCard
                key={index}
                image={data.image}
                name={data.name}
                founder={data.founder}
                jobtitle={data.jobtitle}
                description={data.description}
              />
            ))}
          </AboutUsContainer>
      </div>
  )
}

export default AboutUs;


const AboutUsHeroContainer = styled.div`
  padding-top: 80px;
  position: relative;
  width: 100%;
  height: 500px;
  padding-top: 100px;
  padding-left: 50px;
  
  background-color: #3E2D70;
`;

const AboutUsHeroImg = styled.img`
  position: absolute;
  top: 30px;
  right: 80px;
  width: auto;
  height: 470px;
  object-fit: cover;
`;

const AboutUsHeroContent = styled.div`
  width: 800px;
  height: auto;
  font-size: 30px;
  color: white;      //font- color
  padding: 50px;

  //background-color: blue;
`;

  const AHtitle = styled.div`
  font-family: "Agbalumo", system-ui;
  font-weight: 400;
  font-style: normal;
    font-size: 45px;
  `;

  const AHdetails = styled.div`
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  `;

  const FeaturesContainer = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    padding-top: 100px;
    padding-left: 100px;
    justify-content:center;
    text-align:center;
    
  `;

  const FeaturesCard = styled.div`
    display: flex;
    flex-direction: row;
    width: 1300px;
    height: 300px;
    justify-content: space-between;
   
    //background-color:  green;
  `;

  const LogoStaircase =styled.img`
    width: auto;
    height: 300px
  
  `;

  const FeatureContent = styled.div`
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  color:#3E2D70;
    display: flex;
    flex-direction: column;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 50px;
    text-align: center;

    //background-color: red;
  `;


  const AboutUsContainer = styled.div`
  
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    padding-top: 10px;
    padding-left: 100px;
    padding-right: 100px;

    //background-color: blue;
  `;

  const AboutUsIntroCard = styled.div`
  font-family: "Agbalumo", system-ui;
  font-weight: 200;
  font-style: normal;
  font-size: 15px;
    border: 5px solid #4281A4;
    padding-top: 40px;
    padding-left: 50px;
    padding-right: 40px;
    width: 350px;
    height: 455px;
    color: white;    // font-color

    background-color:  #4281A4;
  `;

  const IntroCardArrow =styled.div`
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
    display: flex;
    flex-direction: row;
    //justify-content:space-around;
    text-align: left;
    padding-top: 50px;

    // background-color: green;

    img{
      padding-left: 30px;
      width: auto;
      height: 100%;
    }
  `;


  const AboutUsCard = styled.div`
    border: 5px solid #4281A4;  // doesnt show ;-;
    margin-bottom: 50px;

  `;

  const FrontAboutUsCard = styled.div`
    width: 340px;
    height: 440px;
    text-align: center;

    background-color: white;

    img{
      padding-left:20px;
      padding-top: 10px;
      padding-bottom: 10px;
      width: auto;
      height: 250px;
    }
  `;
  const AboutUsName =styled.div `
  font-family: "Agbalumo", system-ui;
  font-weight: 100;
  font-style: normal;
  color: #3E2D70;
  font-size: 20px;
  `;

  const AboutUsCardContent =styled.div `

    color: #4281A4;    
    //background-color: green;

  `;
  const AboutUsCardContent2 =styled.div `
  
  color: white;    
  //background-color: green;

`;

  const AboutUsTitle =styled.div`
  
    font-size: 40px;
    padding-top: 20px;
    //background-color: blue;
  `;
  const CoFounder = styled.div`
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
    font-size: 20px;
    padding-bottom:10px;
    //background-color:red;
  `;

  const JobTitle =styled.div`
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 18px;
  `;


  const BackAboutUsCard =styled.div`
    //border: 10px #9DBEBD;
    width: 340px;
    height: 440px;
    text-align: center;
    padding-top: 20px;

    background-color: #4281A4;
    font-color: white;
  `;

  const AboutUsName2 =styled.div `
  font-family: "Agbalumo", system-ui;
  font-weight: 100;
  font-style: normal;
  color: white
  margin-top: 30px;
  margin-bottom: -20px;
  font-size: 20px;
  `;
  const Quote = styled.div`
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  color: white;
    padding: 25px;
    font-size: 18px;
  `;












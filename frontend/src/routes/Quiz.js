import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import QuizBackgroundImg from '../assets/QuizBgImg.png';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';


const books = [
  //romance
  { 
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    length: 'Medium (300-500 pages)',
    pace: 'Moderate (3-4 days per book)',
    writingStyle: 'Descriptive and lyrical',
    characters: 'Relatable and everyday people',
    plot: 'Slow-burn and character-driven',
    settings: 'Rural and countryside',
    description: 'A classic romance novel featuring the strong-willed Elizabeth Bennet and the enigmatic Mr. Darcy.'
  },
  {
    title: 'Twisted Love',
    author: 'Ana Huang',
    genre: 'Romance',
    length: 'Medium (300-500 pages)',
    pace: 'Moderate (3-4 days per book)',
    writingStyle: 'Descriptive and engaging',
    characters: 'Complex and multidimensional',
    plot: 'Gripping and full of twists and turns',
    setting: 'Urban Landscape',
    description: 'Twisted Love” by Ana Huang is a contemporary romance novel and the first book in the ‘Twisted’ series. The narrative, set against the backdrop of four close friends – Ava, Bridget, Jules, and Stella, focuses primarily on the intense romance between Ava Chen and Alex Volkov. Their story is one of passion, facing the demons of their pasts, and the complex dynamics of love..'
   },
   {
   title: 'Twisted Games',
    author: 'Ana Huang',
    genre: 'Romance',
    length: 'Medium (300-500 pages)',
    pace: 'Fast (1-2 days per book)',
    writingStyle: 'Dialogue-heavy and conversational',
    characters: 'Complex and morally ambiguous',
    plot: 'Slow burn and character driven',
    settings: 'Urban and modern city',
    description: 'A contemporary royal bodyguard romance that follows Princess Bridget von Ascheburg and her bodyguard Rhy Larsen, as they navigate the challenges of duty and desire. As Bridget yearns for freedom and Rhys wrestles with his professional obligations, their forbidden attraction sparks a perilous dance between loyalty and longing. With political tensions mounting and their secrets threatening to unravel, they must confront the consequences of their illicit affair. This is book 2 in the Twisted Series, but may be read as a standalone.',
   },
   {
    title: 'Twisted Hate',
    author: 'Ana Huang',
    genre: 'Romance',
    length: 'Long (more than 500 pages)',
    pace: 'Moderate (3-4 days per book)',
    writingStyle: 'Dialogue-heavy and conversational',
    characters: 'Complex and morally ambiguous',
    plot: 'Slow burn and character driven',
    settings: 'Urban and modern city',
    description: 'The 3rd book in the Twisted Series follows future doctor Josh Chen and fiery redhead Jules Ambrose in a heated enemies-with-benefits arrangement, swearing off love. As their relationship deepens, they confront their pasts and must decide whether to embrace their unexpected connection or risk losing everything. This captivating tale explores passion, redemption, and the transformative power of love and can be read as a standalone.',
    },
   
   
   //Sci-fi
  {
    title: 'Steelheart',
    author: 'Brandon Sanderson',
    genre: 'Science fiction/ fantasy',
    length: 'Medium (300-500 pages)',
    pace: 'Moderate (3-4 days per book)',
    writingStyle: 'Concise and to the point',
    characters: 'Larger than life and heroic',
    plot: 'Fast-paced and action-packed',
    setting: 'Urban and modern city',
    description: 'An action-packed urban fantasy follows a group of rebels, the Reckoners, as they challenge the tyrannical rule of superpowered beings known as Epics.In their daring mission, they encounter danger, betrayal, and unexpected twists in their quest for justice and freedom.',
   },
   {
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science fictions',
    length: 'Long (more than 500 pages)',
    pace: 'Moderate (3-4 days per book)',
    writingStyle: 'Larger than life and heroic',
    characters: 'Comples and morally ambiguous',
    plot: 'Fast-paced and action-packed',
    settings: 'Futuristic',
    description: 'Set in a universe where noble houses vie for control of the desert planet Arrakis, which holds the key to the most valuable substance in the galaxy.'
   },

   //classics
   {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Classic Literature',
    length: 'Medium (300-500 pages)',
    pace: 'Moderate (3-4 days per book)',
    writingStyle: 'Evocative and atmospheric',
    characters: 'Complex',
    plot: 'Intricate and multi-generational, centered around themes of love, revenge, and redemption',
    setting: 'desolate moorland of Yorkshire, England',
    description: 'Wuthering Heights is a timeless classic that delves into the passionate and tumultuous relationships between the inhabitants of two neighboring houses, Wuthering Heights and Thrushcross Grange. The story unfolds through the eyes of the narrator, Mr. Lockwood, as he becomes entangled in the dark history of the Earnshaw and Linton families. Emily Brontës masterful prose and vivid depiction of the Yorkshire moors create an atmospheric backdrop for the intense emotions and moral conflicts that drive the narrative forward. Wuthering Heights explores themes of love, revenge, and the destructive power of obsession, leaving a lasting impact on readers with its haunting portrayal of human nature.'
   },
   {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic literature",
    length: "Medium (300-500 pages)",
    pace: "Moderate (3-4 days per book)",
    writingStyle: "Descriptive and lyrical",
    characters: "Complex and morally ambiguous",
    plot: "Intricate and multi-generational, centered around themes of love, wealth, and the American Dream",
    settings: "Urban and modern cities",
    description: "A timeless classic exploring themes of decadence, idealism, and the promise and disillusionment of the American Dream during the Roaring Twenties."
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic Literature",
    length: "Medium (300-500 pages)",
    pace: "Moderate (3-4 days per book)",
    writingStyle: "Descriptive and lyrical",
    characters: "Relatable and everyday people",
    plot: "A journey of self-discovery and personal growth",
    settings: "Rural and countryside",
    description: "A powerful and poignant exploration of racial injustice and moral growth in the American South, told through the eyes of young Scout Finch as she learns about empathy, compassion, and the complexities of human nature."
  },
   //mystery
   { 
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    genre: 'Mystery/Thriller',
    length: 'Medium (300-500 pages)',
    pace: 'Moderate (3-4 days per book)',
    writingStyle: 'Twisty and full of surprise',
    characters: 'Complex and morally ambiguous',
    plot: 'Twisty and full of surprise',
    settings: 'Urban and modern cities',
    description: 'A gripping psychological thriller about a woman who disappears on her fifth wedding anniversary.'
  },
  {
  title: 'The Silent Patient',
  author: 'Alex Michaelides',
  genre: 'Mystery/Thriller',
  length: 'Medium (300-500 pages)',
  pace: 'Moderate (3-4 days per book)',
  writingStyle: 'Descriptive and lyrical',
  characters: 'Complex and morally ambiguous',
  plot: 'Twisty and full of surprise',
  settings: 'Urban and modern city',
  description: 'A gripping psychological thriller that follows the story of Alicia Berenson, a talented artist who inexplicably murders her husband and then stops speaking. Confined to a psychiatric facility, she becomes the obsession of Theo Faber, a psychotherapist determined to unravel the mystery behind her silence. Theo delves deeper into Alicias past and psyche, he uncovers shocking secrets that force him to confront his own demons.', 
  },
  {
    title: 'The Girl on the Train',
    author: 'Paula Hawkins',
    genre: 'Mystery/Thriller',
    length: 'Medium (300-500 pages)',
    pace: 'Fast (1-2 days per book)',
    writingStyle: 'Descriptive and lyrical',
    characters: 'Complex and morally ambiguous',
    plot: 'Twisty and full of surprises',
    settings: 'Urban and modern cities',
    description: 'This gripping psychological thriller follows Rachel, an alcoholic divorcee who becomes entangled in a missing person investigation, unraveling dark secrets and uncovering shocking truths as she rides the train through the suburbs of London.'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    genre: 'Yystery/Thriller',
    length: 'Medium (300-500 pages)',
    pace: 'Fast (1-2 days per book)',
    writingStyle: 'Descriptive and lyrical',
    characters: 'Domplex and morally ambiguous',
    plot: 'Twisty and full of surprises',
    settings: 'Urban and modern cities',
    description: 'A captivating mystery thriller that follows symbologist Robert Langdon as he unravels ancient secrets and uncovers hidden truths while on a quest to solve a murder mystery.',
  },

  //Memoir
  {
    title: 'Finding Me',
    author: 'Viola Davis',
    genre: 'Biography/Memoir',
    length: 'Medium (300-500 pages)',
    pace: 'Moderate (3-4 days per book)',
    writingStyle: 'Descriptive and lyrical',
    characters: 'Relatable and everyday people',
    plot: 'A journey of self-discovery and personal growth',
    settings: 'One or more of the above',
    description: "This memoir follows Viola Davis journey as she reflects on her life's challenges and shares the truth of reinventing our narratives to fit into a competitive and judgmental society. From humble beginnings to her success in the limelight, it's a raw story of resilience, hard work, and inspiration that illustrates the struggles and triumphs of finding oneself.", 
  },
  {
    title: 'Thicker than Water',
    author: 'Kerry Washington',
    genre: 'Biography/Memoir',
    length: 'Medium (300-500 pages)',
    pace: 'Moderate (3-4 days per book)',
    writingStyle: 'Descriptive and lyrical',
    characters: 'Relatable and everyday people',
    plot: 'A journey of self-discovery and personal growth',
    settings: 'One or more of the above',
    description: "Kerry Washington's life took a drastic turn when she received a text that shattered her identity. Her memoir offers readers a deeply personal account of her journey, revealing her roles as a mother, daughter, wife, artist, and advocate. From childhood traumas to stardom and political advocacy, Washington shares the challenges she faced and the mentors who guided her. Through her candid narrative, she invites others to explore their own identities and find a deeper sense of belonging.",
  },
  {
    title: "I'm Glad My Mom Died",
    author: 'Jennette McCurdy',
    genre: 'Biography/Memoir',
    length: 'Medium (300-500 pages)',
    pace: 'Slow (1-2 weeks per book)',
    writingStyle: 'Concise and to the point',
    characters: 'Relatable and everyday people',
    plot: 'A journey of self-discovery and personal growth',
    settings: 'One or more of the above',
    description: "Jennette McCurdy's memoir details her tumultuous journey from child actress to fame and the personal struggles that accompanied it. From her mother's relentless pursuit of stardom to the pressures of maintaining a public image, she shares the raw and unfiltered reality behind the glitz and glamour. Battling eating disorders, addiction, and unhealthy relationships, she grapples with anxiety and self-loathing amidst the spotlight. Tragically, her mother's passing only exacerbates these issues, leading McCurdy to a breaking point. Yet, through therapy and self-discovery, she finds the courage to forge her own path and prioritize her well-being.",

  },
  //Historical Fiction
  {
    title: 'Nightingale',
    author: 'Kristen Hannah',
    genre: 'Historical Fiction',
    length: 'Long (more than 500 pages)',
    pace: 'Fast (1-2 days per book)',
    settings: 'Historical periods and settings',
    writingStyle: 'Descriptive and lyrical',
    characters: 'Complex and morally ambiguous',
    plot: 'Slow-burn and character-driven',
    description: 'Follows the story of two sisters navigating love, loss, and survival during the German occupation of France.',
  },
  {
    title: "All the Light We Cannot See",
    author: "Anthony Doerr",
    genre: "Historical Fiction",
    length: "Long (more than 500 pages)",
    pace: "Moderate (3-4 days per book)",
    writingStyle: "Descriptive and lyrical",
    characters: "Relatable and everyday people",
    plot: "Slow-burn and character-driven",
    settings: "Historical periods and settings",
    description: "Set during World War II, the novel follows a blind French girl and a German boy whose paths eventually intersect as they navigate the chaos and devastation of war."
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    genre: "Historical Fiction",
    length: "Long (more than 500 pages)",
    pace: "Moderate (3-4 days per book)",
    writingStyle: "Descriptive and lyrical",
    characters: "Relatable and everyday people",
    plot: "Slow-burn and character-driven",
    settings: "Historical periods and settings",
    description: "Narrated by Death, The Book Thief is set in Nazi Germany and tells the story of Liesel Meminger, a young girl fostered by a German family during World War II, and her love affair with books."
  },
  {
    title: "The Pillars of the Earth",
    author: "Ken Follett",
    genre: "Historical Fiction",
    length: "Long (more than 500 pages)",
    pace: "Moderate (3-4 days per book)",
    writingStyle: "Descriptive and lyrical",
    characters: "Relatable and everyday people",
    plot: "Slow-burn and character-driven",
    settings: "Historical periods and settings",
    description: "Set in 12th-century England, The Pillars of the Earth follows the construction of a cathedral in the fictional town of Kingsbridge and the lives of the people involved in its creation."
  },
  {
    title: "The Guernsey Literary and Potato Peel Pie Society",
    author: "Mary Ann Shaffer and Annie Barrows",
    genre: "Historical Fiction",
    length: "Medium (300-500 pages)",
    pace: "Moderate (3-4 days per book)",
    writingStyle: "Descriptive and lyrical",
    characters: "Relatable and everyday people",
    plot: "Slow-burn and character-driven",
    settings: "Historical periods and settings",
    description: "Set in the aftermath of World War II, The Guernsey Literary and Potato Peel Pie Society is an epistolary novel that tells the story of a writer who corresponds with members of a literary society on the island of Guernsey."
  },
  {
    title: "Outlander",
    author: "Diana Gabaldon",
    genre: "Historical Fiction",
    length: "Long (more than 500 pages)",
    pace: "Moderate (3-4 days per book)",
    writingStyle: "Descriptive and lyrical",
    characters: "Relatable and everyday people",
    plot: "Slow-burn and character-driven",
    settings: "Historical periods and settings",
    description: "Outlander follows the story of Claire Randall, a married former combat nurse from 1945 who is mysteriously transported back in time to 1743 Scotland, where she becomes involved in the Jacobite risings."
  },
  //Fantasy
  {
    title: 'The Night Circus',
    author: 'Erin Morgenstern',
    genre: 'Fantasy',
    length: 'Medium (300-500 pages)',
    pace: 'Slow (1-2 weeks per book)',
    writingStyle: 'Descriptive and lyrical',
    characters: 'Relatable and everyday people',
    plot: 'A journey of self-discovery and personal growth',
    settings: 'One or more of the above',
    description: 'In this enchanting fantasy novel, a magical competition unfolds between two young illusionists, Celia and Marco, within the confines of the mysterious Le Cirque des Rêves, blending reality and illusion in a spectacle of wonder and romance.'
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    length: "Medium (300-500 pages)",
    pace: "Moderate (3-4 days per book)",
    writingStyle: "Descriptive and lyrical",
    characters: "Larger-than-life and heroic",
    plot: "A journey of self-discovery and personal growth",
    settings: "Rural and countryside",
    description: "A classic fantasy adventure that follows the journey of Bilbo Baggins, a hobbit who is swept into an epic quest to reclaim the lost kingdom of Erebor from the dragon Smaug."
  },
  {
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    genre: "Fantasy",
    length: "Long (more than 500 pages)",
    pace: "Moderate (3-4 days per book)",
    writingStyle: "Descriptive and lyrical",
    characters: "Complex and morally ambiguous",
    plot: "Fast-paced and action-packed",
    settings: "Urban and modern cities",
    description: "The first installment in the Mistborn trilogy, set in a world where the tyrannical Lord Ruler reigns over the Final Empire, and follows a group of rebels with magical abilities who seek to overthrow him."
  },
  {
    title: "The Lies of Locke Lamora",
    author: "Scott Lynch",
    genre: "Fantasy",
    length: "Medium (300-500 pages)",
    pace: "Fast-paced and action-packed",
    writingStyle: "Descriptive and lyrical",
    characters: "Complex and morally ambiguous",
    plot: "Twisty and full of surprises",
    settings: "Urban and modern cities",
    description: "The first book in the Gentleman Bastard series, set in the city of Camorr and follows the exploits of master thief Locke Lamora and his crew as they navigate the criminal underworld."
  },
  {
    title: "The Poppy War",
    author: "R.F. Kuang",
    genre: "Fantasy",
    length: "Medium (300-500 pages)",
    pace: "Fast-paced and action-packed",
    writingStyle: "Descriptive and lyrical",
    characters: "Complex and morally ambiguous",
    plot: "Twisty and full of surprises",
    settings: "Urban and modern cities",
    description: "Set in a world inspired by Chinese history and mythology, The Poppy War follows Rin, a young orphan from a poor village, as she discovers her shamanic powers and becomes embroiled in a brutal war between nations."
  },
  {
    title: "Throne of Glass",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    length: "Long (more than 500 pages)",
    pace: "Fast-paced and action-packed",
    writingStyle: "Descriptive and lyrical",
    characters: "Larger-than-life and heroic",
    plot: "Twisty and full of surprises",
    settings: "Urban and modern cities",
    description: "Follow assassin Celaena Sardothien as she competes in a deadly tournament to win her freedom, only to become entangled in a web of political intrigue and supernatural threats that could change the fate of her world."
  },
  
  //Non-fiction
  {
    title: 'Educated',
    author: 'Tara Westover',
    genre: 'Non-Fiction',
    length: 'Medium (300-500 pages)',
    pace: 'Moderate (3-4 days per book)',
    writingStyle: 'Descriptive and lyrical',
    characters: 'Relatable and everyday people',
    plot: 'A journey of self-discovery and personal growth',
    settings: 'One or more of the above',
    description: "This powerful memoir recounts Tara Westover's extraordinary journey from her isolated upbringing in a strict Mormon family in rural Idaho to her quest for knowledge and education, overcoming obstacles and forging her own path to independence and enlightenment."
  },

  //Contemporary Fiction
  {
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    genre: 'Contemporary Fiction',
    length: 'Medium (300-500 pages)',
    pace: 'Moderate (3-4 days per book)',
    writingStyle: 'Descriptive and lyrical',
    characters: 'Complex and morally ambiguous',
    plot: 'Twisty and full of surprise',
    settings: 'Rural and countryside',
    description: 'This atmospheric novel follows the life of Kya Clark, known as the "Marsh Girl," who grows up isolated in the marshes of North Carolina. When a young man is found dead, the town suspects her, leading to a captivating exploration of love, loneliness, and the beauty of nature.'

  },
  {
    title: 'Normal People',
    author: 'Sally Rooney',
    genre: 'Contemporary Fiction',
    length: 'Medium (300-500 pages)',
    pace: 'Moderate (3-4 days per book)',
    writingStyle: 'Dialogue-heavy and conversational',
    characters: 'Relatable and everyday people',
    plot: 'Slow-burn and character-driven',
    settings:'Urban and modern cities',
    description: 'Follow the complex relationship between Connell and Marianne as they navigate love, friendship, and social dynamics from high school to university. Through intimate prose and authentic dialogue, the novel delves into the intricacies of human connection and the impact of social class.'
  },
  {
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    genre: 'Contemporary Fiction',
    length: 'Medium (300-500 pages)',
    pace: 'Moderate (3-4 days per book)',
    writingStyle: 'Descriptive and lyrical',
    characters: 'Larger-than-life and heroic',
    plot: 'Twisty and full of surprises',
    settings: 'Urban and modern cities',
    description: 'Dive into the captivating life story of legendary film icon Evelyn Hugo as she reveals her secrets to an unknown journalist. Through tales of love, ambition, and sacrifice, the novel explores themes of identity, authenticity, and the price of fame.'
  },
  {
    title: 'Little Fires Everywhere',
    author: 'Celeste Ng',
    genre: 'Contemporary Fiction',
    length: 'Medium (300-500 pages)',
    pace: 'Moderate (3-4 days per book)',
    writingStyle: 'Descriptive and lyrical',
    characters: 'Complex and morally ambiguous',
    plot: 'Slow-burn and character-driven',
    settings: 'Rural and countryside',
    description: 'In the picture-perfect suburb of Shaker Heights, the lives of two families become intertwined in unexpected ways when an artist and her daughter move into the neighborhood. As secrets unravel and tensions rise, the novel explores themes of motherhood, identity, and the weight of choices.'
  },

  //Horror
{
  title: 'Mexican Gothic',
  author: 'Silvia Moreno-Garcia',
  genre: 'Horror',
  length: 'Medium (300-500 pages)',
  pace: 'Fast (1-2 days per book)',
  writingStyle: 'Descriptive and lyrical',
  characters: 'Complex and morally ambiguous',
  plot: 'Twisty and full of surprise',
  settings: 'Rural and countryside',
  description: "Set in 1950s Mexico, 'Mexican Gothic' follows socialite Noemí Taboada as she investigates strange occurrences in a remote mansion where her cousin resides. With elements of horror and psychological suspense, this atmospheric novel explores themes of family secrets, colonialism, and the supernatural."
},
{
  title: "The Shining",
  author: "Stephen King",
  genre: "Horror",
  length: "Medium (300-500 pages)",
  pace: "Moderate (3-4 days per book)",
  writingStyle: "Descriptive and lyrical",
  characters: "Complex and morally ambiguous",
  plot: "Twisty and full of surprises",
  settings: "Rural and countryside",
  description: "Stephen King's iconic horror novel follows the Torrance family as they become the winter caretakers of the Overlook Hotel, where supernatural forces drive the father, Jack, to madness."
},
{
  title: "The Haunting of Hill House",
  author: "Shirley Jackson",
  genre: "Horror",
  length: "Short (less than 300 pages)",
  pace: "Moderate (3-4 days per book)",
  writingStyle: "Descriptive and lyrical",
  characters: "Complex and morally ambiguous",
  plot: "Twisty and full of surprises",
  settings: "Rural and countryside",
  description: "Dr. John Montague invites several individuals with paranormal experiences to stay at Hill House, where strange occurrences begin to escalate, blurring the lines between reality and madness."
},
{
  title: "House of Leaves",
  author: "Mark Z. Danielewski",
  genre: "Horror",
  length: "Long (more than 500 pages)",
  pace: "Slow (1-2 weeks per book)",
  writingStyle: "Complex and experimental",
  characters: "Complex and morally ambiguous",
  plot: "Twisty and full of surprises",
  settings: "Urban and modern cities",
  description: "House of Leaves is a complex and experimental novel that blurs the lines between reality and fiction. It tells the story of a young family who moves into a house with ever-changing dimensions, leading to madness and obsession."
},
  
];

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;


const Container = styled.div`
padding-top: 80px;
  max-width: auto;
  height: 800px; /* Set height to fill the viewport */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${QuizBackgroundImg}); // Set background image
  background-size: cover;
  background-position: center;
`;
const QuestionContainer = styled.div`
  animation: ${slideIn} 0.5s ease forwards;
  opacity: 0;
  margin-bottom: 10px;
  width: 1090px;
  height: auto;
  
  border: 3px solid #DDBFB5;
  border-radius: 30px;
  background-color: #f9f9f9;

  &.active {
    opacity: 1;
  }
`;
const QuestionText = styled.h2`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
color: #3E2D70;
text-align: center;
margin-top: 50px;
font-size: 40px;
  
`;
const Line = styled.hr`
  position: absolute; /* Position the line */
  margin-top: 30px;
  left: 50%; /* Center the line */
  transform: translateX(-50%); /* Center the line */
  width: 80%; /* Set the width */
  border: none;
  border-top: 5px solid #DDBFB5; /* Style the line */
`;

const AnswerContainer = styled.div`

  margin: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 80px;
  padding: 20px 5px;
  
`;
const AnswerButton = styled.button`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
color: #3E2D70;
  margin:10px;
  padding: 15px 30px;
  font-size: 20px;
  background: #FFF;
  color: #3E2D70;
  border: 2px solid #000;
  cursor: pointer;
  border-radius: 20px;
  
  transition: background-color 0.3s, color 0.3s;
  flex: 0 0 calc(33.33% - 20px);


  &:hover {
    background: #F68AAF;
    color: #3E2D70;
  }

  &.selected {
    background: #000;
    color: #FFF;
  }
`;




const QuestionCounter = styled.div`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
color: #3E2D70;
  text-align: center;
  margin-bottom: 20px;
`


const BookResultsContainer = styled.div`
  width: 1000px;
  height: 630px;
  padding: 10px;
  border: 5px solid #DDBFB5;
  border-radius: 30px;
  background-color: #f9f9f9;
`;
const BookResultsTitle = styled.h2`
font-family: "Agbalumo", system-ui;
font-weight: 400;
font-style: normal;
color: #3E2D70;
  text-align: center;
  font-size: 45px;
  margin-top: 10px;
`
const BookInfoContainer = styled.div`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
color: #3E2D70;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const BookCover = styled.img`
  width: 250px;
  height: 280px
  margin-top: 40px;
  
`;



const BookTitle = styled.h3`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
color: #3E2D70;
  font-size: 25px;
  bold-weight: Normal;
  margin-top: 15px;
`;
const BookAuthor = styled.p`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
color: #3E2D70;
  font-size: 16px;
  bold-weight: Lighter
  margin-top: 10px; /* Remove default margin */
`;
const DoneButton = styled.button`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
color: #3E2D70;
margin-top: 20px;
  padding: 10px 60px;
  font-size: 24px;
  background: linear-gradient(230.28deg, #ddbfb5, #5397ac);
  color: white;
  border: none;
  border: 4px solid #FFF;
  border-radius: 40px;
  cursor: pointer;
`;
const ResultsLine = styled.hr`
  position: absolute; /* Position the line */
  margin-top: 5px;
  left: 50%; /* Center the line */
  transform: translateX(-50%); /* Center the line */
  width: 50%; /* Set the width */
  border: none;
  border-top: 5px solid #DDBFB5; /* Style the line */
`;

// State to store user answers
// Function to handle user's answer selection
// Function to calculate book recommendations based on user answers
// Filter books based on user's answers
const questionOptions = [
  ["Mystery/Thriller", "Romance", "Science Fiction", "Historical Fiction","Fantasy", "Non-fiction", "Biography/Memoir", "Horror", "Contemporary Fiction", "Classic Literature"],
  ["Short (less than 300 pages)", "Medium (300-500 pages)", "Long (more than 500 pages)"],
  ["Slow (1-2 weeks per book)", "Moderate (3-4 days per book)", "Fast (1-2 days per book)"],
  ["Descriptive and lyrical", "Concise and to the point", "Dialogue-heavy and conversational"],
  ["Complex and morally ambiguous", "Relatable and everyday people", "Larger-than-life and heroic"],
  ["Twisty and full of surprise", "Slow-burn and character-driven", "Fast-paced and action-packed", "A journey of self-discovery and personal growth"],
  ["Urban and modern cities","Rural and countryside","Historical periods and settings","Futuristic","One or more of the above"]
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  

  const handleAnswerSelect = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (currentQuestion < 6) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const recommendations = getBookRecommendations();
      setRecommendedBooks(recommendations);
      setShowResults(true);
      setShowConfetti(true); 
    }
  };
  

  const fetchBookCovers = useCallback(async () => {
    const booksWithCovers = await Promise.all(recommendedBooks.map(async (book) => {
      const coverUrl = await fetchBookCover(book.title);
      return { ...book, coverUrl };
    }));
    setRecommendedBooks(booksWithCovers);
  }, [recommendedBooks]);

  useEffect(() => {
    if (showResults && !recommendedBooks.every(book => book.coverUrl)) {
      fetchBookCovers();
    }
  }, [showResults, recommendedBooks, fetchBookCovers]);
  

  const fetchBookCover = async (bookTitle) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(bookTitle)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch book cover');
      }
      const data = await response.json();
      const bookData = data.items?.[0];
      if (bookData && bookData.volumeInfo && bookData.volumeInfo.imageLinks) {
        return bookData.volumeInfo.imageLinks.thumbnail;
      }
    } catch (error) {
      console.error('Error fetching book cover:', error);
    }
  };

  

  const getBookRecommendations = () => {
    let filteredBooks = books;

    // this is the filter function but might need to ask Prof for a better way
    for (let questionId in answers) {
      const answer = answers[questionId];
      switch (parseInt(questionId)) {
        case 0: // Genre
          filteredBooks = filteredBooks.filter(book => book.genre === answer);
          break;
        case 1: // Length
          filteredBooks = filteredBooks.filter(book => book.length === answer);
          break;
        case 2: // Pace
          filteredBooks = filteredBooks.filter(book => book.pace === answer);
          break;
        case 3: // Writing Style
          filteredBooks = filteredBooks.filter(book => book.writingStyle === answer);
          break;
        case 4: // Characters
          filteredBooks = filteredBooks.filter(book => book.characters === answer);
          break;
        case 5: // Plot
          filteredBooks = filteredBooks.filter(book => book.plot === answer);
          break;
        case 6: // Settings
          filteredBooks = filteredBooks.filter(book => book.settings.includes(answer));
          break;
        default:
          break;
      }
      console.log(`Filtered books after question ${questionId}:`, filteredBooks);
    }

    // Return filtered books, or return a random book if no match found
    return filteredBooks.length > 0 ? filteredBooks : [books[Math.floor(Math.random() * books.length)]];
  };

  const renderQuestion = () => {
    const questionText = [
      "What genre of books do you prefer?",
      "How long do you prefer your books to be?",
      "How fast do you typically read?",
      "What type of writing style do you enjoy?",
      "What kind of characters do you prefer?",
      "What type of plot do you find most engaging?",
      "What settings do you prefer in books?"
    ];

    const renderQuestionCounter = () => {
      return (
        <QuestionCounter>
          Question {currentQuestion + 1} out of {questionOptions.length}
        </QuestionCounter>
      );
    };

    return (
      <QuestionContainer>
        <QuestionText>{questionText[currentQuestion]}</QuestionText>
        <Line />
        <AnswerContainer>
          {questionOptions[currentQuestion].map(option => (
            <AnswerButton
              key={option}
              onClick={() => handleAnswerSelect(option)}
              className={answers[currentQuestion] === option ? 'selected' : ''}
            >
              {option}
            </AnswerButton>
          ))}
        </AnswerContainer>
        {renderQuestionCounter()}
      </QuestionContainer>
    );
  };

  const renderBookRecommendations = () => {
    
    return (
      <div>
        <BookResultsContainer>
        <BookResultsTitle>Our Recommendation</BookResultsTitle>
        <ResultsLine />
        {recommendedBooks.map(book => (
          <div key={book.title}>
            <BookInfoContainer>
              <div>
              <BookTitle>{book.title}</BookTitle>
              <BookAuthor>By {book.author}</BookAuthor>
              </div>
              
              <BookCover src={book.coverUrl} alt="Book Cover" />
              <Link to="/discover/TakeOurQuiz">
                <DoneButton>Done</DoneButton>
              </Link>
            </BookInfoContainer>
            
          </div>
        ))}
        </BookResultsContainer>
      </div>
    );
  };
  

  
  return (
    <Container>
      {!showResults && renderQuestion()}
      {showResults && renderBookRecommendations()}
      {showConfetti && <Confetti />}
      
    </Container>
  );
};

export default Quiz;
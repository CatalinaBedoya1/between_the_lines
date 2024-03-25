import React from 'react'
import '../App.css';
import catalina from '../assets/cat character.png';
import francesca from '../assets/fran character.png';
import reya from '../assets/reya character.png';
import madeline from '../assets/maddy character.png';
import justine from '../assets/justin character.png';

import './AboutUsBody.css';

function AboutUsBody() {
    return (
    <><div class="fullCard">
            <div class="pContainer">
                <div class="text">
                    <h1>Catalina</h1>
                    <br></br>
                    <h3>When I’m not stressing over school, I love to grab a book and enter a different world. With the creation of Between The Lines, I hope more people can revisit this hobby in a fun, collaborative environment.</h3>
                </div>
                <div class="image">
                    <img src={catalina} alt="Catalina" className="char-image" />
                </div>
            </div>
        </div>
        
        <div class="fullCard">
                <div class="pContainer">
                    <div class="text">
                        <h1>Francesca</h1>
                        <br></br>
                        <h3>After recently getting back into reading in the past two years, I’ve always been looking for new books to immerse myself into. My hope is that people will be able to connect with like-minded readers and share their mutual love for literature.</h3>
                    </div>
                    <div class="image">
                        <img src={francesca} alt="Francesca" className="char-image" />
                    </div>
                </div>
            </div>

            <div class="fullCard">
                <div class="pContainer">
                    <div class="text">
                        <h1>Reya</h1>
                        <br></br>
                        <h3>I started this project to show my love for books and help others explore other worlds through pages. Personally, every time I fell in love with a book I wanted to find other similar kinds of books but finding those types were hard and there weren't any good recommendations places that would help me. 
P.S. don't ever judge a book by its cover!</h3>
                    </div>
                    <div class="image">
                        <img src={reya} alt="Reya" className="char-image" />
                    </div>
                </div>
            </div>
            
            
            <div class="fullCard">
                <div class="pContainer">
                    <div class="text">
                        <h1>Madeline</h1>
                        <br></br>
                        <h3>I started this project because wanted to create a community that cherishes storytelling, adventure, and fantasy. I love reading about Greek myths and adventures that inspired wonder and imagination. </h3>
                    </div>
                    <div class="image">
                        <img src={madeline} alt="Madeline" className="char-image" />
                    </div>
                </div>
            </div>

            
            <div class="fullCard">
                <div class="pContainer">
                    <div class="text">
                        <h1>Justine</h1>
                        <br></br>
                        <h3>
“Freedom without any purpose feels a whole lot like boredom.”― ASANO INIO
I’m a big fan of graphic novels, Junji Ito and Inio Asano have my heart. I spend my free time playing videogames and making music. </h3>
                    </div>
                    <div class="image">
                        <img src={justine} alt="Justine" className="char-image" />
                    </div>
                </div>
            </div>
            
            
            
            
            
            
            </>
    



);
}

  

export default AboutUsBody
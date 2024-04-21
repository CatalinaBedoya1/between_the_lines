import React from 'react';
import './BookDetails.css';
import CreatePost from '../components/CreatePost';
import myImage3 from '../assets/BOTM_GROUP2.png';
import myImage2 from '../assets/ifyoucouldseethesun.png';
import bd1 from '../assets/bd1.png';
import bd2 from '../assets/bd2.png';
import bd3 from '../assets/bd3.png';



function BookDetails() {
    return(
        <>
        <div className="BD-container">
            <img src={myImage3} alt="Book of the month cover" className="BD-imageZoom" />
       
            <div className="BD-content">
                <h1>BOOK OF THE MONTH</h1>
                <h2>If You Could See the Sun</h2>
                <h3>Ann Liang</h3>
                <hr className="BD-divider" />

                <img src={myImage2} alt="BD cover" className="BD-image" />
                <div className="WTRBtn">Want to Read</div>
                <div className="BD-info">
                    <p>352 pages</p>
                    <p>Published: Oct. 11, 2022</p>
                    <p>ISBN: 9781335915849</p>
                <img src={bd1} alt="BD cover" className="BD-icon" />
                <img src={bd2} alt="BD cover" className="BD-icon" />
                <img src={bd3} alt="BD cover" className="BD-icon" />


                </div>

            </div>
        </div>   

            <div className = "BD-description">
                <p>Alice Sun has always felt invisible at her elite Beijing international boarding school, where she’s the only scholarship student among China’s most rich and influential teens. But then she starts uncontrollably turning invisible—actually invisible. </p>
                <p>When her parents drop the news that they can no longer afford her tuition, even with the scholarship, Alice hatches a plan to monetize her strange new power—she’ll discover the scandalous secrets her classmates want to know, for a price.</p>
                <p>But as the tasks escalate from petty scandals to actual crimes, Alice must decide if it’s worth losing her conscience—or even her life.</p>
                <p>In this genre-bending YA debut, a Chinese American girl monetizes her strange new invisibility powers by discovering and selling her wealthy classmates’ most scandalous secrets.</p>

            </div>

       
       
       
       
        <CreatePost />
        </>

    );
}

export default BookDetails;
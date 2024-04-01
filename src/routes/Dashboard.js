import React from 'react';
import './Dashboard.css';
// import DashCards from "../components/CurrentReadingandBCF";
import DashboardRecs from "../components/DashboardRecs";
import QuizRecs from "../components/QuizResults";
import DashIcon from "../assets/dashboardicon.png";
import CurrentReading from "../assets/dashboard.png";



function Dashboard() {
    return (
        <div className="dashboard">
            <img src={DashIcon} alt="DashboardIcon" className="Dashboard-Icon" />
            <div className = "bio">
                <h1> Jane Doe</h1>
                <h2>Joined March 2024</h2>
                <p> 24 | Constantly lost in fictional worlds | Avid Romance Reader </p>
            </div>
            <div className="editbutton">Edit Profile</div>


            {/*current reading and book clubs static*/}
            <div className="currentreading">
            <img src={CurrentReading} alt="currentreading" className="currentreading-static" />
            </div>

            {/*ignore my wip XD*/}
            {/* <DashCards/> */}


        
            <DashboardRecs/>
            
            
            <div className = "topgenres">
                <p>My Top Genres:</p>
                <div className = "topgenre1">Fiction</div>
                <div className = "topgenre2">Romance</div>
                <div className = "topgenre3">Thriller</div>
                <div className = "topgenre4">Historical Fiction</div>
                <div className = "topgenre5">Fantasy</div>
            </div>


            <div className="quizResult">
                <br></br>
                <div className="quizresultheader">
                    <p>My recommened Books ...</p>
                </div> 
                <QuizRecs />
            </div>

        </div>
    );
}

export default Dashboard;

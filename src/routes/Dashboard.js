import React from 'react';
import './Dashboard.css';
import DashboardRecs from "../components/DashboardRecs";
import QuizRecs from "../components/QuizResults";
import DashIcon from "../assets/dashboardicon.png";



function Dashboard() {
    return (
        <div className="dashboard">
            <img src={DashIcon} alt="DashboardIcon" className="Dashboard-Icon" />
            <div className = "bio">
                <h1> Jane Doe</h1>
                <h2>Joined March 2024</h2>
                <p> 24 | Constantly lost in fictional worlds | Avid Romance Reader </p>
            </div>
            <div className = "topgenres">
                <p>My Top Genres:</p>
                <div className = "topgenre1">Fiction</div>
                <div className = "topgenre2">Romance</div>
                <div className = "topgenre3">Thriller</div>
                <div className = "topgenre4">Historical Fiction</div>
                <div className = "topgenre5">Fantasy</div>
            </div>
            <QuizRecs />
            <h1>Dashboard</h1>

            {/*insert profile*/}

            <div className="dashcards">
                <div className="current">

                </div>

                <div className="bookforums">

                </div>
            </div>


            <DashboardRecs />

            {/*insert top genres*/}
            <div className="quizResult">
                <div className="quizresultheader">
                    <p>My recommened Books ...</p>
                </div> 
                <QuizRecs />
            </div>

        </div>
    );
}

export default Dashboard;
import React from 'react';
import './Dashboard.css';
import DashboardRecs from "../components/DashboardRecs";
import QuizRecs from "../components/QuizResults";



function Dashboard() {
    return (
        <div className="dashboard">
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
import React from 'react';
import './Dashboard.css';
import QuizRecs from "../components/QuizResults";



function Dashboard() {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className = "topgenres">
                <p>My Top Genres:</p>
                <div className = "topgenre1">Fiction</div>
                <div className = "topgenre2">Romance</div>
                <div className = "topgenre3">Thriller</div>
                <div className = "topgenre4">Historical Fiction</div>
                <div className = "topgenre5">Fantasy</div>
            </div>
            <QuizRecs />

        </div>
    );
}

export default Dashboard;
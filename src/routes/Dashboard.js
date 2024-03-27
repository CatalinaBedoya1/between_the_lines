import React from 'react';
import './Dashboard.css';
import QuizRecs from "../components/QuizResults";



function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p>My Top Genres</p>
            <QuizRecs />

        </div>
    );
}

export default Dashboard;
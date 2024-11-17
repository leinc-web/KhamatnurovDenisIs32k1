import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-content">
                <h1>Welcome to Discord Clone</h1>
                <p>Connect with your friends, communities, and meet new people.</p>
                <Link to="/login">
                    <button className="homepage-button">Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;

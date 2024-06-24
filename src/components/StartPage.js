import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
    const navigate = useNavigate();

    const startGame = () => {
        navigate('/city-selection');
    };

    return (
        <div>
            <h1>Welcome to Fugitive Capture</h1>
            <button onClick={startGame}>Start Game</button>
        </div>
    );
};

export default StartPage;

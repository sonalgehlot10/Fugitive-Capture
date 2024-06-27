import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Result = () => {
    const [result, setResult] = useState(null);

    useEffect(() => {
        axios.get(`https://fugitive-capture-backend-3vu5.onrender.com/api/result`)
            .then(response => {
                console.log(response.data);
                setResult(response.data);
            })
            .catch(error => console.error('Error fetching result:', error));
    }, []);

    if (!result) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {result.captured ? (
                <h1>The fugitive was captured by {result.capturingCop}!</h1>
            ) : (
                <h1>The fugitive escaped!</h1>
            )}
        </div>
    );
};

export default Result;



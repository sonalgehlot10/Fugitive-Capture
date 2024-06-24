import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CitySelection = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/api/cities')
            .then(response => setCities(response.data))
            .catch(error => console.error('Error fetching cities:', error));
    }, []);

    const handleNext = () => {
        if (selectedCity) {
            navigate(`/vehicle-selection?city=${selectedCity}`);
        } else {
            alert('Please select a city');
        }
    };

    return (
        <div>
            <h1>Select a City</h1>
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="">Select a city</option>
                {cities.map(city => (
                    <option key={city.name} value={city.name}>{city.name}</option>
                ))}
            </select>
            <br />
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default CitySelection;







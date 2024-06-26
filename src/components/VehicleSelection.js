import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const VehicleSelection = () => {
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState('');
    const [copName, setCopName] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const city = new URLSearchParams(location.search).get('city');

    useEffect(() => {
        axios.get(`http://localhost:3001/api/vehicles`)
            .then(response => setVehicles(response.data))
            .catch(error => console.error('Error fetching vehicles:', error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3001/api/cops`, { cop: copName, city, vehicle: selectedVehicle })
            .then(response => {
                console.log('Response:', response.data);
                navigate('/result');
            })
            .catch(error => console.error('Error submitting selection:', error));
    };

    return (
        <div>
            <h1>Select a Vehicle</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Cop Name:
                    <input type="text" value={copName} onChange={(e) => setCopName(e.target.value)} required />
                </label>
                <br />
                <label>
                    City: {city}
                </label>
                <br />
                <label>
                    Vehicle:
                    <select value={selectedVehicle} onChange={(e) => setSelectedVehicle(e.target.value)} required>
                        <option value="">Select a vehicle</option>
                        {vehicles.map(vehicle => (
                            <option key={vehicle.type} value={vehicle.type}>{vehicle.type}</option>
                        ))}
                    </select>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default VehicleSelection;

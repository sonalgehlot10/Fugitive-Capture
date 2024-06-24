# Fugitive Capture

## Introduction
Fugitive Capture is a web application where three cops select cities and vehicles to capture a fugitive hiding in one of five neighboring cities. The app uses React for the frontend and Node.js for the backend.

## Technologies Used
- Frontend: React
- Backend: Node.js, Express
- Deployment: Netlify (frontend)
- HTTP Client: Axios

## Gameplay
City Selection
Each cop independently chooses one city to investigate from the following list:
Yapkashnagar (60 KM)
Lihaspur (50 KM)
Narmis City (40 KM)
Shekharvati (30 KM)
Nuravgram (20 KM)

Vehicle Selection
Based on the chosen city's distance, each cop selects an electric vehicle considering its range and availability:
EV Bike: 60 KM (2 available)
EV Car: 100 KM (1 available)
EV SUV: 120 KM (1 available)

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies: `yarn install`.
3. Start the server: `node server.js`.

### Frontend
1. Navigate to the `fugitive-capture` directory.
2. Install dependencies: `yarn install`.
3. Start the development server: `export NODE_OPTIONS=--openssl-legacy-provider && yarn start`.

## Deployment Instructions

### Frontend
1. Build the React app: `npm run build`.
2. Deploy on Netlify by creating a new site and dragging the `build` folder.

### Backend
1. Deploy on Heroku:
    ```bash
    git init
    heroku create your-app-name
    git add .
    git commit -m "Initial commit"
    git push heroku master
    ```

## Assumptions
- Each city can only be selected by one cop.
- Vehicles must have enough range for a round trip.
- The backend simulates the fugitive's location randomly.
- No database is used; all data is stored in-memory.

## Result
The system determines if any cop successfully found the fugitive. If found, it displays the name of the cop who made the successful capture.

# Travel Planner

App for finding places of interest, hotels, forecast, and more. 

## Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Deployment**: Railway, Azure

## Support applications
- TravelPlanner Server app
- Weather Microservice
- Place of Interest Microservice
- AI Summary Microservice (NIM LLAMA 3.3)
- Hotels Microservice

## Instructions

### Prerequisites

- Node.js v18+
- MySQL v8+
- npm v8+

### Setup frontend

```bash
cd frontend
npm install
npm run dev
```

### Setup backend

```bash
cd backend
npm install
# configure .env file
npm run dev
```

## Demo

- Frontend: https://FRONTEND_RAILWAY_URL
- Backend API: https://BACKEND_RAILWAY_API/api

## Stack specific docs

- [Frontend](frontend/README.md)
- [Backend](backend/README.md)

## Environment variables

### Frontend (.env)

```env
VITE_BACKEND_API=https://BACKEND_RAILWAY_API/api/
```

### Backend (.env)

```env
MYSQLHOST=HOST
MYSQLUSER=USER
MYSQLPASSWORD=PASSWORD
MYSQL_DATABASE=DATABASE
MYSQLPORT=PORT_NUMBER
```

## Contributors

- Devin Daniels (starter code)
- Zac Maes (starter code)
- Arvin Mirtorabi
- Arstanbek Bulanbekov
- Suhrob Hasanov

# expense-tracker
Full-stack expense tracker application built with React, Node.js, Express, and MongoDB
# Expense Tracker Application

A full-stack web application for tracking and visualizing expenses. The application allows users to add, edit, and delete expenses, as well as visualize spending patterns through charts.

## Features

- Add, edit, and delete expense records
- Categorize expenses for better organization
- Visualize expense data with interactive charts
  - Pie chart for category distribution
  - Bar chart for monthly expenses
- Responsive and user-friendly interface
- RESTful API with full CRUD operations
- MongoDB database integration

## Technology Stack

- **Frontend**: React.js, Chart.js, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Additional Libraries**: Moment.js, React-DatePicker, Axios

## Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local installation or MongoDB Atlas account)
- Git

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/expense-tracker.git
cd expense-tracker
```

### 2. Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
echo "PORT=5000
MONGO_URI=mongodb://localhost:27017/expense-tracker" > .env

# Start the server
npm run server
```

### 3. Frontend Setup

```bash
# Open a new terminal window
# Navigate to client directory from project root
cd client

# Install dependencies
npm install

# Start the React application
npm start
```

## Running the Application

1. Make sure MongoDB is running on your machine or you have a valid MongoDB Atlas connection string
2. Start the backend server: `cd server && npm run server`
3. Start the frontend client: `cd client && npm start`
4. Open your browser and navigate to: `http://localhost:3000`

## API Endpoints

- `GET /api/expenses` - Retrieve all expenses
- `POST /api/expenses` - Create a new expense
- `PUT /api/expenses/:id` - Update an existing expense
- `DELETE /api/expenses/:id` - Delete an expense

## Application Structure

```
expense-tracker/
├── client/                 # Frontend React application
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       ├── services/       # API service functions
│       ├── App.js          # Main application component
│       └── ...
└── server/                 # Backend Node.js/Express application
    ├── controllers/        # Request handlers
    ├── models/             # Database models
    ├── routes/             # API routes
    ├── server.js           # Entry point
    └── ...
```

## Troubleshooting

- If you see "Failed to fetch expenses" error, make sure your MongoDB connection is working and the backend server is running
- For source map warnings from React libraries, you can safely ignore them or add `GENERATE_SOURCEMAP=false` to your client's `.env` file

## Project Architecture

The application follows a standard client-server architecture:

1. **Frontend (React)**: Handles UI rendering, user interactions, and API communication
2. **Backend (Express)**: Provides RESTful API endpoints and business logic
3. **Database (MongoDB)**: Stores expense data in a NoSQL database

Data flows from the UI through the API to the database and back, allowing for complete CRUD operations on expense records.

## Future Enhancements

- User authentication and authorization
- Multiple user support with individual expense tracking
- Additional visualization options and filters
- Budget setting and tracking
- Export functionality for expense reports
- Mobile application using React Native


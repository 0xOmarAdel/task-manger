# Task Manager

## Description

Task Manager is a simple project created to practice building a web application using Node.js, Express, and MongoDB. It provides basic functionality for managing tasks.

## Installation

Make sure you have Node.js and npm installed on your machine.

1. Clone the repository:
   ```bash
   git clone https://github.com/0xOmarAdel/task-manager.git
   cd task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URL=your-mongodb-connection-string
   ```

4. Start the application:
   ```bash
   npm start
   ```

   The application will be accessible at http://localhost:5000.

## Scripts

- `npm start`: Start the application using nodemon.

## Technologies Used

- Node.js
- Express
- MongoDB
- dotenv
- express-async-errors
- mongoose
- nodemon
# Mern-Project
# Exercise Tracking App

The Exercise Tracking App is a web application that allows users to track their exercises and activities. It provides features for users to log in, sign up, and access their personal dashboard where they can add new activities, view exercise details, and log out.

## Features
- **Home:** The Web app's landing Page.
- **Login:** Users can log in to their accounts using their credentials to access their personalized dashboard.
- **Signup:** New users can create an account by signing up with their email address and password.
- **Dashboard:** The dashboard provides a centralized view for users to manage their exercise activities.
  - **Activity View:** The activity view provides a user with a list of their custom made activities. 
  - **Add Activity:** Users can add new exercise activities by providing relevant details such as exercise type, duration, and date.
  - **Exercise Details:** Users can view the details of their exercises, including the exercise type, duration, and date. User also edit and delete activities.
  - **Logout:** Users can securely log out of their accounts to protect their session.

## Technologies Used

The Exercise Tracking App is built using the following technologies:

- Front-end:
  -Framework: React.js
  - Libraries: Material-UI & Bootstrap.
- Back-end: Node.js, mongoose & Express.js
- Database: MongoDB.
- Authentication: JWT (JSON Web Tokens).

## Getting Started

To get started with the Exercise Tracking App, follow these steps:

1. Clone the repository: `https://github.com/Maazkhalid47/Mern-project-.git`
2. Install the dependencies: `npm install`
3. Set up the environment variables for the backend server, including the database connection URL and JWT secret.
4. Start the development server for backend and frontend simultaneously: backend: `npm start`, frontend: 'npm run dev'
5. Open your browser and navigate to `http://localhost:[your port number]` to access the app.

## Folder Structure

The project follows a standard folder structure:

- `src`: Contains the source code files for the frontend React application.
  - `components`: Includes reusable components used throughout the app.
  - `pages`: Contains the page components for login, signup, and dashboard.
  - `routes`: Defines the app's routes and corresponding components.
- `server`: Contains the backend server code, including API endpoints and database connectivity.

## UI Design

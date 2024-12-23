Blog Application (MERN Stack)
This is a simple blog application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to register, log in, and perform CRUD operations (Create, Read, Update, Delete) on posts. The application also includes the ability to upload and manage profile pictures.

Features
User Authentication:

Register and login functionality.
JWT-based authentication to secure endpoints.
Post Management:

Create, read, update, and delete posts.
Each post contains a title, content, and timestamp.

Tech Stack
Frontend:
React.js
React Router for navigation
Axios for API calls
Backend:
Node.js with Express.js
MongoDB (using MongoDB Atlas for database hosting)
JWT for user authentication
Deployment:
Backend hosted on Render.
Frontend hosted on Vercel.
Installation and Setup
Prerequisites
Node.js installed on your local machine.
MongoDB Atlas account for database hosting.
Render account for backend deployment.
Vercel account for frontend deployment.
Steps to Run Locally
Clone the Repository:

Clone the project repository to your local machine.

bash
Copy code
git clone https://github.com/BhanuPratapSingh3010/Quleep-Backend.git
cd backend
Set Up Backend (Node.js & Express):

Navigate to the backend directory.

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory with the following variables:

makefile
Copy code
PORT=5000
MongoDbUserName=vs9232563
MongoDbPassword=8aSYaY5Pv9k9pYcY
Start the backend server:

bash
Copy code
nodemon server.js
The backend server will run on http://localhost:5000.

Set Up Frontend (React):

Navigate to the frontend directory.
git clone https://github.com/BhanuPratapSingh3010/Quleep.git
bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm run dev
The frontend will be available at http://localhost:5173.

API Endpoints
The following API endpoints are available:

POST /api/register: Register a new user.
POST /api/login: Authenticate a user and return a JWT token.
POST /api/posts: Create a new post (authenticated users only).
GET /api/posts: Retrieve all posts.
GET /api/posts/:id: Retrieve a single post by ID.
PUT /api/posts/:id: Update a post (authenticated users only).
DELETE /api/posts/:id: Delete a post (authenticated users only).
Deployment
Backend: The backend is hosted on Render (for hosting the Node.js/Express server).
Frontend: The frontend is deployed on Vercel (for hosting the React application).
Access the deployed application via this link.

Note on AWS Deployment
As per the assignment requirements, I have not used the specified AWS services (EC2, Lambda, or Elastic Beanstalk) for deployment due to my limited knowledge of these AWS services. Instead, I used the following services for deployment:

Backend Hosting: Render
Database Hosting: MongoDB Atlas
Frontend Hosting: Vercel
If more time is provided, I would be able to deploy the backend using AWS EC2 or Elastic Beanstalk and integrate AWS S3 for storing static files like profile pictures.

Future Improvements
Implement the AWS services mentioned in the assignment (EC2, Elastic Beanstalk, AWS S3) for deployment.
Add user role management (e.g., Admin and regular users).
Implement unit and integration testing.
Improve the UI/UX for a more seamless user experience.

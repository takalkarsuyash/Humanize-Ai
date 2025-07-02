# Humanize-Ai

Humanize-Ai is a web application that converts GPT-generated language into more natural, human-readable language. It features a frontend UI for inputting GPT language text and viewing the converted output, along with backend API services including user authentication with Google OAuth.

## Features

- Convert GPT language text to human language with a simple interface.
- User authentication with email/password and Google OAuth.
- Backend API for conversion and authentication.
- Deployment-ready with instructions for Heroku (backend) and Vercel/Netlify (frontend).

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Authentication: Google OAuth 2.0
- Deployment: Heroku, Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js and npm installed
- Google OAuth credentials (Client ID and Secret)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/takalkarsuyash/Humanize-Ai.git
   ```
2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running Locally

- Start backend server:
  ```
  cd backend
  npm run dev
  ```
- Start frontend server:
  ```
  cd ../frontend
  npm start
  ```
- Open your browser at `http://localhost:8080`

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the repository owner.

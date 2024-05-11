# Project Documentation

This project integrates OAuth2 authentication using Gmail for the backend and provides a user interface using Next.js on the frontend. It securely stores user details in MongoDB and integrates with the Slack API to send details to a specified Slack channel.

## Backend (Node.js)

### Requirements

- Node.js
- MongoDB
- Slack API credentials

### Setup Instructions

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies: `npm install`
4. Set up environment variables:

- Create a `.env` file in the root of the `backend` directory.
- Add the following keys:
  ```
  DB_URI=mongodb://your_mongodb_uri
  SLACK_TOKEN=your_slack_api_token
  GOOGLE_CLIENT_ID=your_google_client_id
  GOOGLE_CLIENT_SECRET=your_google_client_secret
  BASE_URL=your_base_url
  CALLBACK_URL="your_callback_url
  SLACK_CHANNEL_ID= your_slack_channel_id
  ```

5. Start the server: npm start

### Features

- OAuth2 authentication using Gmail.
- Secure storage of user details in MongoDB.
- Integration with Slack API to send user details to a Slack channel.
- Robust error handling and validation.

## Frontend (Next.js)

### Requirements

- Next.js
- npm

### Setup Instructions

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Access the application via `http://localhost:3000`.

### Features

- User interface for "Login with Gmail".
- Display user information upon successful login.
- Interface for connecting a Slack account and selecting a channel for sending details.
- Error handling during the login and connection process.

## Integration

- Use Axios or Fetch API for frontend/backend communication.
- Secure handling of OAuth2 tokens, API keys, and user credentials.

## Documentation

- Video explanation: [Link to video]
- Additional documentation is available in the `docs` directory.

## Running the Application

Detailed steps on how to log in with Gmail, connect Slack, and additional functionalities are provided in the setup section of this README.

For any issues or further details, please refer to the official documentation of the libraries and frameworks used.

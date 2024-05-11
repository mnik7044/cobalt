# Backend Documentation

This backend is developed using Node.js and Express, and includes OAuth2 authentication via Google. It securely stores user details in MongoDB and integrates with the Slack API to send user details to a specified Slack channel after successful authentication.

## Requirements

- Node.js
- MongoDB
- Slack API credentials
- Google OAuth2 credentials

## Setup Instructions

### Installation

1. Clone the repository and navigate to the `backend` directory.
2. Install the necessary dependencies: `npm install`

### Configuration

Create a `.env` file in the root of your backend directory with the following environment variables:
Add the following keys:

```
MONGO_URI=mongodb://your_mongodb_uri
SLACK_TOKEN=your_slack_api_token
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
BASE_URL=your_base_url
CALLBACK_URL="your_callback_url
SLACK_CHANNEL_ID= your_slack_channel_id
SESSION_SECRET="your-random-string"
```

### Starting the Server

Run the following command to start the server:`npm start`

## API Routes

### Authentication with Google

- **GET /auth/google**  
  Initiates authentication with Google. Users are redirected to Google to log in.

- **GET /auth/google/callback**  
  Handles the callback from Google after user authentication. If successful, the user's data is sent to a specified Slack channel.

### User Profile

- **GET /profile**  
  A secure route that requires authentication. If the user is authenticated, their details are stored in cookies and they are redirected to the profile page on the frontend.

## Features

- **OAuth2 Authentication:** Utilizes Google for authentication.
- **Secure Storage:** Stores user details in MongoDB.
- **Slack Integration:** Sends authenticated user details to a Slack channel.
- **Error Handling:** Implements robust error handling for authentication and API interaction.

## Environment Variables

Ensure you set up the following environment variables in your `.env` file:

## Dependencies

- **express**: Web server framework.
- **passport**: Authentication middleware for Node.js.
- **passport-google-oauth20**: Passport strategy for authenticating with Google using OAuth 2.0.
- **mongoose**: MongoDB object modeling tool.
- **dotenv**: Module that loads environment variables from a `.env` file.

## Security Practices

- Use HTTPS to secure all connections.
- Store sensitive keys and tokens in environment variables.
- Validate and sanitize user input to prevent injection attacks.

## Additional Notes

Make sure to configure your Google API settings to include the correct authorized redirect URIs and origins to match your deployment and development environments.

## Troubleshooting

- **Authentication Error:** Check that your Google client ID and secret are correct.
- **Slack API Error:** Ensure that your Slack token has the necessary permissions to send messages.

## Conclusion

This backend setup provides a robust foundation for handling user authentication and data processing with integrations like Slack for real-time applications.

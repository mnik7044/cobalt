This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Access the application at `http://localhost:3000`.

## Pages and Features

### Login Page

- **Path:** `/login`
- **Description:** Initiates the OAuth2 login process. Users click on the "Login with Gmail" button, which redirects them to the Google authentication flow.

### Profile Page

- **Path:** `/profile`
- **Description:** Displays user information after successful authentication. The page fetches user details like name, email, avatar, and ID from cookies set by the backend and displays them.

## Integrations

- **Google OAuth2:** Authenticates users via Google.
- **MongoDB:** Interacts with the backend to retrieve user details stored in the database.
- **Slack API:** The backend sends a notification to a specified Slack channel upon successful user login.

## Handling User Data

- **Cookies:** After logging in, the backend sets cookies containing the user's name, email, avatar, and ID. The frontend fetches this data from the cookies to display on the profile page.

## Security Practices

- Ensure cookies are set with `secure: true` to prevent unauthorized access.
- Implement proper error handling to manage scenarios where authentication fails or cookies are not set correctly.

## Development Tips

- Use the React Context API or a state management library like Redux to manage authenticated state across components.
- Implement conditional rendering in the UI based on authentication status to enhance user experience.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## Troubleshooting

- **Login Issues:** Ensure that the backend is correctly configured to accept requests from the frontend's domain.
- **Cookie Handling:** If user details are not displaying, check that cookies are being set and accessed correctly.

## Conclusion

This frontend setup provides a robust user interface for managing OAuth2 authentication and displaying user details, integrating closely with a backend server for full application functionality.

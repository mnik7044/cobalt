const passport = require("passport");
const User = require("../models/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, cb) => {
      // Create a new user object based on your User schema
      const newUser = {
        googleId: profile.id, // This field isn't in your schema and won't be saved unless you add it.
        name: profile.displayName || "Unknown Name", // Fallback in case displayName is not provided
        email: profile.emails[0]?.value || "no-email@provided.com", // Fallback for email
        avatar: profile.photos[0]?.value, // Handle the case where photos might not be available
      };
      try {
        let user = await User.findOne({ email: newUser.email });
        if (user) {
          cb(null, user);
        } else {
          user = await User.create(newUser);
          cb(null, user);
        }
      } catch (err) {
        console.error("Error in Google Strategy", err);
        cb(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    console.error("Error in deserializeUser", error);
    done(error);
  }
});

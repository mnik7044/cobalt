const express = require("express");
const session = require("express-session");
const passport = require("passport");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const cors = require("cors");
const slackController = require("./controllers/slackController");

dotenv.config();
connectDB()
  .then(() => {
    slackController.sendUserData();
  })
  .catch((err) => console.error(err));

const app = express();
const port = process.env.PORT || 5000;

// Session configuration
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

//cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Require your Passport configuration
require("./config/passport");

app.use(express.json());
app.use(authRoutes);
app.use(profileRoutes);

app.get("/", (req, res) => res.send("API Running"));

app.listen(port, () => console.log(`Server started on port ${port}`));

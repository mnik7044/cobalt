const mongoose = require("mongoose"); // Import mongoose

const UserSchema = new mongoose.Schema({
  // Define user schema
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema); // Export the model

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // This adds createdAt and updatedAt fields
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

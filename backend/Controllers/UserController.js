const User = require("../Models/UserModel");

async function getUsers(req, res) {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: "No users listed yet" });
  }
}

async function addUsers(req, res) {
  const { name, link } = req.body;
  try {
    const existingUsers = await User.findOne({ name: name });
    if (existingUsers) {
      res.status(409).json({ message: "This username already exists" });
    } else {
      const addedUsers = await User.create({ name, link });
      res.status(201).json(addedUsers);
    }
  } catch (error) {
    res.status(400).json({ message: "Failed to create user" });
  }
}

module.exports = {
  getUsers,
  addUsers,
};

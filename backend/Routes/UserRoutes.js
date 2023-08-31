const express = require("express");
const router = express.Router();
const Controller = require("../Controllers/UserController");

// Route to get all cart items
router.get("/", Controller.getUsers);

// Route to add a product to the cart
router.post("/add", Controller.addUsers);

module.exports = router;

const express = require("express");
const router = express.Router();
const displayFormController = require("../Controllers/DisplayFormController");

// Route to get all formData
router.get("/", displayFormController.getFormData);

// Route to add formData
router.post("/addDisplayFormData", displayFormController.addFormData);

module.exports = router;

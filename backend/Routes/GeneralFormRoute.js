const express = require("express");
const router = express.Router();
const generalFormController = require("../Controllers/GeneralFormController");

// Route to get all form Data
router.get("/", generalFormController.getFormData);

// Route to add a form
router.post("/addGeneralFormData", generalFormController.addFormData);

module.exports = router;

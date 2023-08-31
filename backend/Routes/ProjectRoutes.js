const express = require("express");
const router = express.Router();
const projectController = require("../Controllers/ProjectController");

// Route to get all projects
router.get("/", projectController.getProjects);

// Route to add a project
router.post("/addProject", projectController.addProject);

module.exports = router;

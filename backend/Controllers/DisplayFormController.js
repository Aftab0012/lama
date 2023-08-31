const DisplayForm = require("../Models/DisplayFormModel");

async function getFormData(req, res) {
  try {
    const formData = await DisplayForm.find({});
    res.json(formData);
  } catch (error) {
    res.status(400).json({ message: "No formDAta available" });
  }
}

async function addFormData(req, res) {
  const {
    primarycolor,
    fontcolor,
    fontsize,
    chatheight,
    showsources,
    chaticonsize,
    screenposition,
    bottomdistance,
    horizontaldistance,
  } = req.body;
  try {
    const formData = await DisplayForm.create({
      primarycolor,
      fontcolor,
      fontsize,
      chatheight,
      showsources,
      chaticonsize,
      screenposition,
      bottomdistance,
      horizontaldistance,
    });
    res.status(201).json(formData);
  } catch (error) {
    res.status(400).json({ message: "Failed to add formData" });
  }
}

module.exports = {
  getFormData,
  addFormData,
};

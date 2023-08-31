const GeneralForm = require("../Models/GeneralFormModel");

async function getFormData(req, res) {
  try {
    const formData = await GeneralForm.find({});
    res.json(formData);
  } catch (error) {
    res.status(400).json({ message: "No formDAta available" });
  }
}

async function addFormData(req, res) {
  const { name, message, placeholderVal } = req.body;
  try {
    const formData = await GeneralForm.create({
      name,
      message,
      placeholderVal,
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

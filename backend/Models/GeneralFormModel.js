const mongoose = require("mongoose");

const generalFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    message: {
      type: String,
      required: true,
      unique: true,
    },
    placeholderVal: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const GeneralForm = mongoose.model("generalform", generalFormSchema);

module.exports = GeneralForm;

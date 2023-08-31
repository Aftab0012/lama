import React, { useState } from "react";
import { config } from "../../App";
import axios from "axios";

/**
 * ConfigurationGeneralForm component.
 *
 * @param {boolean} generalForm - Flag to determine whether to display the general form.
 */
function ConfigurationGeneralForm({ generalForm }) {
  // State variables for form inputs
  const [BotName, setBotName] = useState("");
  const [message, setMessage] = useState("");
  const [placeholderVal, setplaceholderVal] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      name: BotName,
      message: message,
      placeholderVal: placeholderVal,
    };

    const backendUrl = `${config.endpoint}/users/generalform/addGeneralFormData`;

    axios
      .post(backendUrl, dataToSend)
      .then((response) => {
        console.log("Data sent successfully!", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <>
      {console.log(BotName, message, placeholderVal)}
      {generalForm && (
        <div className="flex flex-col space-y-6 p-6">
          {/* Chatbot Name */}
          <div>
            <label
              className="block text-2xl font-bold mb-1"
              htmlFor="chatbotName"
            >
              Chatbot Name
            </label>
            <input
              className="w-full py-2 px-4 bg-white rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              id="chatbotName"
              value={BotName}
              onChange={(e) => setBotName(e.target.value)}
            />
          </div>

          {/* Welcome Message */}
          <div>
            <label
              className="block text-2xl font-bold mb-1"
              htmlFor="welcomeMessage"
            >
              Welcome Message
            </label>
            <input
              className="w-full py-2 px-4 bg-white rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              id="welcomeMessage"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Input Placeholder */}
          <div>
            <label
              className="block text-2xl font-bold mb-1"
              htmlFor="inputPlaceholder"
            >
              Input Placeholder
            </label>
            <input
              className="w-full py-2 px-4 bg-white rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              id="inputPlaceholder"
              value={placeholderVal}
              onChange={(e) => setplaceholderVal(e.target.value)}
            />
          </div>

          {/* Submit button */}
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ConfigurationGeneralForm;

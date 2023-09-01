import React, { useState } from "react";
import { config } from "../../App";
import axios from "axios";
import { message } from "antd";

// ConfigurationDisplayForm component
function ConfigurationDisplayForm({ displayForm }) {
  // State variables for form inputs
  const [primaryColor, setPrimaryColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [chatHeight, setChatHeight] = useState("");
  const [showSources, setShowSources] = useState("yes");
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      primarycolor: primaryColor,
      fontcolor: fontColor,
      fontsize: fontSize,
      chatheight: chatHeight,
      showsources: showSources,
      chaticonsize: field1,
      screenposition: field2,
      bottomdistance: field3,
      horizontaldistance: field4,
    };

    const backendUrl = `${config.endpoint}/users/displayform/addDisplayFormData`;

    axios
      .post(backendUrl, dataToSend)
      .then((response) => {
        console.log("Data sent successfully!", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });

    message.success("Form submitted", 2); // 2 seconds duration
  };

  // Render the form
  return (
    <>
      {displayForm && (
        <div className="relative">
          <div className="flex flex-col h-screen p-6  overflow-y-scroll h-[400px] ">
            {/* First section: Display settings */}
            <div className="flex flex-col space-y-6 mb-6">
              {/* Primary Color */}
              <div>
                <label
                  className="block text-2xl font-bold mb-1"
                  htmlFor="primaryColor"
                >
                  Primary Color
                </label>
                <input
                  className="w-full py-2 px-4 bg-white rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
                  type="text"
                  id="primaryColor"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                />
              </div>

              {/* Font Color */}
              <div>
                <label
                  className="block text-2xl font-bold mb-1"
                  htmlFor="fontColor"
                >
                  Font Color
                </label>
                <input
                  className="w-full py-2 px-4 bg-white rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
                  type="text"
                  id="fontColor"
                  value={fontColor}
                  onChange={(e) => setFontColor(e.target.value)}
                />
              </div>

              {/* Font Size and Chat Height */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    className="block text-2xl font-bold mb-1"
                    htmlFor="fontSize"
                  >
                    Font Size (px)
                  </label>
                  <input
                    className="w-full py-2 px-4 bg-white rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
                    type="number"
                    id="fontSize"
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                  />
                </div>

                <div className="w-1/2">
                  <label
                    className="block text-2xl font-bold mb-1"
                    htmlFor="chatHeight"
                  >
                    Chat Height (%)
                  </label>
                  <input
                    className="w-full py-2 px-4 bg-white rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
                    type="number"
                    id="chatHeight"
                    value={chatHeight}
                    onChange={(e) => setChatHeight(e.target.value)}
                  />
                </div>
              </div>

              {/* Show Sources */}
              <div className="w-1/2">
                <label
                  className="block text-2xl font-bold mb-1"
                  htmlFor="showSources"
                >
                  Show Sources
                </label>
                <select
                  className="w-full py-2 px-4 bg-white rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
                  id="showSources"
                  value={showSources}
                  onChange={(e) => setShowSources(e.target.value)}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            {/* Horizontal line */}
            <div className="w-full h-px bg-black mb-6"></div>

            {/* Second section: Chat icon and position settings */}
            <div className="flex space-x-4">
              {/* Chat Icon Size and Position */}
              <div className="w-1/2 flex flex-col space-y-6">
                <div>
                  <label
                    className="block text-2xl font-bold mb-1"
                    htmlFor="field1"
                  >
                    Chat Icon Size
                  </label>
                  <input
                    className="w-full py-2 px-4 bg-white rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
                    type="text"
                    id="field1"
                    value={field1}
                    onChange={(e) => setField1(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    className="block text-2xl font-bold mb-1"
                    htmlFor="field2"
                  >
                    Position On Screen
                  </label>
                  <input
                    className="w-full py-2 px-4 bg-white rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
                    type="text"
                    id="field2"
                    value={field2}
                    onChange={(e) => setField2(e.target.value)}
                  />
                </div>
              </div>

              {/* Distance settings */}
              <div className="w-1/2 flex flex-col space-y-6">
                <div>
                  <label
                    className="block text-2xl font-bold mb-1"
                    htmlFor="field3"
                  >
                    Distance from Bottom (in px)
                  </label>
                  <input
                    className="w-full py-2 px-4 bg-white rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
                    type="text"
                    id="field3"
                    value={field3}
                    onChange={(e) => setField3(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    className="block text-2xl font-bold mb-1"
                    htmlFor="field4"
                  >
                    Horizontal Distance (in px)
                  </label>
                  <input
                    className="w-full py-2 px-4 bg-white rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
                    type="text"
                    id="field4"
                    value={field4}
                    onChange={(e) => setField4(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Submit button */}
          </div>
          <div className="mt-10 ml-6 absolute right-2 ">
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

export default ConfigurationDisplayForm;

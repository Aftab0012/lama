import React, { useState } from "react";
import axios from "axios";
import { config } from "../../App";

/**
 * MediaUpload component for uploading media data.
 *
 * @param {Object} props - Component props.
 * @param {Function} props.closeForm - Function to close the media upload form.
 * @param {Function} props.onDataAdded - Callback function triggered when data is successfully added.
 */
function MediaUpload(props) {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  // Handle form submission
  const handleForm = (e) => {
    e.preventDefault();
    props.closeForm();

    // Prepare data to send
    const dataToSend = {
      name: name,
      link: link,
    };

    // Backend API endpoint
    const backendUrl = `${config.endpoint}/users/add`;

    // Send data using Axios
    axios
      .post(backendUrl, dataToSend)
      .then((response) => {
        console.log("Data sent successfully!", response.data);
        props.onDataAdded();
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <form className="bg-white p-8 rounded-md shadow-md w-[900px] h-[330px]">
        {/* Name input */}
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter name"
          />
        </div>

        {/* Link input */}
        <div className="mb-4">
          <label htmlFor="link" className="block font-medium text-gray-700">
            Link:
          </label>
          <input
            type="text"
            id="link"
            name="link"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter link"
          />
        </div>

        {/* Upload button */}
        <button
          type="submit"
          onClick={handleForm}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default MediaUpload;

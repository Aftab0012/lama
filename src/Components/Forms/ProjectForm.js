import React, { useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
import { config } from "../../App";
import { message } from "antd";

/**
 * ProjectForm component for submitting project data.
 *
 * @param {Object} props - Component props.
 * @param {Function} props.handleProjectForm - Function to handle project form.
 * @param {Function} props.onDataAdded - Callback function triggered when data is successfully added.
 */
function ProjectForm(props) {
  const { enqueueSnackbar } = useSnackbar();

  // State variable for the project name input
  const [newName, setNewName] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleProjectForm();

    // Prepare data to send
    const dataToSend = {
      name: newName,
    };

    // Backend API endpoint
    const backendUrl = `${config.endpoint}/users/projects/addProject`;

    // Send data using Axios
    axios
      .post(backendUrl, dataToSend)
      .then((response) => {
        console.log("Data sent successfully!", response.data);
        props.onDataAdded();
        enqueueSnackbar("Data sent successfully!", { variant: "success" });
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });

    message.success("Project Added", 2); // 2 seconds duration
  };

  return (
    <div className="mx-auto p-4 border rounded-lg shadow-md max-w-md">
      <form className="project-form ">
        {/* Project Name input */}
        <label className="block font-semibold mb-1" htmlFor="title">
          Enter Project Name
        </label>
        <input
          className="border rounded-lg w-full px-3 py-2 focus:outline-none focus:border-blue-500"
          type="text"
          name="title"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />

        {/* Submit button */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mt-2 py-2 px-4 rounded-lg shadow-md"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;

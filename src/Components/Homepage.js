import React, { useState, useEffect } from "react";
import ProjectForm from "./Forms/ProjectForm";
import ProjectCard from "./ProjectCard";
import "../App.css";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { useSelector } from "react-redux";
import axios from "axios";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { config } from "../App";
import { Button } from "antd";

/**
 * Homepage component for displaying projects and creating new projects.
 */
function Homepage() {
  const names = useSelector((state) => state.names);
  const [projectArray, setProjectArray] = useState([]);
  const [formVisibility, setFormVisibility] = useState(false);

  /**
   * Toggles the visibility of the project creation form.
   */
  const handleProjectForm = () => {
    setFormVisibility(!formVisibility);
    console.log(names);
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data when the form for adding projects is submitted (if needed)
  useEffect(() => {
    if (formVisibility) {
      fetchData();
    }
  }, [formVisibility]);

  /**
   * Fetches project data from the server.
   */
  const fetchData = () => {
    const backendUrl = `${config.endpoint}/users/projects`;
    axios
      .get(backendUrl)
      .then((response) => {
        const fetchedProjects = response.data;
        setProjectArray(fetchedProjects);
        console.log(fetchedProjects);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  /**
   * Handles the event when new project data is added.
   */
  const handleDataAdded = () => {
    fetchData();
  };

  return (
    <div className="bg-gray-100 min-h-screen main-bg">
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="flex flex-col items-center justify-center m-screen">
          {/* Create a New Project Section */}
          {projectArray.length == 0 && (
            <div className="text-5xl font-bold text-customPurple mb-4">
              Create a New Project
            </div>
          )}

          {/* Display Projects Section */}
          {projectArray.length !== 0 && (
            <div className="w-3/4">
              <div className="flex justify-between">
                <div className="text-5xl font-bold text-blue mb-4 ">
                  <span className="text-customPurple ">Projects</span>
                </div>
                <div>
                  <Button
                    onClick={handleProjectForm}
                    className=" z-1 flex w-[230px] h-[43px] mt-1 bg-black text-lg text-white font-semibold"
                  >
                    <span>
                      <AddCircleIcon className="mr-3" />
                    </span>
                    Create New Project
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Display Image */}
          {projectArray.length == 0 && (
            <img
              src={process.env.PUBLIC_URL + "/lama-bg.png"}
              alt="bg"
              className="bg-transparent mb-4"
            />
          )}

          {/* Create New Project Button */}
          {projectArray.length == 0 && (
            <button
              className="bg-black hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
              onClick={handleProjectForm}
            >
              <span>
                <AddCircleIcon className="mr-3" />
              </span>
              Create New Project
            </button>
          )}
        </div>

        {/* Display Project Form */}
        {formVisibility && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-30 bg-gray-700">
            <div className="bg-white p-4 rounded-lg shadow-lgs">
              <ProjectForm
                handleProjectForm={handleProjectForm}
                onDataAdded={handleDataAdded}
              />
            </div>
          </div>
        )}

        {/* Display Project Cards */}
        <div className="">
          {projectArray.length > 0 && (
            <div className="flex flex-wrap mx-4">
              {projectArray.map((data, index) => (
                <div
                  className="p-4 flex justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4 mb-4 hover:bg-gray-200 rounded-lg"
                  key={data._id}
                >
                  <ProjectCard name={data.name} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;

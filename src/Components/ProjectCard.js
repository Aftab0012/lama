import React from "react";
import { Link } from "react-router-dom";

/**
 * ProjectCard component for displaying a project card.
 *
 * @param {string} name - The name of the project.
 */
function ProjectCard({ name }) {
  return (
    <Link to="/products">
      {/* Project Card */}
      <div className="w-[300px] min-h-[100px] flex bg-white rounded-lg shadow-md border-2 p-2 m-4">
        {/* Project Photo */}
        <img
          src={process.env.PUBLIC_URL + "/SP.png"}
          alt="project-photo"
          className=""
        />

        {/* Project Details */}
        <div className="flex flex-col ml-3">
          <h2 className="text-xl font-semibold mb-1">Sample Project</h2>
          <p className="text-lg overflow-hidden">{name}</p>
          <p className="text-sm text-gray-500">Last edited 4 weeks ago</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;

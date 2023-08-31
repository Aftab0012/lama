import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

/**
 * SideBar component for the sidebar navigation.
 *
 * @param {Object} props - Component props.
 * @param {number} props.selectedOption - Selected option for highlighting.
 */
function SideBar({ selectedOption }) {
  return (
    <div className="bg-customGray w-[370px] max-h-full p-4">
      {/* Brand logo */}
      <div className="mb-2">
        <img
          src={process.env.PUBLIC_URL + "/Brand.png"}
          alt="Brand-logo"
          className="Brand-logo"
        />
      </div>
      {/* Title */}
      <div className="mb-2 ml-1.5">Podcast Upload Flow</div>
      <div>
        {/* Projects Link */}
        <Link to={"/products"}>
          <div
            className={`custom-radius flex p-2 cursor-pointer ${
              selectedOption === 1
                ? "bg-customPurple text-white"
                : "bg-gray-300"
            } rounded-lg mb-2`}
          >
            <span
              className={`flex justify-center rounded-full inline-block w-6 h-6 mr-2 ${
                selectedOption === 1
                  ? "bg-customBlue text-white"
                  : "bg-customGray text-gray-500"
              }`}
            >
              1
            </span>
            Projects
          </div>
        </Link>

        {/* Widgets Link */}
        <Link to={"/widgets"}>
          <div
            className={`custom-radius flex p-2 cursor-pointer ${
              selectedOption === 2
                ? "bg-customPurple text-white"
                : "bg-gray-300"
            } rounded-lg mb-2`}
          >
            <span
              className={`flex justify-center rounded-full inline-block w-6 h-6 mr-2 ${
                selectedOption === 2
                  ? "bg-customBlue text-white"
                  : "bg-customGray text-gray-500"
              }`}
            >
              2
            </span>
            Widgets/Configuration
          </div>
        </Link>
      </div>

      {/* Settings */}
      <div className="border ml-10 absolute bottom-10 flex flex-row">
        <div className="mr-3">
          <SettingsIcon fontSize="medium" />
        </div>
        <div className="mt-0.4">Settings</div>
      </div>
    </div>
  );
}

export default SideBar;

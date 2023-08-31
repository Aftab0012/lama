import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ConfigurationDisplayForm from "../Forms/ConfigurationDisplayForm";
import ConfigurationGeneralForm from "../Forms/ConfigurationGeneralForm";

/**
 * WidgetsMainPage component for widgets and configuration.
 */
function WidgetsMainPage() {
  // State variables to manage which form to display
  const [generalForm, setGeneralForm] = useState(true);
  const [displayForm, setDisplayForm] = useState(false);
  const [advancedForm, setAdvancedForm] = useState(false);

  // Handler for switching to the General Form
  const handleGeneralForm = () => {
    setGeneralForm(true);
    setDisplayForm(false);
    setAdvancedForm(false);
  };

  // Handler for switching to the Display Form
  const handleDisplayForm = () => {
    setDisplayForm(true);
    setGeneralForm(false);
    setAdvancedForm(false);
  };

  // Handler for switching to the Advanced Form
  const handleAdvancedForm = () => {
    setAdvancedForm(true);
    setGeneralForm(false);
    setDisplayForm(false);
  };

  return (
    <div className="flex flex-col ml-10 w-full">
      {/* Breadcrumb */}
      <div className="flex flex-row mt-[40px] pl-4">
        <div>
          <Link to={"/"}>
            <IconButton size="large" color="primary">
              <HomeOutlinedIcon fontSize="medium" />
            </IconButton>
          </Link>
        </div>
        <div className="mt-2">
          <span className="text-xl text-gray-500 font-bold faded-text">
            {" "}
            /{" "}
          </span>
          <span className="text-xl font-semibold text-gray-400">
            Sample Project{" "}
          </span>
          <span className="text-xl font-semibold faded-text text-customBlue">
            / Widgets & Configuration
          </span>
        </div>
      </div>

      {/* Configuration Header */}
      <div className="ml-4 mt-3 text-4xl font-bold text-customPurple mb-4 pl-4">
        Configuration
      </div>

      {/* Form Selection */}
      <div className="flex flex-row ml-4 p-4 relative">
        <div
          onClick={handleGeneralForm}
          className="hover:text-customBlue cursor-pointer mr-7 font-semibold text-xl"
        >
          General
        </div>
        <div
          onClick={handleDisplayForm}
          className="hover:text-customBlue cursor-pointer mr-7 font-semibold text-xl"
        >
          Display
        </div>
        <div
          onClick={handleAdvancedForm}
          className="hover:text-customBlue cursor-pointer mr-7 font-semibold text-xl"
        >
          Advanced
        </div>
        <div className="absolute bottom-0 w-3/4 h-[2px] bg-black"></div>
      </div>

      {/* Display selected form */}
      {generalForm && (
        <div className="ml-2 w-3/4">
          <ConfigurationGeneralForm generalForm={generalForm} />
        </div>
      )}
      {displayForm && (
        <div className="ml-2 w-3/4">
          <ConfigurationDisplayForm displayForm={displayForm} />
        </div>
      )}
      {/* {advancedForm && <>Advanced</>} */}
    </div>
  );
}

export default WidgetsMainPage;

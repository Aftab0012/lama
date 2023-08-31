import React from "react";
import "../../App.css";

/**
 * Navbar component for the top navigation bar.
 */
function Navbar() {
  return (
    <div className="bg-white py-4 px-6 flex justify-between items-center sticky z-50 top-0">
      {/* Brand logo */}
      <img
        src={process.env.PUBLIC_URL + "/Brand.png"}
        alt="Brand image"
        className="h-12 mr-2 Nav-logo"
      />
    </div>
  );
}

export default Navbar;

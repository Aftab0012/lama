import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./Navbar/SideBar";
import SideBarMainPage from "./Navbar/SideBarMainPage";

/**
 * Products component for displaying the sidebar and main content of the "Products" page.
 */
function Products() {
  const selectedOption = 1;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar selectedOption={selectedOption} />

      {/* Main Content */}
      <SideBarMainPage />
    </div>
  );
}

export default Products;

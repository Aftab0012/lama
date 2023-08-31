import React from "react";
import SideBar from "./Navbar/SideBar";
import SideBarMainPage from "./Navbar/SideBarMainPage";
import WidgetsMainPage from "./MainPage/WidgetsMainPage";

/**
 * Widget component for rendering the widget section.
 */
function Widget() {
  const selectedOption = 2;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar selectedOption={selectedOption} />

      {/* WidgetsMainPage */}
      <WidgetsMainPage />
    </div>
  );
}

export default Widget;

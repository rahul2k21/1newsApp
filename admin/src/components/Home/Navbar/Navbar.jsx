import React, { useState } from "react";
import Nav from "./Nav/Nav";
import Sidebar from "./Sidebar/Sidebar";


const Navbar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isSidebarExpanded={isSidebarExpanded} />
      <div className="flex-1">
        <Nav handleSidebarToggle={handleSidebarToggle} />
      </div>
    </div>
  );
};

export default Navbar;

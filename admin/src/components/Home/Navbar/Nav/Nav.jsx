import React from "react";
import { CgMenu } from "react-icons/cg";

const Navbar = ({ handleSidebarToggle }) => {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="font-bold text-2xl flex items-center justify-between">
        <button className="text-white text-2xl" onClick={handleSidebarToggle}>
          <CgMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../../public/Images/logo.png";
import { MdArrowBackIos } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  FaUsers,
  FaCheckCircle,
  FaCogs,
  FaHistory,
  FaTrophy,
  FaGamepad,
  FaBell,
  FaFileAlt,
  FaPlayCircle,
  FaList,
  FaUserShield,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

const sidebarData = [
  { id: 1, title: "Dashboard", icon: <AiOutlineDashboard /> },
  { id: 2, title: "Master", icon: <FaUsers />, arrow: <MdArrowBackIos />,sublist: [
      { id: 1, title: "Subitem 1" },
      { id: 2, title: "Subitem 2" },
      { id: 3, title: "Subitem 3" },
      { id: 4, title: "Subitem 4" },
    ], },
  {
    id: 3,
    title: "Approve",
    icon: <FaCheckCircle />,
    arrow: <MdArrowBackIos />,
    sublist: [
      { id: 1, title: "Subitem 1" },
      { id: 2, title: "Subitem 2" },
      { id: 3, title: "Subitem 3" },
      { id: 4, title: "Subitem 4" },
    ],
  },
  { id: 4, title: "Notification", icon: <FaCogs /> },
  { id: 5, title: "Play History", icon: <FaHistory /> },
  { id: 6, title: "Report", icon: <FaHistory /> },
  { id: 7, title: "Set Result", icon: <FaTrophy /> },
  {
    id: 8,
    title: "Manage Game",
    icon: <FaGamepad />,
    arrow: <MdArrowBackIos />,
    sublist: [
      { id: 1, title: "Subitem 1" },
      { id: 2, title: "Subitem 2" },
      { id: 3, title: "Subitem 3" },
    ],
  },
  {
    id: 9,
    title: "Reports",
    icon: <FaFileAlt />,
    arrow: <MdArrowBackIos />,
    sublist: [
      { id: 1, title: "Subitem 1" },
      { id: 2, title: "Subitem 2" },
      { id: 3, title: "Subitem 3" },
      { id: 4, title: "Subitem 4" },
    ],
  },
  {
    id: 10,
    title: "Game Status",
    icon: <FaPlayCircle />,
    arrow: <MdArrowBackIos />,
    sublist: [
      { id: 1, title: "Subitem 1" },
      { id: 2, title: "Subitem 2" },
      { id: 3, title: "Subitem 3" },
    ],
  },
  { id: 11, title: "Account List", icon: <FaList /> },
  { id: 12, title: "Admin List", icon: <FaUserShield /> },
  { id: 13, title: "Logout", icon: <FaSignOutAlt /> },
];


const Sidebar = ({ isSidebarExpanded }) => {
  const [openSublist, setOpenSublist] = useState(null); 

  const toggleSublist = (id) => {
    setOpenSublist(openSublist === id ? null : id); 
  };

  return (
    <div
      className={`bg-slate-800 text-white h-full transition-all duration-300 ${
        isSidebarExpanded ? "w-64" : "w-16"
      }`}
    >
      {/* Logo Section */}
      <div className="flex justify-center border-b-2 border-gray-700 ">
        <Image src={logo} alt="App Logo" width={55} height={50} />
      </div>

      {/* Scrollable Sidebar Content */}
      <ul className="space-y-4 px-2 mt-4 overflow-y-auto h-[calc(100vh-76px)] sidebar-scrollable">
        {sidebarData.map((item) => (
          <li
            key={item.id}
            className={`flex flex-col items-start p-3 rounded-md hover:bg-slate-700 cursor-pointer transition ${
              !isSidebarExpanded ? "justify-center" : "justify-between"
            }`}
          >
            <div
              className="flex items-center w-full"
              onClick={() => item.arrow && toggleSublist(item.id)}
            >
              <span className="text-2xl">{item.icon}</span>
              {isSidebarExpanded && (
                <>
                  <span className="ml-3 text-sm font-medium flex-1">
                    {item.title}
                  </span>
                  {/* Render arrow if available */}
                  {item.arrow && (
                    <span className="ml-2 text-lg">{item.arrow}</span>
                  )}
                </>
              )}
            </div>

            {/* Render sublist if the current item is expanded */}
            {item.sublist && openSublist === item.id && (
              <ul className="pl-1 mt-2 space-y-2 w-full">
                {item.sublist.map((subItem) => (
                  <li
                    key={subItem.id}
                    className="flex items-center p-2 rounded-md hover:bg-slate-600 cursor-pointer "
                  >
                    <span className="text-sm">{subItem.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

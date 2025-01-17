import React from "react";
import { FaHome, FaBolt, FaMusic, FaVideo, FaTv } from "react-icons/fa"; // Import icons
import "./TabBar.css";

export default function TabBar() {
  const tabs = [
    { icon: <FaHome className="tab-icon" />, label: "होम" },
    { icon: <FaBolt className="tab-icon" />, label: "फटाफट" },
    { icon: <FaMusic className="tab-icon" />, label: "ऑडियोज़" },
    { icon: <FaVideo className="tab-icon" />, label: "शॉर्ट्स" },
    { icon: <FaTv className="tab-icon" />, label: "शोज़" },
  ];

  return (
    <div className="tab-bar">
      {tabs.map((tab, index) => (
        <div key={index} className="tab-item" role="button" tabIndex={0}>
          {tab.icon}
          <span className="tab-label">{tab.label}</span>
        </div>
      ))}
    </div>
  );
}

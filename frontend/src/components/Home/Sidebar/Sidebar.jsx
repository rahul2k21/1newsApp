import React from 'react'

function Sidebar() {
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-pink-600 text-white shadow-md transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        <button
          onClick={toggleSidebar}
          className="p-2 text-right w-full text-xl"
        >
          &times;
        </button>
        <ul className="p-4">
          <li className="py-2">Menu Item 1</li>
          <li className="py-2">Menu Item 2</li>
          <li className="py-2">Menu Item 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar

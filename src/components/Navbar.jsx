import React, { useContext } from "react";
import { FaMoon, FaSun, FaSignOutAlt } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContextProvider";

const Navbar = ({ onLogout }) => {
 

  return (
    <div className={`fixed top-0 left-0 right-0 bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white z-50`}>
      <h1 className="text-xl">Dashboard</h1>
      <div className="ml-auto flex items-center space-x-4">
    
      {/* Logout button */}
        <button
          className="flex items-center space-x-2 text-xl"
          onClick={onLogout}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

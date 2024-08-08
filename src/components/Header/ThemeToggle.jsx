import React from "react";
import "../../styles/themetoggle.css";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
  return (
    <button onClick={toggleTheme} className="btn">
      {isDarkMode ? <CiLight /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeToggle;

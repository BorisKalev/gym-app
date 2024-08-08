import React, { useEffect, useRef, useState } from "react";
import "../../styles/header.css";
import logo from "../../assets/dumble.png";
import { IoMdMenu } from "react-icons/io";
import { CiDumbbell } from "react-icons/ci";
import ThemeToggle from "./ThemeToggle";

const nav_links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#schedule",
    display: "Schedule",
  },
  {
    path: "#classes",
    display: "Classes",
  },
  {
    path: "#pricing",
    display: "Pricing",
  },
];

function Header() {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky_header");
    } else {
      headerRef.current.classList.remove("sticky_header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleClick = (e) => {
    e.preventDefault();

    const targetAtb = e.target.getAttribute("href");
    const location = document.querySelector(targetAtb).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <div className="logo_img">
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </div>
            <h2>
              <a href="#">FitBody</a>
            </h2>
          </div>

          <div className="navigation">
            <ul className="menu">
              {nav_links.map((item, index) => (
                <li className="nav_item" key={index}>
                  <a onClick={handleClick} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav_right">
            <button className="register_btn">
              Register{" "}
              <span className="dumbbell-icon">
                <CiDumbbell />
              </span>
            </button>
            <span className="mobile_menu">
              <IoMdMenu />
            </span>
          </div>
          <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </div>
      </div>
    </header>
  );
}

export default Header;

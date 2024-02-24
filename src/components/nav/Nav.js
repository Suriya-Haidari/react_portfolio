// import "./nav.css";

// // import icons from React icons library

import { RiMenu3Line } from "react-icons/ri";

// import icons from React icons library

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { SiPolymerproject } from "react-icons/si";

// Used the useState() hook to set the active tap and to links functionality

import "./nav.css";
import React, { useEffect, useState } from "react";
export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll("section");

      const currentSection = Array.from(sections).find((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        return (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        );
      });

      if (currentSection) {
        const currentLinkId = `#${currentSection.id}`;
        setActiveNav(currentLinkId);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <div className="logo-icon">
        <a href="#contact">
          <SiPolymerproject />
        </a>
      </div>
      <nav>
        {(toggleMenu || screenWidth > 500) && (
          <ul className="list">
            <li className="item">
              <a
                href="#"
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}
              >
                <AiOutlineHome />
              </a>
            </li>
            <li className="item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
              >
                <AiOutlineUser />
              </a>
            </li>
            <li className="item">
              <a
                href="#skill"
                onClick={() => setActiveNav("#skill")}
                className={activeNav === "#skill" ? "active" : ""}
              >
                <FaChartLine />
              </a>
            </li>
            <li className="item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={activeNav === "#projects" ? "active" : ""}
              >
                <GoProjectRoadmap />
              </a>
            </li>

            <li className="item">
              <a
                href="#contacts"
                onClick={() => setActiveNav("#contacts")}
                className={activeNav === "#contacts" ? "active" : ""}
              >
                <IoMdContacts />
              </a>
            </li>
          </ul>
        )}

        <button onClick={toggleNav} className="btnn btn">
          <RiMenu3Line />
        </button>
      </nav>
    </>
  );
}

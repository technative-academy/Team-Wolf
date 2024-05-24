import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./About.module.css";
import AboutApp from "../AboutTheApp/AboutTheApp";

import { NavLink } from "react-router-dom";

function About() {
  const [activeLink, setActiveLink] = useState("about-app");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} ${styles.shadow} ${styles.padding}`}>
        <div className={styles.buttonWrapper}>
          <NavLink
            to="about-app"
            className={`${styles.link} ${activeLink === "about-app" ? styles.activeLink : ""}`}
            onClick={() => handleNavLinkClick("about-app")}
          >
            About the App
          </NavLink>
          <NavLink
            to="about-team"
            className={`${styles.link} ${activeLink === "about-team" ? styles.activeLink : ""}`}
            onClick={() => handleNavLinkClick("about-team")}
          >
            About the Team
          </NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default About;
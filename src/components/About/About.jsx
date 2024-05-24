import { Outlet } from "react-router-dom";
import { useState } from "react";
import styles from "./About.module.css";
import { NavLink } from "react-router-dom";
import AboutApp from "../AboutTheApp/AboutTheApp";

function About() {
  const [activeLink, setActiveLink] = useState("about-app");

  return (
    <div className={styles.wrapper}>
      <div className={` ${styles.card} ${styles.shadow} ${styles.padding}`}>
        <div className={styles.buttonWrapper}>
          <NavLink
            to="about-app"
            className={`${styles.link} ${
              activeLink === "about-app" ? styles.activeLink : ""
            }`}
            onClick={() => setActiveLink("about-app")}
          >
            About the App
          </NavLink>
          <NavLink
            to="about-team"
            className={`${styles.link} ${
              activeLink === "about-team" ? styles.activeLink : ""
            }`}
            onClick={() => setActiveLink("about-team")}
          >
            About the Team
          </NavLink>
        </div>

        {activeLink === "about-app" && <AboutApp />}

        <Outlet />
      </div>
    </div>
  );
}

export default About;

import styles from "./About.module.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={` ${styles.card} ${styles.shadow} ${styles.padding}`}>
        <div className={styles.buttonWrapper}>
          <NavLink
            to="about-app"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            About the App
          </NavLink>
          <NavLink
            to="about-team"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
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

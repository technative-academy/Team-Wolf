import styles from "./SiteNav.module.css";
import { NavLink } from "react-router-dom";
import { FaHamburger, FaTimes } from "react-icons/fa";
import { useState } from "react";

function SiteNav() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <div className={styles.header}>
      <NavLink to="/">
        <img className={styles.logo} src="/images/cover.png" alt="Cover" />
      </NavLink>
      <ul
        className={
          click ? `${styles.navMenu} ${styles.active}` : styles.navMenu
        }
      >
        <li>
          <NavLink to="/" activeClassName={styles.activeLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/ask" activeClassName={styles.activeLink}>
            Ask
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={styles.activeLink}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName={styles.activeLink}>
            Products
          </NavLink>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={handleClick}>
        {click ? (
          <FaTimes size={40} style={{ color: "white" }} />
        ) : (
          <FaHamburger size={40} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
}

export default SiteNav;

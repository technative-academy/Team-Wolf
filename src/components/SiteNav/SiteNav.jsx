// import { NavLink } from "react-router-dom";
// import styles from "./SiteNav.module.css";

// function SiteNav() {
//   const navLinks = [
//     { label: "Home", url: "/" },
//     { label: "Ask", url: "/ask" },
//     { label: "About", url: "/about" },
//   ];
//   return (
//     <div className={styles.wrapper}>
//       <nav className={styles.links}>
//         {navLinks.map((navLink) => (
//           <NavLink
//             key={navLink.url}
//             to={navLink.url}
//             className={({ isActive }) =>
//               isActive ? styles.activeLink : styles.inactiveLink
//             }
//           >
//             {navLink.label}
//           </NavLink>
//         ))}
//       </nav>
//     </div>
//   );
// }

// export default SiteNav;

import styles from "./SiteNav.module.css";
import { Link } from "react-router-dom";
import { FaHamburger, FaTimes } from "react-icons/fa";
import { useState } from "react";

function SiteNav() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src="/images/cover.png" alt="Cover" />
      </Link>
      <ul
        className={
          click ? `${styles.navMenu} ${styles.active}` : styles.navMenu
        }
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ask">Ask</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={handleClick}>
        {click ? (
          <FaTimes size={50} style={{ color: "white" }} />
        ) : (
          <FaHamburger size={50} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
}

export default SiteNav;

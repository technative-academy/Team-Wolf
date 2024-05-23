import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return <div className={styles.wrapper}>
    <p> <Link to='#'> Terms and Conditions </Link> <Link to='#'> Cookies </Link> </p>
    <div className={styles.copyRight}>
    <p ><span>&#169;</span> 2024</p>
    </div>
  </div>;
}

export default Footer;

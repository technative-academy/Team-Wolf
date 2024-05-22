import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return <div className={styles.wrapper}>
    <Link to='#'>
      <p> Terms and Conditions </p>
    </Link>
    <Link to='#'>
      <p>Cookies</p>
    </Link>
    <p className="copyright"><span>&#169;</span> 2024</p>
  </div>;
}

export default Footer;

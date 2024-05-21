import styles from "./Footer.module.css";

function Footer() {
  return <div className={styles.wrapper}>
    <p> <a href="#">Terms and Conditions</a></p>
    <p><a href="#">Cookies</a></p>
    <p className="copyright"><span>&#169;</span> 2024</p>
  </div>;
}

export default Footer;

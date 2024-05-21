import styles from "./SiteHeader.module.css";
import SiteNav from "../SiteNav/SiteNav";
import { useLocation } from "react-router-dom";

function SiteHeader() {
  const location = useLocation();

  const getHeaderText = () => {
    switch (location.pathname) {
      case "/":
        return "Welcome to AI Cooking Assistant";
      case "/ask":
        return "Ask AI Cooking Assistant";
      case "/about":
        return "About AI Cooking Assistant";
      default:
        return "Hi";
    }
  };
  return (
    <div className={styles.wrapper}>
      <SiteNav />
      <h1 className={styles.mainHeading}>{getHeaderText()}</h1>
      <h3 className={styles.subheading}>
        With us, you will never struggle to find meal ideas again.
      </h3>
    </div>
  );
}

export default SiteHeader;

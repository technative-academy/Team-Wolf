import styles from "./SiteHeader.module.css";
import SiteNav from "../SiteNav/SiteNav";

function SiteHeader() {
  return (
    <div className={styles.wrapper}>
      <SiteNav />
      <h1 className={styles.mainHeading}>Welcome to AI Cooking Assistant</h1>
      <h3 className={styles.subheading}>
        With us, you will never struggle to find meal ideas again.
      </h3>
    </div>
  );
}

export default SiteHeader;

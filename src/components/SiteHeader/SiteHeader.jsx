import styles from "./SiteHeader.module.css";
import SiteNav from "../SiteNav/SiteNav";

function SiteHeader() {
  return (
    <div className={styles.wrapper}>
      <SiteNav />
    </div>
  );
}

export default SiteHeader;

import styles from "./Root.module.css";

import SiteHeader from "../SiteHeader/SiteHeader";
import SiteNav from "../SiteNav/SiteNav";
import Footer from "../Footer/Footer";
import MainContent from "../MainContent/MainContent";

function Root() {
  return (
    <div className={styles.wrapper}>
      <SiteNav />
      <SiteHeader />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Root;

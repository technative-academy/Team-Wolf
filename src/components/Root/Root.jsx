import styles from "./Root.module.css";
import SiteHeader from "../SiteHeader/SiteHeader";
import Footer from "../Footer/Footer";
import MainContent from "../MainContent/MainContent";

function Root() {
  return (
    <div className={styles.wrapper}>
      <SiteHeader />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Root;

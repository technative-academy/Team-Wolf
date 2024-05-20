import { Outlet } from "react-router-dom";
import styles from "./MainContent.module.css";

function MainContent() {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
}

export default MainContent;

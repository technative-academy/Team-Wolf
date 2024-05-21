import styles from "./ButtonWhite.module.css";

function ButtonWhite({text}) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonWhite}>{text}</button>
    </div>
  );
}

export default ButtonWhite;

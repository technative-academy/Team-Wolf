import styles from "./ButtonPurple.module.css";

function ButtonPurple({text}) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonPurple}>{text}</button>
    </div>
  );
}

export default ButtonPurple;

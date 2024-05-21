import styles from "./ButtonPurple.module.css";

function ButtonPurple({text, href, onClick}) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonPurple} href={href} onClick={onClick}>{text}</button>
    </div>
  );
}

export default ButtonPurple;

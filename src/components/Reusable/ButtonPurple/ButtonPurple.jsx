import styles from "./ButtonPurple.module.css";

function ButtonPurple({ text, href, onClick, isDisabled }) {
  const button = !isDisabled ? (
    <button className={styles.buttonPurple} href={href} onClick={onClick}>
      {text}
    </button>
  ) : (
    <button disabled className={styles.buttonPurple}>
      {text}
    </button>
  );

  return button;
}

export default ButtonPurple;

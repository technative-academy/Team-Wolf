import styles from "./ButtonPurple.module.css";

function ButtonPurple({ text, href, type, onClick, isDisabled }) {
  const button = !isDisabled ? (
    <button className={styles.buttonPurple} type={type} href={href} onClick={onClick}>
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

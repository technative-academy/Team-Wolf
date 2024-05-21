import styles from "./ButtonWhite.module.css";

function ButtonWhite({ text, href, onClick, isHidden }) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonWhite} href={href} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default ButtonWhite;

import styles from "./Input.module.css";

function AskInput({ setInput, placeholder, handleEnter }) {
  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <textarea
      className={styles.input}
      required
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default AskInput;

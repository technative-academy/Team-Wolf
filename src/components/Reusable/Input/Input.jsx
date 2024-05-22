import styles from "./Input.module.css";

function AskInput({ input, setInput, placeholder }) {
  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <input className={styles.input} required type="text" placeholder={placeholder} onChange={handleChange} />
    </>
  );
}

export default AskInput;

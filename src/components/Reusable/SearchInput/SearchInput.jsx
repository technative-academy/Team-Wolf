import styles from "./SearchInput.module.css";

export default function SearchInput({ input, setInput }) {
  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search products"
        value={input}
        onChange={handleChange}
      />
    </>
  );
}

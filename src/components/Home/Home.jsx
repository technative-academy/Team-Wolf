import ButtonPurple from "../Reusable/ButtonPurple/ButtonPurple";
import ButtonWhite from "../Reusable/ButtonWhite/ButtonWhite";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={` ${styles.card} ${styles.shadow} ${styles.padding}`}>
        <h2 className={styles.margin}>We do Recipes</h2>
        <h2 className={`${styles.margin} ${styles.via}`}>(via ChatGPT)</h2>
        <p className={styles.para}>
          Do you want a list of dishes that actually have no recipe at all? Ask
          us a for them, we'll secretly pass it on to ChatGPT and will return
          the result pretending that we generated it ourselves. Even this
          paragraph was stolen.
        </p>
        <img src="/images/recipe-book.jpg" alt="image" />
        <div className={styles.center}>
          <p className={styles.para}>
            Post a question about recipes and see some suggestions from our
            specially trained Al
          </p>
          <ButtonPurple text="Ask our AI!" />
          <p className={styles.para}>
            Then don't actually make anything yourself, buy from us!
          </p>
          <ButtonWhite text="Visit our Shop" />
        </div>
      </div>
    </div>
  );
}

export default Home;

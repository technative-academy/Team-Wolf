import ButtonPurple from "../Reusable/ButtonPurple/ButtonPurple";
import ButtonWhite from "../Reusable/ButtonWhite/ButtonWhite";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  // Go to ask on button press
  const navigate = useNavigate();

  const goToAsk = () => {
    navigate("/about/about-app");
  };

  const goToProducts = () => {
    navigate("/products");
  };

  return (
    <div className={styles.wrapper}>
      <div className={` ${styles.card} ${styles.shadow} ${styles.padding}`}>
        <div className={styles.titleContainer}>
          <div>
            <h2 className={styles.margin}>We do Recipes</h2>
            <h2 className={`${styles.margin} ${styles.via}`}>(via ChatGPT)</h2>
            <p className={styles.para}>
              Do you want a list of dishes that actually have no recipe at all?
              Ask us a for them, we'll secretly pass it on to ChatGPT and will
              return the result pretending that we generated it ourselves. Even
              this paragraph was stolen.
            </p>
          </div>
          <img
            className={styles.img}
            src="/images/recipe-book.jpg"
            alt="image"
          />
        </div>

        <div className={`${styles.buttonsContainer} ${styles.customBorder}`}>
          <div className={styles.buttonContainer}>
            <p className={styles.para}>
              Post a question about recipes and see some suggestions from our
              specially trained Al
            </p>
            <ButtonPurple onClick={() => goToAsk()} text="Ask our AI!" />
          </div>
          <div className={styles.buttonContainer}>
            <p className={styles.para}>
              We make tasty treats! So don't actually make anything yourself,
              buy from us! Please.
            </p>
            <ButtonWhite onClick={() => goToProducts()} text="Visit our Shop" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

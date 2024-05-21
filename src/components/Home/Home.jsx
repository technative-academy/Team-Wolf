import ButtonPurple from "../Reusable/ButtonPurple/ButtonPurple";
import ButtonWhite from "../Reusable/ButtonWhite/ButtonWhite";
import styles from "./Home.module.css";


function Home() {
  return (
    <div className={styles.wrapper}>
      <p>Home</p>
      <h1>This is a heading</h1>
      <h2>This is a heading</h2>
      <h3>This is a heading</h3>
      <h4>This is a heading</h4>
      <p>This is a paragraph</p>
      <ButtonPurple />
      <ButtonWhite />
      <br />
      <a href="#">This is a link</a>
      <div className={styles.shadow}>This is a div</div>
    </div>
  );
}

export default Home;

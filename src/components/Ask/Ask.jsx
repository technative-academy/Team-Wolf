import { useEffect, useState } from "react";
import Input from "../Reusable/Input/Input";
import styles from "./Ask.module.css";
import ButtonPurple from "../Reusable/ButtonPurple/ButtonPurple";
import { makeAskRequest } from "./AskSlice";
import { useDispatch, useSelector } from "react-redux";
import Info from "../Info/Info";
import ButtonWhite from "../Reusable/ButtonWhite/ButtonWhite";

function Ask() {
  const result = useSelector((state) => state.ask.result);
  const isLoading = useSelector((state) => state.ask.isLoading);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const charNum = 160 - input.length;

  // If charNum is below 0 then button will be disabled
  useEffect(() => {
    setIsDisabled(charNum < 0);
  }, [charNum]);

  // Retrieve the info from result
  const info = result.map((item) => {
    return (
      <Info
        key={item.title}
        title={item.title}
        description={item.description}
      />
    );
  });

  // handle click for ask new question
  function newQuestion() {
    setShow(false);
    setIsDisabled(false);
  }

  return (
    <div className={styles.wrapper}>
      <div className={` ${styles.card} ${styles.shadow} ${styles.padding}`}>
        <h2>Ask your question</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(makeAskRequest(input));
            setIsDisabled(true);
            setShow(true);
          }}
        >
          <div className={styles.formContentContainer}>
            <Input
              input={input}
              setInput={setInput}
              placeholder="Give me recipe ideas..."
            />
            <ButtonPurple
              className={styles.askButton}
              isDisabled={isDisabled}
              text={"Ask the brains"}
              type={"submit"}
            />
            {show && (
              <ButtonWhite text="Ask a new question" onClick={newQuestion} />
            )}
            <p className={`${charNum < 0 ? styles.red : ""} ${styles.charNum}`}>
              {charNum === 1 || charNum === -1
                ? `${charNum} Character remaining`
                : `${charNum} Characters remaining`}
            </p>
          </div>
        </form>
        {isLoading && <img src="/images/icons8-loading-circle.gif" />}
        {show && (
          <div className={styles.customBorder}>
            <h2 style={{ textAlign: "left" }}>Results</h2> {info}
          </div>
        )}
      </div>
    </div>
  );
}

export default Ask;

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
      <Input input={input} setInput={setInput} placeholder="Ask.." />
      <p className={charNum < 0 ? styles.red : ""}>
        {charNum === 1 || charNum === -1
          ? `${charNum} Character remaining`
          : `${charNum} Characters remaining`}
      </p>
      <ButtonPurple
        isDisabled={isDisabled}
        text={"Ask the brains"}
        onClick={() => {
          dispatch(makeAskRequest(input));
          setIsDisabled(true);
          setShow(true);
        }}
      />
      {show && <ButtonWhite text="Ask a new question" onClick={newQuestion} />}
      {show && <div>{info}</div>}
    </div>
  );
}

export default Ask;

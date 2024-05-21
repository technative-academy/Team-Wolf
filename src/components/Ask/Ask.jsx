import { useState } from "react";
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
  const [input, setInput] = useState("Give me things to eat for dinner");
  const [isDisabled, setIsDisabled] = useState(false);
  const [show, setShow] = useState(false);

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
  function newQuestion(){
    setShow(false)
    setIsDisabled(false)
    setInput("Give me things to eat for lunch");
  }

  return (
    <div className={styles.wrapper}>
      <Input input={input} setInput={setInput} placeholder="Ask.." />
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

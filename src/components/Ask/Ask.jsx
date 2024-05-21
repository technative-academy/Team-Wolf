import { useState } from "react";
import Input from "../Reusable/Input/Input";
import styles from "./Ask.module.css";
import ButtonPurple from "../Reusable/ButtonPurple/ButtonPurple";
import { makeAskRequest } from "./AskSlice";
import { useDispatch, useSelector } from "react-redux";

function Ask() {
  const result = useSelector((state) => state.ask.result);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");


  return (
    <div className={styles.wrapper}>
      <Input input={input} setInput={setInput} placeholder="Ask.." />
      <ButtonPurple text={"Ask the brains"} onClick={() => dispatch(makeAskRequest())}/>
      <p>{input}</p>
      <p>{`Title: ${result[0].title} Description: ${result[0].description}`}</p>
    </div>
  );
}

export default Ask;

import { useState } from "react";
import Input from "../Reusable/Input/Input";
import styles from "./Ask.module.css";
import ButtonPurple from "../Reusable/ButtonPurple/ButtonPurple";
import { makeAskRequest } from "./AskSlice";
import { useDispatch, useSelector } from "react-redux";
import Info from "../Info/Info";

function Ask() {
  const result = useSelector((state) => state.ask.result);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  // Retrieve the info from result
  const info = result.map((item) => {
    return (
      <Info
      key={item.title}
      title={item.title}
      description={item.description}
      />
    )
  })

  return (
    <div className={styles.wrapper}>
      <Input input={input} setInput={setInput} placeholder="Ask.." />
      <ButtonPurple text={"Ask the brains"} onClick={() => dispatch(makeAskRequest(input))}/>
      <div>{info}</div>
    </div>
  );
}

export default Ask;

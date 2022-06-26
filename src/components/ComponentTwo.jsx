import { useContext, useRef } from "react";
import { AppStateContext } from "../AppStateContext";

export function ComponentTwo() {
  const inputRef = useRef("");

  //this way requires 2 imports, use context and the appstatecontext itself
  const [{ name }, dispatch] = useContext(AppStateContext);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch({ type: "UPDATE_NAME", payload: inputRef.current.value });
  };

  return (
    <>
      <h2>Component Two</h2>
      <h4>{name}</h4>
      <input type="text" ref={inputRef}></input>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

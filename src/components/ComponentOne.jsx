import { useRef } from "react";
import { useAppState } from "../AppStateContext";

export function ComponentOne() {
  const inputRef = useRef("");

  //this way only requires 1 import, which is the function exported from the component
  const [{ name }, dispatch] = useAppState();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch({ type: "UPDATE_NAME", payload: inputRef.current.value });
  };

  return (
    <>
      <h2>Component One </h2>
      <h4>{name}</h4>
      <input type="text" ref={inputRef}></input>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

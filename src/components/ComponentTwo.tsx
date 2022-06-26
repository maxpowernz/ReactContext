import React, { useContext, useRef } from "react";
import { AppStateContext } from "../AppStateContext";

function ComponentTwo() {
  const inputRef = useRef<HTMLInputElement>(null);

  //this way requires 2 imports, use context and the appstatecontext itself
  const { state, dispatch } = useContext(AppStateContext);

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    inputRef.current && dispatch({ type: "UPDATE_NAME", payload: inputRef.current.value });
  };

  return (
    <>
      <h2>Component Two</h2>
      <h4>{state.name}</h4>
      <input type="text" ref={inputRef}></input>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export { ComponentTwo };

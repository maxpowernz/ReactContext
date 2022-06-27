import React from "react";
import { AppStateProvider } from "./AppStateContext";
import { ComponentOne, ComponentTwo, ComponentWrapper } from "./components";

function App() {
  return (
    <>
      <h3>React Context API</h3>
      <React.StrictMode>
        <AppStateProvider>
          <ComponentWrapper>
            <ComponentOne />
          </ComponentWrapper>
          <ComponentWrapper>
            <ComponentTwo />
          </ComponentWrapper>
        </AppStateProvider>
      </React.StrictMode>
    </>
  );
}

export default App;

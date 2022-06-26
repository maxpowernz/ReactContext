import React from "react";
import { AppStateProvider } from "./AppStateContext";
import { ComponentOne, ComponentTwo } from "./components";
import ComponentWrapper from "./components/ComponentWrapper";

function App() {
  return (
    <>
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

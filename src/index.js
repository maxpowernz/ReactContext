import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";

const AppContext = createContext();

const languages = ["JavaScript", "Python"];

const appState = {
  languages,
  selected: 0,
  selectedLanguage: languages[0],
};

function App() {
  const [state, setState] = useState(appState);

  return (
    <AppContext.Provider value={[state, setState]}>
      <MainSection />
    </AppContext.Provider>
  );
}

const ChildComponentWithContext = () => {
  const [state] = useContext(AppContext);

  return <h2>{state.selectedLanguage}</h2>;
};

const GrandChild = ({ selectedLanguage }) => {
  return <h3>{selectedLanguage}</h3>;
};

function MainSection() {
  const [state, setState] = useContext(AppContext);

  const { selectedLanguage } = state;

  const toggle = () => {
    const selected = +!state.selected;

    setState((prevState) => ({
      ...prevState,
      selectedLanguage: prevState.languages[selected],
      selected,
    }));
  };

  return (
    <div>
      <p id="favoriteLanguage">Favorite programing language: {selectedLanguage}</p>
      <button id="changeFavorite" onClick={toggle}>
        Toggle language
      </button>
      <ChildComponentWithContext />
      <GrandChild selectedLanguage={selectedLanguage} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

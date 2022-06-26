import { createContext, useContext, useMemo, useReducer } from "react";

export const AppStateContext = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_NAME":
      return { ...state, name: payload };

    default:
      return state;
  }
};

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { name: "Aaron" });

  const store = useMemo(() => [state, dispatch], [state, dispatch]);

  return <AppStateContext.Provider value={store}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);

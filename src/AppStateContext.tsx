import React, { createContext, useContext, useReducer } from "react";

type State = {
  name: string;
};

type Action = { type: "UPDATE_NAME"; payload: string } | { type: "UPDATE_EMAIL"; payload: string };

type AppStateContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const appState: State = {
  name: "Default",
};

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

const reducer = (state: State, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_NAME":
      return { ...state, name: payload };

    default:
      return state;
  }
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, appState);

  //const store = useMemo(() => [state, dispatch], [state, dispatch]);

  return <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);

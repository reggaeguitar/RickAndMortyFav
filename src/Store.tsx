import React from "react";
import { IState } from "./interfaces/IState";
import { IAction } from "./interfaces/IAction";

const initialState: IState = {
  episodes: [],
  favorites: []
};

const initialContext: IContext = {
  state: initialState,
  dispatch: () => {}
}

interface IContext {
  state: IState
  dispatch: React.Dispatch<IAction>
}

export const Store = React.createContext<IContext>(initialContext);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "fetch_data":
      return { ...state, episodes: action.payload };
    case "add_fav":
      return { ...state, favorites: [...state.favorites, ...action.payload] };
    case "remove_fav":
      return { ...state, favorites: [...action.payload] };
    default:
      return state;
  }
}

export function StoreProvider({
  children
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}

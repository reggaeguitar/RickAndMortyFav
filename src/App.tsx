import React, { FunctionComponent } from "react";
import { Store } from "./Store";
import { Link, RouteComponentProps } from "@reach/router";

export const App: FunctionComponent<RouteComponentProps> = (props: React.PropsWithChildren<RouteComponentProps<{}>>): JSX.Element => {
  const { state } = React.useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">
            You have favorited {state.favorites.length} episodes!
          </Link>
        </div>
      </header>
      {props.children}
    </>
  );
}

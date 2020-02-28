import React from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";
import { IEpisodeProps } from "./interfaces/IEpisodeProps";

export default function App(props: IEpisodeProps): JSX.Element {
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
    </>
  );
}

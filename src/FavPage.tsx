import React from "react";
import { Store } from "./Store";
import { toggleFavAction } from "./Actions";
import { IEpisodeProps } from "./interfaces/IEpisodeProps";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favorites,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites
  };

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <div className="episode-layout">
        <EpisodeList {...props}></EpisodeList>
      </div>
    </React.Suspense>
  );
}

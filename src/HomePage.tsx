import React from "react";
import { Store } from "./Store";
import { fetchDataAction, toggleFavAction } from "./Actions";
import { IEpisodeProps } from "./interfaces/IEpisodeProps";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites
  };

  return (
    <>
      <React.Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </>
  );
}

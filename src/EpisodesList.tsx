import React from "react";
import { FavoriteService } from "./FavoriteService";
import { IEpisodeProps } from "./interfaces/IEpisodeProps";
import { IEpisode } from "./interfaces/IEpisode";

export default function EpisodesList(props: IEpisodeProps): JSX.Element[] {
  const { episodes, toggleFavAction, favorites, store } = props;
  const { state, dispatch } = store;
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          src={episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button
            type="button"
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {FavoriteService.episodeInFav(favorites, episode) ? "Unfav" : "Fav"}
          </button>
        </section>
      </section>
    );
  });
}

import { FavoriteService } from "./FavoriteService";
import { IState } from "./interfaces/IState";
import { IAction } from "./interfaces/IAction";
import { IEpisode } from "./interfaces/IEpisode";
import { Dispatch } from "./interfaces/Dispatch";

export const fetchDataAction = async (dispatch: Dispatch) => {
  const url =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const data = await fetch(url);
  const dataJson = await data.json();
  return dispatch({
    type: "fetch_data",
    payload: dataJson._embedded.episodes
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: React.Dispatch<IAction>,
  episode: IEpisode
): void => {
  let dispatchObj = {
    type: "add_fav",
    payload: [episode]
  };
  if (FavoriteService.episodeInFav(state.favorites, episode)) {
    const favWithoutEpisode = state.favorites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    dispatchObj = {
      type: "remove_fav",
      payload: favWithoutEpisode
    };
  }

  return dispatch(dispatchObj);
};

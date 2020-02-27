import { IState, IEpisode, IAction } from "./interfaces";
import { FavoriteService } from "./FavoriteService";

export const fetchDataAction = async (dispatch: any) => {
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

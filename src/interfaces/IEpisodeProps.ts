import { IEpisode } from "./IEpisode";
import { IState } from "./IState";
import { Dispatch } from "./Dispatch";

export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  store: { state: IState; dispatch: Dispatch };
  toggleFavAction: (
    state: IState,
    dispatch: Dispatch,
    episode: IEpisode
  ) => void;
  favorites: Array<IEpisode>;
}
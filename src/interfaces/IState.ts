import { IEpisode } from "./IEpisode";

export interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
}

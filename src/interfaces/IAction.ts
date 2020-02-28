import { IEpisode } from "./IEpisode";

export interface IAction {
  type: string;
  payload: Array<IEpisode>;
}
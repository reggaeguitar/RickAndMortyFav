import { IEpisode } from "./interfaces";

export class FavoriteService {
  static episodeInFav = (favorites: IEpisode[], episode: IEpisode): boolean =>
    favorites.includes(episode);
}

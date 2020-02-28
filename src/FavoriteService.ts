import { IEpisode } from "./interfaces/IEpisode";

export class FavoriteService {
  static episodeInFav = (favorites: IEpisode[], episode: IEpisode): boolean =>
    favorites.includes(episode);
}

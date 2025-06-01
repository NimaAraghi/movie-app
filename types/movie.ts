export interface Movie {
  id: number;
  title: string;
  overview: string;
  genre_ids: number[];
  genres: [{ id: number; name: string }];
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
}

export const revalidate = 86400;

import { Genre } from "../types/genre";
import { configs } from "./config";
import { BASE_URL } from "./constants";

export async function getGenres(): Promise<Map<number, string>> {
  const genres = fetch(`${BASE_URL}/genre/movie/list?language=en-US`, configs)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch genres data!");
      return res.json() as Promise<{ genres: Genre[] }>;
    })
    .then((data) => data.genres);

  const genreMap = new Map((await genres).map((g) => [g.id, g.name]));
  return genreMap;
}

export async function getGenreById(id: number): Promise<string | undefined> {
  const genres = await getGenres();
  return genres.get(id);
}

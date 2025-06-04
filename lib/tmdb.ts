import { Video } from "@/types/video";
import { Movie } from "../types/movie";
import { configs } from "./config";
import { BASE_URL } from "./constants";
import { Image } from "@/types/image";
import { TmdbApiResponse } from "@/types/tmdbApiResponse";

// Optional generic API response type

export function getMovies(
  page: number = 1,
  sortBy: string = "popularity.desc",
  genreId: number | undefined = undefined
): Promise<TmdbApiResponse<Movie>> {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  return fetch(
    `${BASE_URL}/discover/movie?language=en-US&page=${page}&primary_release_date.gte=1927-02-06&primary_release_date.lte=${today}&sort_by=${sortBy}${
      genreId ? `&with_genres=${genreId}` : ""
    }`,
    configs
  ).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch movies!");
    return res.json() as Promise<TmdbApiResponse<Movie>>; // <-- Returns full response
  });
}

export function getPopularMovies(
  page: number
): Promise<TmdbApiResponse<Movie>> {
  return fetch(
    `${BASE_URL}/movie/popular?language=en-US&page=${page}`,
    configs
  ).then((res) => {
    if (!res.ok) throw new Error(`Failed to fetch popular movies!`);
    return res.json() as Promise<TmdbApiResponse<Movie>>; // <-- Returns full response
  });
}

export function getTopRatedMovies(
  page: number
): Promise<TmdbApiResponse<Movie>> {
  return fetch(
    `${BASE_URL}/movie/top_rated?language=en-US&page=${page}`,
    configs
  ).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch top-rated movies!");
    return res.json() as Promise<TmdbApiResponse<Movie>>; // <-- Returns full response
  });
}

export function getUpcomingMovies(
  page: number
): Promise<TmdbApiResponse<Movie>> {
  return fetch(
    `${BASE_URL}/movie/upcoming?language=en-US&page=${page}`,
    configs
  ) // Corrected &page=${page}
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch upcoming movies!");
      return res.json() as Promise<TmdbApiResponse<Movie>>; // <-- Returns full response
    });
}

// Get movie details by ID
export function getMovieById(id: number): Promise<Movie> {
  return fetch(`${BASE_URL}/movie/${id}`, configs).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch movie data!");
    return res.json() as Promise<Movie>;
  });
}

export function getMovieByQuery(
  page: number = 1,
  query: string
): Promise<TmdbApiResponse<Movie>> {
  return fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(
      query
    )}&language=en-US&page=${page}`,
    configs
  ).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch movie by query!");
    return res.json() as Promise<TmdbApiResponse<Movie>>;
  });
}

export function getMovieVideos(id: number): Promise<Video[]> {
  return fetch(`${BASE_URL}/movie/${id}/videos?language=en-US`, configs)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch movie videos!");
      return res.json() as Promise<TmdbApiResponse<Video>>;
    })
    .then((data) => data.results);
}

export function getMovieImages(id: number): Promise<Image[]> {
  return fetch(`${BASE_URL}/movie/${id}/images`, configs)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch movie videos!");
      return res.json() as Promise<TmdbApiResponse<Image>>;
    })
    .then((data) => data.backdrops);
}

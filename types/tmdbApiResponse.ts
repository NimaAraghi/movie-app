export type TmdbApiResponse<T> = {
  page: number;
  results: T[];
  backdrops: T[];
  total_pages: number;
  total_results: number;
};

import InfiniteMovieList from "@/components/InfiniteMovieList";
import { getGenreById } from "@/lib/genres";
import { getMovies } from "@/lib/tmdb";
import React, { Suspense } from "react";

export default async function Popular({
  params,
}: {
  params: Promise<{ genreId: string }>;
}) {
  const { genreId } = await params;

  const genre = await getGenreById(Number(genreId));

  const initialData = await getMovies(1, "popularity.desc", Number(genreId));

  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <InfiniteMovieList
          title={genre || "Movies"}
          initialMovies={initialData.results}
          initialHasMore={initialData.page < initialData.total_pages}
          api_endpoint={`/api/movies/discover?genreId=${genreId}`}
        />
      </Suspense>
    </div>
  );
}

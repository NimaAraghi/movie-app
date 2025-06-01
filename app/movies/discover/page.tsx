import InfiniteMovieList from "@/components/InfiniteMovieList";
import { getMovies } from "@/lib/tmdb";
import React, { Suspense } from "react";

export default async function Popular() {
  const initialData = await getMovies(1);

  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <InfiniteMovieList
          title='Discover Movies'
          initialMovies={initialData.results}
          initialHasMore={initialData.page < initialData.total_pages}
          api_endpoint='/api/movies/discover'
        />
      </Suspense>
    </div>
  );
}

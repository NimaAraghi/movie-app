import Hero from "@/components/Hero";
import InfiniteMovieList from "@/components/InfiniteMovieList";
import Spinner from "@/components/Spinner";
import { getUpcomingMovies } from "@/lib/tmdb";
import React, { Suspense } from "react";

export default async function Popular() {
  const initialData = await getUpcomingMovies(1);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Hero movie={initialData.results[0]} />
        <InfiniteMovieList
          title='Popular Movies'
          initialMovies={initialData.results}
          initialHasMore={initialData.page < initialData.total_pages}
          api_endpoint='/api/movies/upcoming'
        />
      </Suspense>
    </div>
  );
}

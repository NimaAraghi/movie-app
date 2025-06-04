"use client";

import InfiniteMovieList from "@/components/InfiniteMovieList";
import { Movie } from "@/types/movie";
import { TmdbApiResponse } from "@/types/tmdbApiResponse";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [data, setData] = useState<TmdbApiResponse<Movie> | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/movies/search?q=${query}&page=1`);
      const initialData = await res.json();
      setData(initialData);
    }
    fetchData();
  }, [query]);

  return (
    <>
      {data && (
        <InfiniteMovieList
          api_endpoint={`/api/movies/search?q=${query}`}
          initialMovies={data?.results || []}
          initialHasMore={data ? data.page < data.total_pages : false}
          title={`Search results for: ${query}`}
        />
      )}
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}

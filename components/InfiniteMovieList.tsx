"use client";

import { Movie } from "@/types/movie";
import { useCallback, useEffect, useRef, useState } from "react";
import MoivesContainer from "./MoviesContainer";
import Hero from "./Hero";
import SortMovies from "./SortMovies";
import Spinner from "./Spinner";

interface InfiniteMovieListProps {
  initialMovies: Movie[];
  initialHasMore: boolean;
  title: string;
  api_endpoint: string;
}

export default function InfiniteMovieList({
  initialMovies,
  initialHasMore,
  title = "Movies",
  api_endpoint,
}: InfiniteMovieListProps) {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(initialHasMore);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState<string>("popular.desc");
  const observerTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchSortedMovies() {
      setIsLoading(true);
      try {
        const url = `${api_endpoint}${
          api_endpoint.includes("?") ? "&" : "?"
        }page=1&sort_by=${sortBy}`;
        const data = await fetch(url).then((res) => res.json());
        setMovies(data.results);
        setPage(1);
        setHasMore(data.total_pages > data.page);
        console.log(data.results);
      } catch (error) {
        console.error("Failed to load movies:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSortedMovies();
  }, [sortBy, api_endpoint]);

  const loadMoreMovies = useCallback(async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const url = `${api_endpoint}${
        api_endpoint.includes("?") ? "&" : "?"
      }page=1&sort_by=${sortBy}`;
      const data = await fetch(url).then((res) => res.json());

      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setPage(nextPage);
      setHasMore(data.total_pages > data.page);
    } catch (error) {
      console.error("Failed to load more movies:", error);
    } finally {
      setIsLoading(false);
    }
  }, [hasMore, isLoading, page, api_endpoint]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreMovies();
        }
      },
      {
        rootMargin: "200px",
      }
    );

    if (observerTargetRef.current) {
      observer.observe(observerTargetRef.current);
    }

    return () => {
      if (observerTargetRef.current) {
        observer.unobserve(observerTargetRef.current);
      }
    };
  }, [hasMore, isLoading, loadMoreMovies]);

  return (
    <div className='w-full'>
      <Hero movie={movies[0]} />
      <div className='flex justify-between items-center mb-4'>
        <h1 className='font-bold text-2xl'>{title}</h1>
        {api_endpoint.includes("discover") && (
          <SortMovies value={sortBy} onChange={setSortBy} />
        )}
      </div>
      <MoivesContainer movies={movies} />

      {isLoading && <Spinner />}

      {/* End of list message */}
      {!hasMore &&
        !isLoading &&
        movies.length > 0 && ( // Show only if no more, not loading, and some movies are shown
          <div className='text-center py-8 text-gray-500'>
            <p>You've reached the end of the list.</p>
          </div>
        )}
      {/* Invisible element for IntersectionObserver to watch */}
      {/* Only render this if there's potentially more data to load */}
      {hasMore && <div ref={observerTargetRef} className='h-1' />}
    </div>
  );
}

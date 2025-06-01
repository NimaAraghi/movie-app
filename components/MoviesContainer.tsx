import { Movie } from "@/types/movie";
import React from "react";
import MovieCard from "./MovieCard";

export default function MoviesContainer({ movies }: { movies: Movie[] }) {
  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6'>
      {/* Render all currently loaded movies */}
      {movies.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))}
    </div>
  );
}

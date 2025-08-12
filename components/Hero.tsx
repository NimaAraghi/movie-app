import { IMAGE_URL } from "@/lib/constants";
import { formatVoteAverage } from "@/lib/utils";
import { Movie } from "@/types/movie";
import Link from "next/link";
import React from "react";

export default function Hero({
  movie,
  more,
}: {
  movie: Movie;
  more?: boolean;
}) {
  return (
    <section className='relative min-h-[460px] sm:min-h-[560px] md:min-h-[660px] flex items-end rounded-2xl overflow-hidden shadow-lg mb-8'>
      <img
        src={`${IMAGE_URL}${movie.backdrop_path}`}
        alt={movie.title}
        className='absolute inset-0 w-full h-full object-cover object-center'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
      <div className='relative z-10 p-8 max-w-2xl text-white'>
        <h1 className='text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg'>
          {movie.title}
        </h1>
        <div className='flex items-center gap-4 mb-2 text-lg font-medium'>
          <span>{movie.release_date.split("-")[0]}</span>
          {more && (
            <span className='bg-green-600/80 px-2 py-1 rounded text-sm'>
              {formatVoteAverage(movie.vote_average)}/10
            </span>
          )}
        </div>
        {more && (
          <div className='mb-4 text-sm opacity-90'>
            {movie.genres.map((genre, idx) => (
              <Link
                className='text-blue-400'
                href={`/movies/discover/${genre.id}`}
                key={genre.id}
              >
                {genre.name}
                {idx < movie.genres.length - 1 && " • "}
              </Link>
            ))}
          </div>
        )}
        <p className='mb-6 line-clamp-4 text-base opacity-95'>
          {movie.overview}
        </p>
        {!more && (
          <Link
            href={`/movies/${movie.id}`}
            className='inline-block bg-white/90 text-black font-semibold px-5 py-2 rounded hover:bg-white transition'
          >
            More Info
          </Link>
        )}
      </div>
    </section>
  );
}

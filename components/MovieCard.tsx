"use client";

import Link from "next/link";
import { Movie } from "../types/movie";
import { IMAGE_URL } from "../lib/constants";
import { formatVoteAverage } from "../lib/utils";
import { useState } from "react";

export default function MovieCard({ data }: { data: Partial<Movie> }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Link
      href={`/movies/${data.id}`}
      className='flex flex-col rounded-2xl overflow-hidden'>
      <div
        className='relative'
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}>
        <img
          src={`${IMAGE_URL}${data.poster_path}`}
          alt={data.title || "Movie Poster"}
          className='aspect-[2/3] object-cover'
        />
        <div
          className={`absolute bottom-0 left-0 right-0 ${
            showInfo
              ? "bg-gradient-to-t from-black/80 to-transparent block"
              : "hidden"
          } p-4 text-white`}>
          <div className='flex items-center gap-2 mb-1 text-xs'>
            <span className='bg-zinc-700 px-2 py-0.5 rounded-full'>TMDB</span>
            <span className='bg-green-600 px-2 py-0.5 rounded-full'>
              {formatVoteAverage(data.vote_average)}/10
            </span>
          </div>
          <p className='text-[0.75rem] text-gray-300'>
            {data.release_date?.split("-")[0] || "Unknown"}
          </p>
        </div>
      </div>

      <div className='p-3'>
        <h3 className='text-sm font-medium text-gray-800 dark:text-gray-100 line-clamp-2'>
          {data.title}
        </h3>
      </div>
    </Link>
  );
}

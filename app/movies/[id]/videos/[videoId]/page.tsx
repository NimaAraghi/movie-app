import React from "react";
import ContentContainer from "@/components/ContentContainer";
import YoutubeVideo from "@/components/YoutubeVideo";
import { IMAGE_URL, YT_IMAGE_URL } from "@/lib/constants";
import { getMovieById, getMovieVideos } from "@/lib/tmdb";
import Link from "next/link";

export default async function Video({
  params,
}: {
  params: Promise<{ id: string; videoId: string }>;
}) {
  const { id, videoId } = await params;

  const movie = await getMovieById(Number(id));
  const videos = (await getMovieVideos(Number(id))).filter(
    (video) => video.site === "YouTube"
  );

  const video = videos.find((video) => video.id === videoId);

  return (
    <div className='flex flex-col lg:flex-row gap-4 h-screen'>
      <div className='w-full lg:w-3/5 aspect-video object-cover'>
        <YoutubeVideo video={video} />
        <div className='flex itmes-center gap-4 py-4 px-2 bg-accent rounded-b-sm'>
          <Link href={`/movies/${id}`}>
            <img
              className='size-16 rounded-full object-cover'
              src={`${IMAGE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
          <div className='my-auto'>
            <p className='text-xl font-bold'>{video?.name}</p>
            <Link
              href={`/movies/${id}`}
              className='font-semibold text-base text-blue-300'>
              {movie.title}
            </Link>
          </div>
        </div>
      </div>
      <ContentContainer title='Videos' contentLength={videos.length}>
        <div>
          {videos.map((video) => (
            <React.Fragment key={video.id}>
              <Link
                href={`/movies/${id}/videos/${video.id}`}
                className={`flex items-center py-1.5 px-4 gap-3 hover:bg-zinc-800 ${
                  video.id === videoId ? "bg-zinc-800" : ""
                }`}>
                <img
                  className='aspect-video object-cover w-40 rounded-sm'
                  src={`${YT_IMAGE_URL}${video.key}/0.jpg`}
                  alt={video.name}
                />
                <div>
                  <h2>{video.name}</h2>
                  <span className='text-gray-400'>{video.type}</span>
                </div>
              </Link>
              <hr />
            </React.Fragment>
          ))}
        </div>
      </ContentContainer>
    </div>
  );
}

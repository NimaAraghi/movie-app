import { ImageRow, VideoRow } from "@/components/ContentRow";
import Hero from "@/components/Hero";
import { getMovieById, getMovieImages, getMovieVideos } from "@/lib/tmdb";
import React from "react";

export const revalidate = 60 * 2;

export default async function Movie({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovieById(Number(id));
  const videos = await getMovieVideos(Number(id));
  const images = await getMovieImages(Number(id));

  return (
    <>
      <Hero movie={movie} more={true} />
      <VideoRow data={videos.slice(0, 8)} id={Number(id)} />
      <ImageRow data={images.slice(0, 8)} id={Number(id)} />
    </>
  );
}

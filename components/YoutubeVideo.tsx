"use client";

import { Video } from "@/types/video";
import Link from "next/link";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function YoutubeVideo({
  video,
}: {
  video: Partial<Video> | undefined;
}) {
  return (
    <LiteYouTubeEmbed
      id={video?.key || ""}
      title={video?.name || ""}
      noCookie={true}
      poster='maxresdefault'></LiteYouTubeEmbed>
  );
}

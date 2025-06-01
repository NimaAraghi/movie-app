import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Video } from "@/types/video";
import { Image } from "@/types/image";
import { IMAGE_URL, YT_IMAGE_URL } from "@/lib/constants";
import Title from "./Title";
import Link from "next/link";

export function VideoRow({ data, id }: { data: Video[]; id: number }) {
  return (
    <div>
      <Title title='Videos' url={`/movies/${id}/videos/${data[0].id}`} />
      <Carousel
        className='w-full'
        orientation='horizontal'
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className='basis-1/2 lg:basis-1/3 xl:basis-1/4'
            >
              <Link
                href={`/movies/${id}/videos/${item.id}`}
                className='flex flex-col gap-2'
              >
                <img
                  className='aspect-video object-cover'
                  src={`${YT_IMAGE_URL}${item.key}/0.jpg`}
                  alt={item.name}
                />
                <div className='flex flex-col items-start gap-2.5'>
                  <h2 className='text-lg font-semibold'>{item.name}</h2>
                  <p className='text-sm text-gray-500'>{item.type}</p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export function ImageRow({ data, id }: { data: Image[]; id: number }) {
  return (
    <div>
      <Title title='Images' url={`/movies/${id}/images/${data[0].file_path}`} />
      <Carousel
        className='w-full'
        orientation='horizontal'
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className='basis-1/2 lg:basis-1/3 xl:basis-1/4'
            >
              <Link href={`/movies/${id}/images/${item.file_path}`}>
                <img
                  className='aspect-video object-cover'
                  src={`${IMAGE_URL}${item.file_path}`}
                  alt={item.file_path}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

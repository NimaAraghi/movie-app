"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { IMAGE_URL } from "@/lib/constants";

export default function ImageViewer({
  id,
  images,
  imageId,
}: {
  id: string;
  images: { file_path: string }[];
  imageId: string;
}) {
  const router = useRouter();
  const currentIndex = images.findIndex(
    (img) => img.file_path === `/${imageId}`
  );
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className='w-full relative'>
      <img src={`${IMAGE_URL}${images[currentIndex]?.file_path}`} alt='' />
      <Button
        disabled={currentIndex === 0}
        onClick={() =>
          router.push(`/movies/${id}/images${images[prevIndex].file_path}`)
        }
        className='absolute top-1/2 left-0 ml-5 rounded-full cursor-pointer'
        variant='secondary'
        size='icon'>
        <ChevronLeft />
      </Button>
      <Button
        onClick={() =>
          router.push(`/movies/${id}/images${images[nextIndex].file_path}`)
        }
        className='absolute top-1/2 right-0 mr-5 rounded-full cursor-pointer'
        variant='secondary'
        size='icon'
        disabled={currentIndex === images.length - 1}>
        <ChevronRight />
      </Button>
    </div>
  );
}

import ContentContainer from "@/components/ContentContainer";
import ImageViewer from "@/components/ImageViewer";
import { IMAGE_URL } from "@/lib/constants";
import { getMovieById, getMovieImages } from "@/lib/tmdb";
import Link from "next/link";
// ...other imports...

export default async function Image({
  params,
}: {
  params: Promise<{ id: string; imageId: string }>;
}) {
  const { id, imageId } = await params;
  const movie = await getMovieById(Number(id));
  const images = await getMovieImages(Number(id));

  return (
    <div className='flex flex-col lg:flex-row gap-4 h-screen'>
      <div className='w-full lg:w-3/5 aspect-video object-cover'>
        <ImageViewer id={id} images={images} imageId={imageId} />
        <div className='flex itmes-center gap-4 py-4 px-2 bg-accent rounded-b-sm'>
          <Link href={`/movies/${id}`}>
            <img
              className='size-16 rounded-full object-cover'
              src={`${IMAGE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
          <div className='my-auto'>
            <p className='text-xl font-bold'>
              Images of &quot;{movie.title}&quot;
            </p>
            <Link
              href={`/movies/${id}`}
              className='font-semibold text-base text-blue-300'
            >
              {movie.title}
            </Link>
          </div>
        </div>
      </div>
      <ContentContainer title='Images' contentLength={images.length}>
        <div className='grid grid-cols-2 p-2 gap-2 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-3'>
          {images.map((image) => (
            <Link
              href={`/movies/${id}/images/${image.file_path}`}
              key={image.file_path}
            >
              <img
                className={`aspect-video object-cover rounded-md ${
                  image.file_path === `/${imageId}`
                    ? "border-2 border-blue-500"
                    : ""
                }`}
                src={`${IMAGE_URL}${image.file_path}`}
                alt={movie.title}
              />
            </Link>
          ))}
        </div>
      </ContentContainer>
    </div>
  );
}

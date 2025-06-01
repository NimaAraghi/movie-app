import { Movie } from "../types/movie";
import MovieCard from "./MovieCard";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function Row({
  movies,
  title,
}: {
  movies: Movie[];
  title: string;
}) {
  return (
    <div>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>
        {title}
      </h1>
      <Carousel
        className='w-full'
        orientation='horizontal'
        opts={{
          align: "start",
          loop: true,
        }}>
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem
              key={movie.id}
              className='basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6'>
              <MovieCard key={movie.id} data={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

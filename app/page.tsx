import Hero from "@/components/Hero";
import Row from "../components/Row";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../lib/tmdb";

export const revalidate = 43200;

export default async function HomePage() {
  const [popularMovies, topRated, upComing] = await Promise.all([
    getPopularMovies(1),
    getTopRatedMovies(1),
    getUpcomingMovies(1),
  ]);

  return (
    <div className='flex flex-col p-2'>
      <Hero movie={popularMovies.results[0]} more={false} />
      <Row movies={popularMovies.results} title='Popular' />
      <Row movies={topRated.results} title='Top Rated' />
      <Row movies={upComing.results} title='Upcoming' />
    </div>
  );
}

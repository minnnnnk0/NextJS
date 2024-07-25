import { Suspense } from 'react';
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h2>Movie Detail Page</h2>

      <h4>Movie Info</h4>
      <Suspense fallback={<h2>Loading Movie Info</h2>}>
        <MovieInfo id={id} />
      </Suspense>

      <h4>Movie Videos</h4>
      <Suspense fallback={<h2>Loading Movie Videos</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

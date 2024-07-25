import { APP_URL } from '../../../(home)/page';

async function getMovie(id: string) {
  console.log(`Fetching Movie data`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${APP_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching Movie data`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${APP_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return <h1>{movie.title}</h1>;
}

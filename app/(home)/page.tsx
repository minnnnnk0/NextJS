import Navigation from '../../components/navigation';

export const metadata = {
  title: 'Home',
};

const APP_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(APP_URL);
  const json = await response.json();
  return json;
}
export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      <Navigation />
      <div>{JSON.stringify(movies)}</div>
    </div>
  );
}

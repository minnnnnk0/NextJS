import styles from '../styles/home.module.css';
import Movie from '../../components/movie';
import { APP_URL } from '../constants';

export const metadata = {
  title: 'Home',
};

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(APP_URL);
  const json = await response.json();
  return json;
}
export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}

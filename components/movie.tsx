'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../app/styles/movie.module.css';

interface IMoveProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMoveProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      {/* 리소스 미리 불러오기를 통해 사용자 경험 향상 ( 과부하 방지를 위해 특정 페이지, 컴포넌트에만 활용 ) */}
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}

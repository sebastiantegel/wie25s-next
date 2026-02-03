import Image from "next/image";
import { Movie } from "../models/Movie";
import Link from "next/link";

type ShowMovieProps = {
  movie: Movie;
};

export const ShowMovie = ({ movie }: ShowMovieProps) => {
  return (
    <div className="w-75">
      <h3>{movie.Title}</h3>
      <Image src={movie.Poster} alt={movie.Title} width={200} height={300} />
      <Link href={`/movies/${movie.imdbID}`}>Läs mer</Link>
    </div>
  );
};

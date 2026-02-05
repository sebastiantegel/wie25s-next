import { Movie } from "../models/Movie";

type MoviesPresentationProps = {
  movies: Movie[] | undefined;
};

export const MoviesPresentation = ({ movies }: MoviesPresentationProps) => {
  return (
    <>
      {movies && (
        <div className="flex flex-col items-center mt-8">
          {movies.map((movie) => (
            <div key={movie.imdbID}>{movie.Title}</div>
          ))}
        </div>
      )}
    </>
  );
};

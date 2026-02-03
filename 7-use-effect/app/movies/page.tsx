"use client";

import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import { getMovies } from "../services/movieService";
import { ShowMovie } from "../components/ShowMovie";

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [hasFetched, setHasFetched] = useState<boolean>(false);

  useEffect(() => {
    console.log("useEffect körs");
    if (hasFetched) return;

    const getData = async () => {
      const data = await getMovies();
      setMovies(data);
      setHasFetched(true);
    };

    getData();
  });

  return (
    <>
      <div className="flex flex-wrap gap-8">
        {movies.map((movie) => (
          <ShowMovie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Movies;

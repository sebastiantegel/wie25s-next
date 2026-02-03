"use client";

import { Movie } from "@/app/models/Movie";
import { getMovieById } from "@/app/services/movieService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();
  const [hasFetched, setHasFetched] = useState<boolean>(false);

  useEffect(() => {
    if (hasFetched) return;

    const getData = async () => {
      if (id) {
        const movie = await getMovieById(id.toString());
        setMovie(movie);
        setHasFetched(true);
      }
    };

    getData();
  });

  return (
    <>
      <div>
        <h2>{movie?.Title}</h2>
        <p>{movie?.imdbID}</p>
      </div>
    </>
  );
};

export default MovieDetails;

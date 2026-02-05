"use client";

import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { OmdbResponse } from "../models/OmdbResponse";
import { Movie } from "../models/Movie";
import { MovieSearch } from "../components/MovieSearch";
import { getMovies } from "../services/movieService";
import { MoviesPresentation } from "../components/MoviesPresentation";

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>();

  const searchMovies = async (titleToSearchFor: string) => {
    // Sök efter filmer
    const movies = await getMovies(titleToSearchFor);

    // Uppdatera state
    setMovies(movies);
  };

  // Hämta filmer
  const { loading, data } = useFetch<OmdbResponse>(
    "http://omdbapi.com?apikey=416ed51a&s=star"
  );

  if (loading) {
    return <h1>Laddar...</h1>;
  }

  return (
    <>
      <MovieSearch searchMovies={searchMovies}></MovieSearch>
      <MoviesPresentation movies={movies ?? data?.Search}></MoviesPresentation>
    </>
  );
};

export default Movies;

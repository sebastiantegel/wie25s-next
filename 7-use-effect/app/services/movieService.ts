import { Movie } from "../models/Movie";
import { OmdbResponse } from "../models/OmdbResponse";

export const getMovies = async () => {
  const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=star");
  const data: OmdbResponse = await response.json();

  return data.Search;
};

export const getMovieById = async (id: string) => {
  const response = await fetch(`https://omdbapi.com/?apikey=416ed51a&i=${id}`);
  const data: Movie = await response.json();

  return data;
};

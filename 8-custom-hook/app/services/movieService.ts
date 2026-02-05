import { OmdbResponse } from "../models/OmdbResponse";

export const getMovies = async (title: string) => {
  const response = await fetch("http://omdbapi.com?apikey=416ed51a&s=" + title);
  const data: OmdbResponse = await response.json();

  return data.Search;
};

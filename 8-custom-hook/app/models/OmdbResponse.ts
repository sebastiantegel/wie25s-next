import { Movie } from "./Movie";

export type OmdbResponse = {
  Search: Movie[];
  totalResult: string;
  Response: string;
};

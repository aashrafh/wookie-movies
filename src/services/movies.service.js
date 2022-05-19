import { api } from "../api";

const getMovies = () => {
  return api.get("/movies");
};

const searchMovies = (searchVal) => {
  return api.get(`/movies?q=${searchVal}`);
};

export const moviesService = {
  getMovies,
  searchMovies,
};

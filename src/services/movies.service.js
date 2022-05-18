import { api } from "../api";

const getMovies = () => {
  return api.get("/movies");
};

export const moviesService = {
  getMovies,
};

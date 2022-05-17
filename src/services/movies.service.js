import { api } from "../api";

const getMovies = () => {
  return api.get("/moveies");
};

export const moviesService = {
  getMovies,
};

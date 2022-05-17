import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { moviesService } from "../services/movies.service";

const LOADING = "LOADING";
const SUCCESS = "SUCCESS";
const FAILED = "FAILED";

const initialState = {
  movies: [],
  genres: [],
  status: SUCCESS,
  error: null,
};

const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    updateMovies: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        movies: payload.movies,
      };
    },
  },
});

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  const res = await moviesService.getMovies();
  if (res.status !== 200) {
    return {
      msg: "Failed to fetch the movies",
    };
  }

  const genres = [...new Set(res.data.movies.flatMap((movie) => movie.genres))];
  const moviesByGenre = genres.map((genre) => {
    const movies = res.data.movies.filter((movie) =>
      movie.genres.includes(genre)
    );
    return { genre, movies };
  });

  return { genres, moviesByGenre };
});

export const { updateMovies } = movies.actions;
export default movies.reducer;

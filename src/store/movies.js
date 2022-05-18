import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { moviesService } from "../services/movies.service";

const PENDING = "LOADING";
const FULLFILLED = "SUCCESS";
const REJECTED = "FAILED";

const initialState = {
  movies: [],
  genres: [],
  status: PENDING,
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
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state = {
        ...state,
        status: PENDING,
      };
    });
    builder.addCase(getMovies.fulfilled, (state) => {
      state = {
        ...state,
        status: FULLFILLED,
        movies: payload.moviesByGenre,
        genres: payload.genres,
      };
    });
    builder.addCase(getMovies.rejected, (state) => {
      state = {
        ...state,
        status: REJECTED,
        error: payload?.msg || state.error,
      };
    });
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

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { moviesService } from "../services/movies.service";

export const STATUS = {
  PENDING: "PENDING",
  FULLFILLED: "FULLFILLED",
  REJECTED: "REJECTED",
};

const initialState = {
  movies: [],
  genres: [],
  status: STATUS.PENDING,
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
        movies: payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      const { payload } = action;
      state.status = STATUS.FULLFILLED;
      state.movies = payload.moviesByGenre;
      state.genres = payload.genres;
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      const { payload } = action;
      state.status = STATUS.REJECTED;
      state.error = payload?.msg || state.error;
    });
  },
});

export const getMoviesByGenre = (genres, resMovies) => {
  return genres.map((genre) => {
    const movies = resMovies.filter((movie) => movie.genres.includes(genre));
    return { genre, movies };
  });
};

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  const res = await moviesService.getMovies();
  if (res.status !== 200) {
    return {
      msg: "Failed to fetch the movies",
    };
  }

  const genres = [...new Set(res.data.movies.flatMap((movie) => movie.genres))];
  const moviesByGenre = getMoviesByGenre(genres, res.data.movies);

  return { genres, moviesByGenre };
});

export const { updateMovies } = movies.actions;
export default movies.reducer;

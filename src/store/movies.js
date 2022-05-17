import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    movies: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.movies = action.payload;
    },
  },
});

const { loginSuccess, logoutSuccess } = movies.actions;

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(loginSuccess({ username }));
    } catch (e) {
      return console.error(e.message);
    }
  };

export default movies.reducer;

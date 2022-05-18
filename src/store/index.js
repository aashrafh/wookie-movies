import { configureStore } from "@reduxjs/toolkit";
import movies from "./movies";

export const store = configureStore({
  reducer: { movies },
});

export default store;

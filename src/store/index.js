import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import movies from "./movies";

const reducer = combineReducers({ movies });

export const store = configureStore({
  reducer,
});

export default store;

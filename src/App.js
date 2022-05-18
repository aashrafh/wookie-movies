import React, { useEffect } from "react";
import { getMovies } from "./store/movies";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Details from "./pages/Details/Details";

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);
  return (
    <>
      <Details />
    </>
  );
}

export default App;

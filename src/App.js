import React, { useEffect } from "react";
import { getMovies } from "./store/movies";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Details from "./pages/Details";
import Home from "./pages/Home";

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
      <div className="app">
        {/* <Details /> */}
        <Home />
      </div>
    </>
  );
}

export default App;

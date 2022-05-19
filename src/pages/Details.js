import React from "react";
import { useSelector } from "react-redux";
import Poster from "../components/Poster";

const Details = () => {
  const state = useSelector((state) => state.movies);
  const movie = state?.movies[0]?.movies[0];

  return (
    <div className="container">
      <div className="movie_contianer">
        <Poster movie={movie} />
      </div>
    </div>
  );
};

export default Details;

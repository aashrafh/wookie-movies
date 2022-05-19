import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Poster from "../components/Poster";
import { useParams } from "react-router-dom";

const Details = () => {
  const { slug } = useParams();
  const state = useSelector((state) => state.movies);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    state.movies.map((moviesByGenre) =>
      moviesByGenre.movies.filter(
        (movie) => movie.slug === slug && setMovie(movie)
      )
    );
  }, [slug, state]);

  return (
    <div className="container">
      <div className="movie_contianer">
        <Poster movie={movie} />
      </div>
    </div>
  );
};

export default Details;

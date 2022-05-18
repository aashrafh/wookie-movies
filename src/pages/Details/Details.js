import React from "react";
import { useSelector } from "react-redux";
import styles from "./Details.module.css";

const Details = () => {
  const state = useSelector((state) => state.movies);
  const movie = state?.movies[0]?.movies[0];
  console.log(movie);
  return (
    <div class="container" style={{ margin: "5rem" }}>
      <div class="movie_card">
        <div class="movie_img">
          <img src={movie?.backdrop} alt="Movie Backdrop" />
        </div>
        <div class="movie">
          <div className="movie_header">
            <div className="title">
              <h3 class="movie_title">{`${movie?.title}`}</h3>
              <h4 class="movie_rating">
                {movie?.imdb_rating}
                <i>/</i>10 <span>IMDb</span>
              </h4>
            </div>
            <div className="stars">
              <span class="fa fa-star fa-3x checked"></span>
              <span class="fa fa-star fa-3x checked"></span>
              <span class="fa fa-star fa-3x checked"></span>
              <span class="fa fa-star fa-3x"></span>
              <span class="fa fa-star fa-3x"></span>
            </div>
          </div>

          <div class="movie_info">
            <span>{new Date(movie?.released_on).getFullYear()}</span>
            <span>{movie?.length}</span>
            <span>{movie?.director}</span>
          </div>

          <div class="movie_cast">
            <span>Cast: {movie?.cast.join(", ")}</span>
          </div>

          <div class="movie_description">
            <p>Movie Description: {movie?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

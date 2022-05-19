import React from "react";
import { useSelector } from "react-redux";

const Details = () => {
  const state = useSelector((state) => state.movies);
  const movie = state?.movies[0]?.movies[0];
  console.log(movie);
  return (
    <div className="container">
      <div className="movie_contianer">
        <div className="poster">
          <img src={movie?.backdrop} alt={movie?.title} />
          <div className="movie_details">
            <div className="movie_header">
              <div className="movie_title">
                <h2>{movie?.title}</h2>
                <strong>({movie?.imdb_rating}/10)</strong>
              </div>
              <div className="movie_rating">
                <span
                  className={`fa fa-star fa-3x ${
                    movie?.imdb_rating >= 2 && "checked"
                  }`}
                ></span>
                <span
                  className={`fa fa-star fa-3x ${
                    movie?.imdb_rating >= 4 && "checked"
                  }`}
                ></span>
                <span
                  className={`fa fa-star fa-3x ${
                    movie?.imdb_rating >= 6 && "checked"
                  }`}
                ></span>
                <span
                  className={`fa fa-star fa-3x ${
                    movie?.imdb_rating >= 8 && "checked"
                  }`}
                ></span>
                <span
                  className={`fa fa-star fa-3x ${
                    movie?.imdb_rating >= 10 && "checked"
                  }`}
                ></span>
              </div>
            </div>
            <div className="movie_info">
              <span>{new Date(movie?.released_on).getFullYear()}</span>
              <span>{movie?.length}</span>
              <span>{movie?.director}</span>
            </div>
            <p>Cast: {movie?.cast.join(", ")}</p>
            <p>Movie Description: {movie?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

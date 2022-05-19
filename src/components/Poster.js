import React from "react";

const Poster = ({ movie }) => {
  return (
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
  );
};

export default Poster;

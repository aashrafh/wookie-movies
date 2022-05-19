import React from "react";

const Poster = ({ movie }) => {
  return (
    <div className="poster">
      <img src={movie?.backdrop} alt={movie?.title} />
      <div className="movie_details">
        <div className="movie_header">
          <div className="movie_title">
            <h3>{movie?.title}</h3>
            <p>({movie?.imdb_rating}/10)</p>
          </div>
          <div className="movie_rating">
            <span
              className={`fa fa-star fa-2x ${
                movie?.imdb_rating >= 2 && "checked"
              }`}
            ></span>
            <span
              className={`fa fa-star fa-2x ${
                movie?.imdb_rating >= 4 && "checked"
              }`}
            ></span>
            <span
              className={`fa fa-star fa-2x ${
                movie?.imdb_rating >= 6 && "checked"
              }`}
            ></span>
            <span
              className={`fa fa-star fa-2x ${
                movie?.imdb_rating >= 8 && "checked"
              }`}
            ></span>
            <span
              className={`fa fa-star fa-2x ${
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

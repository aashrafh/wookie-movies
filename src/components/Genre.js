import React from "react";
import { Link } from "react-router-dom";

const Genre = ({ moviesByGenre }) => {
  return (
    <section className="genre_section">
      <header>
        <h2>{moviesByGenre.genre}</h2>
      </header>
      <ul className="horizontal_media_scroller">
        {moviesByGenre.movies.map((movie, index) => {
          return (
            <li key={index}>
              <Link to={`/detail/${movie.slug}`} key={index}>
                <figure>
                  <picture>
                    <img
                      alt={movie?.title}
                      loading="lazy"
                      src={movie?.poster}
                    />
                  </picture>
                  <figcaption>{movie?.title}</figcaption>
                </figure>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Genre;

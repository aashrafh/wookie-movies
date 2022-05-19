import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state.movies);
  return (
    <>
      {state.movies.map((moviesByGenre) => {
        return (
          <section className="genre_section">
            <header>
              <h2>{moviesByGenre.genre}</h2>
            </header>
            <ul class="horizontal_media_scroller">
              {moviesByGenre.movies.map((movie) => {
                return (
                  <li>
                    <a href="#">
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
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </>
  );
};

export default Home;

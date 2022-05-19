import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { moviesService } from "../services/movies.service";
import { getMoviesByGenre, updateMovies } from "../store/movies";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.movies);
  const [searchVal, setSearchVal] = useState("");

  const getMovies = async (value) => {
    const res = await moviesService.searchMovies(value.toLowerCase().trim());

    if (location.pathname !== "/") navigate("/");

    const genres = [
      ...new Set(res.data.movies.flatMap((movie) => movie.genres)),
    ];
    const movies = state.genres && getMoviesByGenre(genres, res.data.movies);

    dispatch(updateMovies(movies));
  };

  const handleSearch = async (e) => {
    setSearchVal(e.target.value);
    if (e.target.value === "") getMovies("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getMovies(searchVal);
  };

  return (
    <header className="wookie_header">
      <Link to="/" className="logo">
        WOOKIE MOVIES
      </Link>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search"
          type="search"
          placeholder="Search..."
          autoComplete="off"
          value={searchVal}
          onChange={handleSearch}
        />
      </form>
    </header>
  );
};

export default Header;

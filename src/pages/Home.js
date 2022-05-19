import React from "react";
import { useSelector } from "react-redux";
import Genre from "../components/Genre";

const Home = () => {
  const state = useSelector((state) => state.movies);
  return (
    <>
      {state.movies.map((moviesByGenre, index) => {
        return <Genre moviesByGenre={moviesByGenre} key={index} />;
      })}
    </>
  );
};

export default Home;

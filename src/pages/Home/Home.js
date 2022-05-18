import React from "react";
import { useSelector } from "react-redux";
import styles from "./Home.module.css";

const Home = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <>
      <ul>{movies.movies.map((item, index) => {})}</ul>
    </>
  );
};

export default Home;

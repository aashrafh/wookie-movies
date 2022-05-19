import React, { useEffect } from "react";
import Header from "./Header";
import { getMovies } from "../store/movies";
import { useDispatch } from "react-redux";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

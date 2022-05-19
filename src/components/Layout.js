import React, { useEffect } from "react";
import { getMovies } from "../store/movies";
import { useDispatch } from "react-redux";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return <div>{children}</div>;
};

export default Layout;

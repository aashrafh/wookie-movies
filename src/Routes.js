import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

const MovieRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/detail/:slug" element={<Details />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default MovieRoutes;

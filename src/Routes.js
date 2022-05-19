import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

const MovieRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/detail/:slug" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MovieRoutes;

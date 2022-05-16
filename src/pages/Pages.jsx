import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cusine from "./Cusine";
import SearchedPage from "./SearchedPage";
import RecipeDetails from "./RecipeDetails";

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/cusine/:type" element={<Cusine />}></Route>
      <Route
        exact
        path="/searchedPage/:search"
        element={<SearchedPage />}
      ></Route>
      <Route
        exact
        path="/recipe/:name"
        element={<RecipeDetails />}
      ></Route>
    </Routes>
  );
};

export default Pages;

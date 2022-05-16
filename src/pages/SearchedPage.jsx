import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const SearchedPage = () => {
  const params = useParams();
  const [searchedResult, setSearchedResult] = useState([]);

  const getSearchedResults = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=fb23a2ff18ae49159c68ea97b3343a21&query=${name}`
    );
    const recipes = await data.json();
    setSearchedResult(recipes.results);
  };

  useEffect(() => {
    getSearchedResults(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedResult.map((result) => {
        return (
          <Card key={result.id}>
            <Link to={"/recipe/" + result.id}>
              <img src={result.image} alt="" />
              <h4>{result.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default SearchedPage;

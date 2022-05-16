import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [inputData, setInputData] = useState("");
  const navigate = useNavigate();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // after submition, want to render another page that will contain search result
    // till now was using Link for that but to redirect from a function we have to use useNavigate
    navigate("/searchedPage/" + inputData);
  };

  return (
    <FormStyle onSubmit={formSubmitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          type="text"
          onChange={(event) => setInputData(event.target.value)}
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  // div {
  //   width: 70%;
  //   position: relative;
  //   margin: 2rem 30rem;
  // }
  input {
    border: none;
    // background: linear-gradient(35deg, #494949, #313131);
    background: #aaa;
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem 3rem;
    border: none;
    border-radius: 0.8rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

export default Search;

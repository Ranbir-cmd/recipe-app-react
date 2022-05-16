import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const RecipeDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchRecipeDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=fb23a2ff18ae49159c68ea97b3343a21`
    );
    const detailData = await data.json();
    console.log(detailData);
    setDetails(detailData);
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div className="img-wrapper">
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  h2 {
    margin-bottom: 2rem;
  }
  img {
    width: 25rem;
    border-radius: 1rem;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 0.9rem;
    line-height: 2.5rem;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  @media (max-width: 660px) {
    flex-direction: column;
    img {
      width: 15rem;
    }
    .img-wrapper {
      justify-content: center;
      align-items: center;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #333;
  margin-right: 1rem;
  margin-bottom: 2rem;
  font-weight: 600;
  height: 3rem;
`;

const Info = styled.div`
  margin-left: 10rem;
  p {
    color: #333;
    letter-spacing: 0.5px;
    line-height: 1.5;
    font-size: 0.9rem;
  }
`;

export default RecipeDetails;

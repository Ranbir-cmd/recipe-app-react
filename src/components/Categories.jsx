import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <List>
      {/*  SLink is styled component of NavLink  */}
      <SLink to={"/cusine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cusine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cusine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cusine/Japanese"}>
        <GiChopsticks />
        <h4>Japanesse</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0rem;
`;

// because NavLink is a react component
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 50%;
  margin-right: 2rem;
  background: linear-gradient(35deg, #494949, #313131);
  width: 4rem;
  height: 4rem;
  cursor: pointer;

  h4 {
    color: #fff;
    font-size: 0.5rem;
  }
  svg {
    color: #fff;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

export default Categories;

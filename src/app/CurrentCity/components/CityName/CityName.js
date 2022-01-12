import React from "react";
import styled from "styled-components";

const Name = styled.h1`
  margin: 1rem 0 0 0;
  font-size: 2.3rem;
  font-weight: 500;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: "";
    width: 60%;
    border-bottom: 3px solid white;
    margin-top: 0.75rem;
  }
`;

const CityName = ({ data }) => {
  if (!data) {
    return "Loading...";
  }
  return <Name>{data.name}</Name>;
};

export default CityName;

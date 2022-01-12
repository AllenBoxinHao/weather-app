import React from "react";
import styled from "styled-components";
import Temperature from "../../../../components/Temperature";
import Metas from "./components/Metas";

const Heading = styled.p`
  font-size: 5rem;
  text-align: center;
  margin: 0;
  color: white;
`;

const Visibility = styled.p`
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 5px;
  margin: 0.25rem 0 0 0;
  color: rgb(255, 255, 255, 70%);
`;

const Weather = () => (
  <div>
    <Heading>
      <Temperature>20.05</Temperature>
    </Heading>
    <Visibility>Clear</Visibility>
    <Metas />
  </div>
);

export default Weather;

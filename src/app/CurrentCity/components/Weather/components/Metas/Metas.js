import React from "react";
import styled from "styled-components";
import Meta from "./components/Meta";

const Container = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-evenly;
  font-weight: 500;
`;

const Divider = styled.div`
  width: 2px;
  background-color: rgb(255, 255, 255, 70%);
`;

const Metas = ({ humidity, wind }) => (
  <Container>
    <Meta title="Humidity" value={`${humidity} %`} />
    <Divider />
    <Meta title="Wind" value={`${wind} K/M`} />
  </Container>
);

export default Metas;

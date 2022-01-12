import React, { useState } from "react";
import styled from "styled-components";
import Weather from "./components/Weather/Weather";
import CityName from "./components/CityName/CityName";

const Container = styled.div`
  background-image: url(https://i.imgur.com/GhQZhaO.jpg);
  background-size: cover;
  padding: 64px 96px;
  display: flex;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  justify-content: space-between;
  align-items: flex-start;
`;

const CurrentCity = () => {
  const [data, setData] = useState();

  return (
    <Container>
      <Weather data={data} setData={setData} />
      <CityName data={data}/>
    </Container>
  );
};

export default CurrentCity;

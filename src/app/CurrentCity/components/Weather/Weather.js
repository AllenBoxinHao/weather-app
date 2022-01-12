import axios from "axios";
import React, { useEffect } from "react";
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

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const MELBOURNE_CITY_ID = "2158177";
const APP_ID = "5cfdb828e336d979d9646c127da93a0f";
const UNIT = "metric";

const Weather = ({ data, setData }) => {
  useEffect(() => {
    const getCurrentCityWeather = async () => {
      const response = await axios.get("/weather", {
        baseURL: BASE_URL,
        params: {
          id: MELBOURNE_CITY_ID,
          appid: APP_ID,
          units: UNIT,
        },
      });

      setData(response.data);
    };
    getCurrentCityWeather();
  }, [setData]);

  if (!data) {
    return "Loading...";
  }

  console.log(data);

  return (
    <div>
      <Heading>
        <Temperature>{data.main.temp}</Temperature>
      </Heading>
      <Visibility>{data.weather[0].main}</Visibility>
      <Metas wind={data.wind.speed} humidity={data.main.humidity} />
    </div>
  );
};

export default Weather;

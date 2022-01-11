import React from "react";
import styled from "styled-components";
import CurrentCity from "../CurrentCity";

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(https://wallpaperaccess.com/full/2629319.png);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: white;
  width: 850px;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <CurrentCity />
      </Container>
    </Wrapper>
  );
}

export default App;

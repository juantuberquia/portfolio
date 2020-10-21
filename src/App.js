import React, { Fragment } from "react";
import Headering from "./components/Headering";
import About from "./components/About";
import styled from "@emotion/styled";
import img from "./images/fondo.jpg";

const BackgroundImg = styled.img`
  height: 100vh;
  filter: opacity(0.4);
  position: absolute;
  width: 100%;
`;

function App() {
  return (
    <Fragment>
      <BackgroundImg src={img} alt="imgBack" />
      <Headering />
      <About />
    </Fragment>
  );
}

export default App;

import React from "react";
import Headering from "./components/Headering";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Contact from "./components/Contact";
import styled from "@emotion/styled";
import img from "./images/fondo.jpg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const BackgroundImg = styled.div`
  height: 100vh;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  filter: opacity(0.4);
  position: absolute;
  width: 100%;
  z-index: -10;
`;

function App() {
  return (
    <Router>
      <BackgroundImg />
      <Headering />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

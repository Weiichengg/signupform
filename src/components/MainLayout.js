import React from "react";
import styled from "styled-components";
import Page1 from "./Page1.js";
import Page2 from "./Page2.js";
import Page3 from "./Page3.js";
import Page4 from "./Page4.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const BackGround = styled.div`
  border-radius: 5px;
  background-color: lightblue;
  margin: auto;
  width: 500px;
`;
//display: flex;

const Header = styled.h2`
  color: black;
  text-align: center;
  justify-content: center;
`;

const MainLayout = () => (
  <BackGround>
    <Header>Welcome to DBS</Header>
    <Router>
      <Switch>
        <Route path="/page4" component={Page4} />
        <Route path="/page3" component={Page3} />
        <Route path="/page2" component={Page2} />
        <Route path="/" component={Page1} />
      </Switch>
    </Router>
  </BackGround>
);

export default MainLayout;

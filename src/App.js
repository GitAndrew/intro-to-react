import React from "react";
import { Home, Movie } from "pages";
import GlobalStyle from "./globalStyles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies/:id" component={Movie} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;

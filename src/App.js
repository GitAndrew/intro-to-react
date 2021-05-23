import React from "react";
import { Home, Movie, NotFound } from "pages";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies/:id" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

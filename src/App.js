import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Calculation from "./Components/Calculation/Calculation";
import Main from "./Components/Main/Main";
import Settings from "./Components/Settings/Settings";

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/calculation">
        <Calculation />
      </Route>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;

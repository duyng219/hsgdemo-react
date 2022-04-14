import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Content from "../pages/Content";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Item from "../pages/Item";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/content/:id" component={Item} />
      <Route path="/about" component={About} />
      <Route path="/content" component={Content} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;

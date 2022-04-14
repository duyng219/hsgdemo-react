import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
// import Item from "../pages/Item";
import CatalogDetail from "../pages/CatalogDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/catalog/:id" component={CatalogDetail} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;

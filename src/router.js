import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import PostForm from "./components/submit";
import AuthCallback from "./authCallback";

const Routes = () => {
  return (
    <Switch>
      <Route path="/auth/callback" exact component={AuthCallback} />
      <Route path="/submit" component={PostForm} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;

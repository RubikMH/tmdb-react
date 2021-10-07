import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Movie from "./Movies/Movie";

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/movie" component={Movie} />
    </Switch>
  );
}

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Movie from "./Movies/Movie";
import SearchPosts from "../Component/SerchPosts/SearchPosts";

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie/:id" component={Movie} />
      <Route exact path="/search/:query" component={SearchPosts} />
    </Switch>
  );
}

import React from "react";
import { Input } from "antd";
import "./header.css";

export default function Header() {
  const { Search } = Input;
  return (
    <div className="header">
      <div className="title">
        <h2>Welcome.</h2>
        <h3>
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
      </div>
      <div className="search">
        <Search
          placeholder="Search for a movie, tv show, person......"
          enterButton="Search"
          size="large"
          // loading
        />
      </div>
    </div>
  );
}

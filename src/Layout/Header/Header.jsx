import React from "react";
import { Button, Input } from "antd";
import "./header.css";
// import { useMoviesDB } from "../../hooks/useMoviesDB";
// import axios from "axios";

import { useHistory, useLocation } from "react-router";
import HandelHead from "../../Component/helpers/HandelUrl";
import { Link } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  // const params = useParams();

  function handelSerach(params) {
    history.push(`/search/${params}`);
  }

  const location = useLocation();
  // console.log(location.pathname);

  const { Search } = Input;
  // const temp = HandelHead(location.pathname);
  // console.log(temp);

  return (
    <div className="header">
      <div className="btn-login">
        <Link to="/login">
          <Button>login</Button>
        </Link>
      </div>
      {location.pathname === "/" ? (
        <div className="title">
          <h2>Welcome.</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
      ) : (
        // <h3> results : {`${HandelHead(location.pathname)}`}</h3>
        <h3> results : {`${HandelHead(location.pathname)}`}</h3>
      )}

      <div className="search">
        <Search
          placeholder="Search for a movie, tv show, person......"
          enterButton="Search"
          size="large"
          // loading
          onSearch={handelSerach}
        />
      </div>
    </div>
  );
}

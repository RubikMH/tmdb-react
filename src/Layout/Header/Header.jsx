import React from "react";
import { Button, Input } from "antd";
import "./header.css";
import { useSelector } from "react-redux";
import userImg from "./user.svg";

import { useHistory, useLocation } from "react-router";

import { Link } from "react-router-dom";

import NavBar from "../../Component/Navbar/Navbar";
import Logo from "../../Component/Logo/Logo";

export default function Header() {
  const state = useSelector((state) => state.login);
  const history = useHistory();

  function handelSerach(params) {
    history.push(`/search/${params}`);
  }

  const location = useLocation();

  const { Search } = Input;

  return (
    <div className="header">
      <div className="nav">
        <Link to="/">
          <Logo src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
        </Link>
        <NavBar />
        {state.logined === true ? (
          <div className="imgUser">
            <Link to="/profile">
              <img src={userImg} alt="user" />
            </Link>
          </div>
        ) : (
          <div className="btn-login">
            <Link to="/login">
              <Button>login</Button>
            </Link>
          </div>
        )}
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
        <h3> </h3>
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

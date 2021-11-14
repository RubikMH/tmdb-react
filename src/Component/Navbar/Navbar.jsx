import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <ul className="ul-navbar">
        <Link to="/">
          <li className="li-navbar">home</li>
        </Link>
        <Link to="/movies">
          <li className="li-navbar">movies</li>
        </Link>
        <Link to="shows">
          <li className="li-navbar">shows</li>
        </Link>
        <Link to="/aboutme">
          <li className="li-navbar">about me</li>
        </Link>
      </ul>
    </div>
  );
}

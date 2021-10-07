import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Router from "./Pages/Router";
import "antd/dist/antd.dark.css";

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Router />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

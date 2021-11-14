import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Router from "./Pages/Router";
import "antd/dist/antd.dark.css";
import ErrorBoundary from "./Component/Error/ErrorBoundary";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./Store";
import { Router, RouteComponentProps } from "@reach/router";
import HomePage from "./HomePage";
import FavPage from "./FavPage";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/"></RouterPage>
        <RouterPage pageComponent={<FavPage />} path="/faves"></RouterPage>
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);

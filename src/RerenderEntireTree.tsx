import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {store} from "./Redux/redux-store";
import StoreContext from "./StoreContext";

export const RerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App/>
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

RerenderEntireTree()
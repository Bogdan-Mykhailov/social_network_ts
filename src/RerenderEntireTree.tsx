import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import store from "./Redux/State";

export const RerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store}
           state={store.getState()}
           dispatch={store.dispatch.bind(store)}
           newPostText={store.getState().profilePage.newPostText}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

RerenderEntireTree()
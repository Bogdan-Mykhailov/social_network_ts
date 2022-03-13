import {addPost, RootStateType, updateNewPostText} from "./Redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import state from "./Redux/State";

export const RerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App newPostText={state.profilePage.newPostText} state={state} addPost={addPost}
           updateNewPostText={updateNewPostText}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
RerenderEntireTree()
import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

let rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
})

export const store = createStore(rootReducer);
export type StoreTypeRedux = typeof store;
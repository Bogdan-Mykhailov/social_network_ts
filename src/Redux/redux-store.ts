import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

export type StoreTypeRedux = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
})

const store = createStore(rootReducer);
export default store
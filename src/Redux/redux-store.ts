import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddlware from "redux-thunk";

export type StoreTypeRedux = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddlware));
export default store
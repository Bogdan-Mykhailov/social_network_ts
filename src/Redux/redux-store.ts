import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunk, {ThunkDispatch, ThunkAction} from "redux-thunk";
import {DialogActionsTypes, dialogsReducer} from "./dialogs-reducer";
import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {UserActionsTypes, usersReducer} from "./users-reducer";
import {AuthActionsTypes, authReducer} from "./auth-reducer";

export type StoreTypeRedux = ReturnType<typeof reducers>;

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));
export default store

export type TypedDispatch = ThunkDispatch<StoreTypeRedux, any, AnyAction>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<StoreTypeRedux> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StoreTypeRedux, unknown, AppActionsType>;

type AppActionsType =
  | DialogActionsTypes
  | ProfileActionsTypes
  | UserActionsTypes
  | AuthActionsTypes

// @ts-ignore
window.store = store
import React from "react";
import {StoreTypeRedux} from "./Redux/redux-store";

const StoreContext = React.createContext({} as StoreTypeRedux)

export default StoreContext
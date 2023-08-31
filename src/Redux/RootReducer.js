import namesReducer from "./names/NameReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  names: namesReducer,
});

export default rootReducer;

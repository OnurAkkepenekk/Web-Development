import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const reducers = combineReducers({
  //counterReducer:combineReducers
  counterReducer,
});

export default reducers;

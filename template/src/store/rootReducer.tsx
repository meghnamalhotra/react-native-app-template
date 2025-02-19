import { combineReducers } from "redux";
import homeReducer from "../redux/slices/homeSlice";

export default combineReducers({
  home: homeReducer,
});

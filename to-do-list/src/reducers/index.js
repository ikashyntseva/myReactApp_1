import { combineReducers } from "redux";
import { listDataReducer } from "./listData";

export const rootReducer = combineReducers({
  listData: listDataReducer
});

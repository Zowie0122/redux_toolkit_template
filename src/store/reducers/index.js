import { combineReducers } from "redux";
import postReducer from "./posts";
import drinksReducer from "./drinks";

/* combine multiple reducers, combineReducers can be for nested structure as well */
export default combineReducers({
  posts: postReducer,
  drinks: drinksReducer
});

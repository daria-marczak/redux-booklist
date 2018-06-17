import { combineReducers } from "redux";
import BooksReducer from "./reducerBooks";
import ActiveBook from "./reducerActiveBook";

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
}); // single piece of state called books and value of objects

export default rootReducer;

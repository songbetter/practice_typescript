import { combineReducers } from "redux";
import todoReducer from "./todo";
import counterReducer from "./counter";

const rootReducer = combineReducers({
  todoReducer,
  counterReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

import { createStore, combineReducers } from "redux";
import TodoReducer from "../reducer/todo";

const reducers = combineReducers({
  todo: TodoReducer
});

export const makeStore = () => {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

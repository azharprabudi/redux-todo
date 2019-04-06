import React from "react";
import { Provider } from "react-redux";
import TodoScreen from "./screen/todo";
import { makeStore } from "./utils/redux";

const App = () => (
  <Provider store={makeStore()}>
    <TodoScreen />
  </Provider>
);

export default App;

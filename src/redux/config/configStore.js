// src/redux/config/configStore.js

import { createStore } from "redux";
import { combineReducers } from "redux";
import MdCounter from "../modules/md_counter";
import MdTodo from "../modules/md_todo";
import MdNew from "../modules/md_new";

const rootReducer = combineReducers({
  MdCounter: MdCounter,
  MdTodo: MdTodo,
  MdNew: MdNew,
});
const store = createStore(rootReducer);

export default store;
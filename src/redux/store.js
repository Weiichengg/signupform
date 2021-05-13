import { createStore } from "redux";
import { page1Reducer } from "./actions/page1Actions";

const store = createStore(page1Reducer);

export default store;

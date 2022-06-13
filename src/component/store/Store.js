import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./PhonesReducer";
import throttle from "lodash.throttle";

function loadData() {
  const stateData = localStorage.getItem("state");

  if (stateData !== null) {
    return JSON.parse(stateData);
  }

  return {
    cart: [],
  };
}

function saveData(state) {
  return localStorage.setItem("state", JSON.stringify(state));
}

const store = createStore(reducer, loadData(), applyMiddleware(thunk));

store.subscribe(
  throttle(() => {
    saveData(store.getState());
  }, 2000)
);

export default store;

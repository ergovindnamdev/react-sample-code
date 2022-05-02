import { createStore , applyMiddleware } from "redux";
import appReducers from "./../Reducer/index";
const thunkMiddleware = require('redux-thunk').default
const store = createStore(appReducers , applyMiddleware(thunkMiddleware));

export default store;
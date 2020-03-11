import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import graphqlReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  graphql: graphqlReducer
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

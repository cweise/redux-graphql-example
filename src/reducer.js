import { combineReducers } from "redux";

import { QUERY_SUCCESS, QUERY_START } from "./action-types";

const defaultState = {};

const graphqlReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case QUERY_START:
      return {
        ...state,
        [payload.hash]: {
          ...state[payload.hash],
          isFetching: true
        }
      };
    case QUERY_SUCCESS:
      return {
        ...state,
        [payload.hash]: {
          ...state[payload.hash],
          data: payload.data,
          isFetching: false
        }
      };

    default:
      return state;
  }
};

const reducer = combineReducers({
  graphql: graphqlReducer
});

export default reducer;

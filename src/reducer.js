import { REQUEST_SUCCESS, REQUEST_START, REQUEST_ERROR } from "./action-types";

const defaultState = {};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case REQUEST_START:
      return {
        ...state,
        [payload.hash]: {
          ...state[payload.hash],
          isFetching: true
        }
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        [payload.hash]: {
          ...state[payload.hash],
          data: payload.data,
          isFetching: false
        }
      };
    case REQUEST_ERROR:
      return {
        ...state,
        [payload.hash]: {
          ...state[payload.hash],
          error: payload.error,
          isFetching: false
        }
      };
    default:
      return state;
  }
};

export default reducer;

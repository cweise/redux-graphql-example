import { REQUEST_START, REQUEST_SUCCESS, REQUEST_ERROR } from "./action-types";
import { createHash } from "./utils";
import { print } from "graphql/language/printer";

const requestStart = payload => ({
  type: REQUEST_START,
  payload
});

const requestSuccess = payload => ({
  type: REQUEST_SUCCESS,
  payload
});

const requestError = payload => ({
  type: REQUEST_ERROR,
  payload
});

export const request = query => async dispatch => {
  const queryHash = createHash(query);

  dispatch(requestStart({ hash: queryHash }));

  fetch("https://countries.trevorblades.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: print(query) })
  })
    .then(result => result.json())
    .then(result => {
      dispatch(requestSuccess({ hash: queryHash, data: result.data }));
    })
    .catch(err => {
      dispatch(requestError({ hash: queryHash, error: err }));
    });
};

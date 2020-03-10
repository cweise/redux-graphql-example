import { QUERY_START, QUERY_SUCCESS, QUERY_ERROR } from "./action-types";
import { createHash } from "./utils";

const queryStart = payload => ({
  type: QUERY_START,
  payload
});

const querySuccess = payload => ({
  type: QUERY_SUCCESS,
  payload
});

const queryError = payload => ({
  type: QUERY_ERROR,
  payload
});

export const doQuery = query => async dispatch => {
  const queryHash = createHash(query);

  dispatch(queryStart({ hash: queryHash }));

  fetch("https://countries.trevorblades.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  })
    .then(result => result.json())
    .then(result => {
      dispatch(querySuccess({ hash: queryHash, data: result.data }));
    })
    .catch(err => {
      dispatch(queryError({ hash: queryHash, error: err }));
    });
};

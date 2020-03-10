import { createHash } from "./utils";

const defaultState = { isFetching: true, data: null };

export const querySelector = query => state =>
  state?.graphql?.[createHash(query)] ?? defaultState;

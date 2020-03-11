import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gql from "graphql-tag";

import { request } from "./actions";
import { select } from "./selectors";

export const query = gql`
  query {
    continents {
      name
      code
    }
  }
`;

const Continents = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector(select(query));

  useEffect(() => {
    dispatch(request(query));
  }, []);

  if (isFetching) {
    return "is fetching";
  }

  if (!data) {
    return null;
  }

  return (
    <ul>
      {data.continents.map(continent => (
        <li>{continent.name}</li>
      ))}
    </ul>
  );
};

export default Continents;

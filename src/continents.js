import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { doQuery } from "./actions";
import { querySelector } from "./selectors";

const query = `
  query {
    continents {
      name
    }
  }
`;

const Continents = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector(querySelector(query));

  useEffect(() => {
    dispatch(doQuery(query));
  }, []);

  if (isFetching) {
    return "is fetching";
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

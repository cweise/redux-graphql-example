import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { doQuery } from "./actions";

const query = `
  query {
    continents {
      name
    }
  }
`;

const Form = () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(doQuery(query));

  return <button onClick={handleClick}>Update</button>;
};

export default Form;

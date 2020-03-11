import React from "react";
import { useDispatch } from "react-redux";

import { request } from "./actions";
import { query } from "./continents";

const Form = () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(request(query));

  return <button onClick={handleClick}>Update</button>;
};

export default Form;

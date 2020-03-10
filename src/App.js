import React from "react";
import { Provider } from "react-redux";

import Continents from "./continents";
import store from "./store";
import Form from "./form";

function App() {
  return (
    <Provider store={store}>
      <Continents />
      <Form />
    </Provider>
  );
}

export default App;

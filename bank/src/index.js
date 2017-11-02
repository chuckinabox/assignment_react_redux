import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";

import { bankApp } from "./reducers";

const bankStart = [
  {
    id: 1000,
    balance: 500
  },
  {
    id: 1001,
    balance: 800
  },
  {
    id: 1002,
    balance: 1000
  }
];

let bankStore = createStore(bankApp, { bank: bankStart });

ReactDOM.render(
  <Provider store={bankStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

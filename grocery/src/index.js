import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";

import { cartApp } from "./reducers";

const cartStart = [
  {
    name: "Fresh From the Farm Milk",
    description: "2%",
    category: "Dairy",
    price: "2.99",
    purchased: false,
    id: 1
  },
  {
    name: "John's Premium",
    description: "Rye",
    category: "Bread",
    price: "2.50",
    purchased: false,
    id: 2
  },
  {
    name: "Jerry's Economic",
    description: "White Bread",
    category: "Bread",
    price: "0.99",
    purchase: false,
    id: 3
  }
];

let shoppingCart = createStore(cartApp, { cart: cartStart });

ReactDOM.render(
  <Provider store={shoppingCart}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

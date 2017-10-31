import React, { Component } from "react";
import JumbotronFluid from "./elements/JumbotronFluid";
import ShoppingCartContainer from "../containers/ShoppingCartContainer";
import AddItemContainer from "../containers/AddItemContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronFluid
          heading="Shop shop"
          lead="Toss out the pad and pen for this online shopping cart"
        />
        <ShoppingCartContainer />
        <AddItemContainer />
      </div>
    );
  }
}

export default App;

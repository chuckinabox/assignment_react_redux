import React, { Component } from "react";
import JumbotronFluid from "./elements/JumbotronFluid";
import BankSystemContainer from "../containers/BankSystemContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronFluid
          heading="Bank with US!"
          lead="Banking mad easy with Redux"
        />
        <BankSystemContainer />
      </div>
    );
  }
}

export default App;

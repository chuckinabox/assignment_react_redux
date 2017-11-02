import React, { Component } from "react";
import JumbotronFluid from "./elements/JumbotronFluid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronFluid
          heading="Bank with US!"
          lead="Banking mad easy with Redux"
        />
      </div>
    );
  }
}

export default App;

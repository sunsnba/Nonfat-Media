import React from "react";
import sortedData from "./sortedData.jsx";
import List from "./List.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: sortedData
    };
  }

  render() {
    return (
      <div>
        <h1>Breakdowns</h1>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;

import React from "react";
import sortedData from "./sortedData.jsx";
import List from "./List.jsx";

console.log(sortedData);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: sortedData
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Hello World</h1>
        <List items={this.state.items} />
      </div>
    );
  }
}

import React from "react";
import sortedData from "./sortedData.jsx";
import List from "./List.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: sortedData
    };
    this.save = this.save.bind(this);
  }

  save() {
    var checkbox = document.getElementById("1");
    localStorage.setItem("1", checkbox.checked);
  }

  render() {
    return (
      <div>
        <h1>Breakdowns</h1>
        <List items={this.state.items} save={this.save} />
      </div>
    );
  }
}

export default App;

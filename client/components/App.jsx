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
    this.load = this.load.bind(this);
  }

  componentDidMount() {
    const rememberMe = localStorage.getItem(rememberMe) === "true";
    this.setState({ rememberMe });
  }

  save(id) {
    var checkbox = document.getElementById(id);
    localStorage.setItem(id, checkbox.checked);
  }

  load(id) {
    var checked = JSON.parse(localStorage.getItem(id));
    document.getElementById(id).checked = checked;
  }

  render() {
    return (
      <div>
        <h1>Breakdowns</h1>
        <List items={this.state.items} save={this.save} load={this.load} />
      </div>
    );
  }
}

export default App;

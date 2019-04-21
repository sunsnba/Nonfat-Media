import React from "react";
import List from "./List.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemInterest: {
        0: "",
        1: "",
        2: "",
        3: "",
        4: ""
      }
    };

    this.interestChange = this.interestChange.bind(this);
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  interestChange(e) {
    let itemInterest = this.state.itemInterest;
    console.log(e.target.checked);
    itemInterest[e.target.id] = e.target.checked;
    this.setState({
      itemInterest: itemInterest
    });
    localStorage.setItem("itemInterest", JSON.stringify(itemInterest));
  }

  hydrateStateWithLocalStorage() {
    // get the key's value from localStorage
    let value = localStorage.getItem("itemInterest");
    console.log(JSON.parse(value));
    let parsedVal = JSON.parse(value);
    this.setState({ itemInterest: parsedVal });
  }

  render() {
    return (
      <div>
        <h1>Breakdowns</h1>
        <List
          itemInterest={this.state.itemInterest}
          interestChange={this.interestChange}
        />
      </div>
    );
  }
}

export default App;

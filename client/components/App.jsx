import React from "react";
import List from "./List.jsx";
import "../style.css";

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
    itemInterest[e.target.id] = e.target.checked;
    this.setState({
      itemInterest: itemInterest
    });
    localStorage.setItem("itemInterest", JSON.stringify(itemInterest));
  }

  hydrateStateWithLocalStorage() {
    let value = localStorage.getItem("itemInterest");
    let parsedVal = JSON.parse(value);
    this.setState({ itemInterest: parsedVal });
  }

  render() {
    return (
      <div className="container">
        <h1 className="header">Nonfat Media Breakdowns</h1>
        <List
          itemInterest={this.state.itemInterest}
          interestChange={this.interestChange}
        />
      </div>
    );
  }
}

export default App;

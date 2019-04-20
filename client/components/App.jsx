import React from "react";
import List from "./List.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemChecked: {}
    };

    this.checkItem = this.checkItem.bind(this);
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  checkItem(listItem, e) {
    let itemChecked = this.state.itemChecked;
    itemChecked[listItem] = e.target.checked;
    console.log(listItem);
    console.log(itemChecked[listItem]);
    // console.log("e.taget.checked", e.target.checked, e.target, "e.target");
    //console.log("this.state.itemChecked", this.state);
    localStorage.setItem(e.target.id, JSON.stringify(itemChecked));
    this.setState({ itemChecked: itemChecked });
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state.itemChecked) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Breakdowns</h1>
        <List items={this.state.items} checkItem={this.checkItem} />
      </div>
    );
  }
}

export default App;

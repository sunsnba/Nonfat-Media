import React from "react";
import sortedData from "./sortedData.jsx";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemInterest: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
      }
    };
  }

  interestChange(e, i) {
    let itemInterest = this.state.itemInterest;
    itemInterest[e.target.id] = e.target.checked == true ? "true" : "false";
    this.setState({
      itemInterest: itemInterest
    });
  }

  render() {
    const listItems = sortedData.map((listItem, i) => {
      return (
        <li key={i}>
          added: {listItem.added + " "}
          <br />
          title: {listItem.title + " "}
          <br />
          type: {listItem.type + " "}
          <br />
          castingDirector: {listItem.castingDirector + " "}
          <br />
          startDate: {listItem.startDate + " "}
          <br />
          I'm interested{" "}
          <input
            type="checkbox"
            id={i}
            checked={this.state.itemInterest[i]}
            onChange={e => {
              this.interestChange(e, i);
            }}
          />
          <br />
        </li>
      );
    });
    return <ul>{listItems} </ul>;
  }
}

export default List;

import React from "react";
import sortedData from "./sortedData.jsx";

class List extends React.Component {
  constructor(props) {
    super(props);
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
            checked={this.props.itemInterest[i]}
            onChange={e => {
              this.props.interestChange(e);
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

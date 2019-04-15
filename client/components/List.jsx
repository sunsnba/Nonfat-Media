import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.items[0]).map(key => (
          <li key={key}>
            {" "}
            {key}: {this.props.items[0][key]}
          </li>
        ))}
      </div>
    );
  }
}
export default List;

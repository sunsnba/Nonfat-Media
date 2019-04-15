import React, { Component } from "react";

const List = props => {
  const listItems = props.items.map(d => <li key={d.added}>{d.added}</li>);

  return <ul>{listItems}</ul>;
};

export default List;

import React, { Component } from "react";

const List = props => {
  const listItems = props.items.map(d => (
    <li key={d.added}>
      added: {d.added}
      <br />
      title: {d.title}
      <br />
      type: {d.type}
      <br />
      casting director: {d.castingDirector}
      <br />
      start date: {d.startDate}
      <br />
      I'm interested
      <input type="checkbox" />
    </li>
  ));

  return (
    <ul>
      {listItems}
      <br />
    </ul>
  );
};

export default List;

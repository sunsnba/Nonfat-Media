import React from "react";
import sortedData from "./sortedData.jsx";

const List = props => {
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
          onChange={e => props.checkItem(listItem, e)}
        />
        <br />
      </li>
    );
  });
  return <ul>{listItems} </ul>;
};

export default List;

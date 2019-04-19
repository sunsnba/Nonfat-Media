import React from "react";

const List = props => {
  const listItems = props.items.map((listItem, i) => {
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
        I'm interested <input type="checkbox" id={i} />
        <br />
      </li>
    );
  });
  return <ul>{listItems} </ul>;
};
export default List;

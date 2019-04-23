import React from "react";
import sortedData from "./sortedData.jsx";

const List = props => {
  const listItems = sortedData.map((listItem, i) => {
    return (
      <ul key={i} className="list">
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
          checked={props.itemInterest[i]}
          onChange={e => {
            props.interestChange(e);
          }}
        />
        <br />
      </ul>
    );
  });
  return <ul>{listItems} </ul>;
};

export default List;

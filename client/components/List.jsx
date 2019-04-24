import React from "react";
import sortedData from "./sortedData.jsx";
// used title for key since index is an anti pattern - just need a string that uniquley identifies key amongst siblings

const List = props => {
  const listItems = sortedData.map((listItem, i) => {
    return (
      <ul key={listItem.title} className="list">
        <strong> added: </strong>
        {listItem.added + " "}
        <br />
        <strong> title: </strong>
        {listItem.title + " "}
        <br />
        <strong> type: </strong>
        {listItem.type + " "}
        <br />
        <strong> castingDirector: </strong>
        {listItem.castingDirector + " "}
        <br />
        <strong> startDate: </strong> {listItem.startDate + " "}
        <br />
        <strong> I'm interested </strong>{" "}
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

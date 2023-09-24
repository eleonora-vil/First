import React from "react";
import Item from "./Item";
import "./ItemList.css";
export default function ItemList({ itemName }) {
  return (
    <div id="item-container">
      <div className="name">
        <h3>{itemName}</h3>
      </div>
      <div className="item-list">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

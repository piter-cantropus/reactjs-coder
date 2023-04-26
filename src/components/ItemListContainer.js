import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <ul className="cart-items">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
    </div>
  );
};

export default ItemListContainer;

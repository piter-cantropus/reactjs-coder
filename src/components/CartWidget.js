import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';

const CartWidget = ({ cantidad }) => {
  return (
    <div>
      <FaShoppingCart />
            &nbsp;
            <Badge bg="info">{cantidad}</Badge>  
    </div>
  );
};

export default CartWidget;

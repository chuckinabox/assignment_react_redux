import React from "react";
import PropTypes from "prop-types";
import ItemCard from "./ItemCard";

const ShoppingCart = ({ cart, purchaseItem }) => {
  const shoppingCart = cart.map(item => (
    <ItemCard
      item={item}
      key={item.id}
      onPurchaseClick={() => purchaseItem(item.id)}
    />
  ));
  const emptyCart = <p className="text-muted">Empty Cart</p>;

  return (
    <div className="ShoppingCart container">
      <h2>Your Cart</h2>
      {cart.length > 0 ? shoppingCart : emptyCart}
    </div>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.array.isRequired,
  purchaseItem: PropTypes.func.isRequired
};

export default ShoppingCart;

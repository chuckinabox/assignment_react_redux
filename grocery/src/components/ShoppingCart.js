import React from "react";
import PropTypes from "prop-types";
import ItemCard from "./ItemCard";
import Filters from "./Filters";
import Sorts from "./Sorts";

const ShoppingCart = ({ cart, purchaseItem }) => {
  console.log(cart);
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
      <Filters />
      <Sorts />
      <div className="card-deck">
        {cart.length > 0 ? shoppingCart : emptyCart}
      </div>
    </div>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.array.isRequired,
  purchaseItem: PropTypes.func.isRequired
};

export default ShoppingCart;

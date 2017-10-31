import React from "react";
import PropTypes from "prop-types";
import Button from "./elements/Button";

const ItemCard = ({ item, onPurchaseClick }) => {
  const { name, description, purchased } = item;

  return (
    <div className="card">
      <p>{name}</p>
      <p>{description}</p>
      {item.category ? <p>{item.category}</p> : ""}
      {item.price ? <p>${item.price}</p> : ""}
      {purchased ? (
        <p className="text-muted">Sold</p>
      ) : (
        <Button color="primary" onClick={onPurchaseClick}>
          Buy Now
        </Button>
      )}
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
  onPurchaseClick: PropTypes.func.isRequired
};

export default ItemCard;

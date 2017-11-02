import React from "react";
import PropTypes from "prop-types";
import Button from "../elements/Button";

const FilterLink = ({
  active,
  onClickPurchase,
  onClickCategory,
  field,
  children
}) => {
  if (active) {
    return <Button size="sm">{children}</Button>;
  }
  if (field === "Purchase") {
    return (
      <Button size="sm" color="primary" href="#" onClick={onClickPurchase}>
        {children}
      </Button>
    );
  } else if (field === "Category") {
    return (
      <Button size="sm" href="#" color="primary" onClick={onClickCategory}>
        {children}
      </Button>
    );
  } else {
    return <span>Error:{children}</span>;
  }
};

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  onClickPurchase: PropTypes.func.isRequired,
  onClickCategory: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FilterLink;

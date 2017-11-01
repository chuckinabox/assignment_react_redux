import React from "react";
import PropTypes from "prop-types";
import Button from "./elements/Button";

const SortLink = ({
  active,
  onClickName,
  onClickDescription,
  field,
  children
}) => {
  if (active) {
    return <Button size="sm">{children}</Button>;
  }
  if (field === "Name") {
    return (
      <Button size="sm" color="primary" href="#" onClick={onClickName}>
        {children}
      </Button>
    );
  } else if (field === "Description") {
    return (
      <Button size="sm" color="primary" href="#" onClick={onClickDescription}>
        {children}
      </Button>
    );
  } else {
    return <span>Error:{children}</span>;
  }
};

SortLink.propTypes = {
  active: PropTypes.bool.isRequired,
  onClickName: PropTypes.func.isRequired,
  onClickDescription: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default SortLink;

import React from "react";
import FilterLinkContainer from "../../containers/FilterLinkContainer";

const Filters = () => (
  <div className="Filters">
    By Category:{" "}
    <FilterLinkContainer field="Category" filter="SHOW_ALL">
      Show All
    </FilterLinkContainer>
    <FilterLinkContainer field="Category" filter="SHOW_DAIRY">
      Show Dairy
    </FilterLinkContainer>
    <FilterLinkContainer field="Category" filter="SHOW_BREAD">
      Show Bread
    </FilterLinkContainer>
    <br />
    By Avaliablitly:{" "}
    <FilterLinkContainer field="Purchase" filter="SHOW_ALL">
      Show All
    </FilterLinkContainer>
    <FilterLinkContainer field="Purchase" filter="SHOW_PURCHASED">
      Show Purchased
    </FilterLinkContainer>
    <FilterLinkContainer field="Purchase" filter="SHOW_UNPURCHASED">
      Show Unpurchased
    </FilterLinkContainer>
  </div>
);

export default Filters;

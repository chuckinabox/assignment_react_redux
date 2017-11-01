import React from "react";
import SortLinkContainer from "../containers/SortLinkContainer";

const Sorts = () => (
  <div className="Sorts">
    Order By Name:{" "}
    <SortLinkContainer field="Name" filter="ASIS">
      As is
    </SortLinkContainer>
    <SortLinkContainer field="Name" filter="ASC">
      Ascending
    </SortLinkContainer>
    <SortLinkContainer field="Name" filter="DESC">
      Descending
    </SortLinkContainer>
    <br />
    Order By Description:{" "}
    <SortLinkContainer field="Description" filter="ASIS">
      As is
    </SortLinkContainer>
    <SortLinkContainer field="Description" filter="ASC">
      Ascending
    </SortLinkContainer>
    <SortLinkContainer field="Description" filter="DESC">
      Descending
    </SortLinkContainer>
  </div>
);

export default Sorts;

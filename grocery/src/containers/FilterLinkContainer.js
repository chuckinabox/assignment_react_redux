import { connect } from "react-redux";
import FilterLink from "../components/FilterLink/FilterLink";
import { setPurchasedFilter, setCategoryFilter } from "../actions";

const mapStateToProps = (state, ownProps) => {
  const purchase =
    state.cartPurchaseFilters === ownProps.filter &&
    ownProps.field === "Purchase";
  const category =
    state.cartCategoryFilters === ownProps.filter &&
    ownProps.field === "Category";
  return {
    active: purchase || category
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickPurchase: e => {
      e.preventDefault();
      dispatch(setPurchasedFilter(ownProps.filter));
    },
    onClickCategory: e => {
      e.preventDefault();
      dispatch(setCategoryFilter(ownProps.filter));
    }
  };
};

const FilterLinkContainer = connect(mapStateToProps, mapDispatchToProps)(
  FilterLink
);

export default FilterLinkContainer;

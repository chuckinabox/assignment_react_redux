import { connect } from "react-redux";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import { purchaseItem } from "../actions";

const getCategoryItems = (cart, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return cart;
    case "SHOW_DAIRY":
      return cart.filter(cart => cart.category === "Dairy");
    case "SHOW_BREAD":
      return cart.filter(cart => cart.category === "Bread");
    default:
      return cart;
  }
};

const getPurchasedItems = (cart, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return cart;
    case "SHOW_PURCHASED":
      return cart.filter(cart => cart.purchased);
    case "SHOW_UNPURCHASED":
      return cart.filter(cart => !cart.purchased);
    default:
      return cart;
  }
};

const sortByName = (cart, filter) => {
  let sortedCart = cart;
  switch (filter) {
    case "ASIS":
      return cart;
    case "ASC":
      return sortedCart.sort((a, b) => {
        return a.name.toUpperCase() > b.name.toUpperCase();
      });
    case "DESC":
      return sortedCart.sort((a, b) => {
        return a.name.toUpperCase() < b.name.toUpperCase();
      });
    default:
      return cart;
  }
};

const sortByDescription = (cart, filter) => {
  let sortedCart = cart;
  switch (filter) {
    case "ASIS":
      return cart;
    case "ASC":
      return sortedCart.sort((a, b) => {
        return a.description.toUpperCase() > b.description.toUpperCase();
      });
    case "DESC":
      return sortedCart.sort((a, b) => {
        return a.description.toUpperCase() < b.description.toUpperCase();
      });
    default:
      return cart;
  }
};

const mapStateToProps = state => {
  console.log(state);
  let newCart = state.cart;
  newCart = getCategoryItems(newCart, state.cartCategoryFilters);
  newCart = getPurchasedItems(newCart, state.cartPurchaseFilters);
  newCart = sortByName(newCart, state.cartNameSort);
  newCart = sortByDescription(newCart, state.cartDescriptionSort);
  return {
    cart: newCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    purchaseItem: id => {
      dispatch(purchaseItem(id));
    }
  };
};

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(
  ShoppingCart
);

export default ShoppingCartContainer;

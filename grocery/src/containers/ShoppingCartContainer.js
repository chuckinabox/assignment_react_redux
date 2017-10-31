import { connect } from "react-redux";
import ShoppingCart from "../components/ShoppingCart";
import { purchaseItem } from "../actions";

const mapStateToProps = state => {
  return {
    cart: state.cart
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

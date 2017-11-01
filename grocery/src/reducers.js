import { combineReducers } from "redux";

//Import action types
import {
  ADD_ITEM,
  PURCHASE_ITEM,
  SET_PURCHASED_FILTER,
  SET_CATEGORY_FILTER,
  SORT_NAME,
  SORT_DESCRIPTION
} from "./actions";

function cart(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.data];
    case PURCHASE_ITEM:
      return state.map(item => {
        if (item.id === action.data) {
          return {
            ...item,
            purchased: true
          };
        }
        return item;
      });
    default:
      return state;
  }
}

function cartPurchaseFilters(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data;
    default:
      return state;
  }
}

function cartCategoryFilters(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.data;
    default:
      return state;
  }
}

function cartNameSort(state = "ASIS", action) {
  switch (action.type) {
    case SORT_NAME:
      return action.data;
    default:
      return state;
  }
}

function cartDescriptionSort(state = "ASIS", action) {
  switch (action.type) {
    case SORT_DESCRIPTION:
      return action.data;
    default:
      return state;
  }
}

export const cartApp = combineReducers({
  cart,
  cartPurchaseFilters,
  cartCategoryFilters,
  cartNameSort,
  cartDescriptionSort
});

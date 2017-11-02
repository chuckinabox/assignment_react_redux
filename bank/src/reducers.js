import { combineReducers } from "redux";

import {
  CREATE_ACCOUNT,
  VIEW_ACCOUNT,
  WITHDRAW,
  DEPOSIT,
  TRANSFER,
  ADD_TRANSACTION,
  TRANSACTION_FILTER_DATE
} from "./actions";

function bank(state = [], action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return [...state, action.data];
    case WITHDRAW:
      return state.map(account => {
        if (account.id === action.data.id) {
          return {
            ...account,
            balance: account.balance - action.data.amount
          };
        }
        return account;
      });
    case DEPOSIT:
      return state.map(account => {
        if (account.id === action.data.id) {
          return {
            ...account,
            balance: account.balance + action.data.amount
          };
        }
        return account;
      });
    case TRANSFER:
      return state.map(account => {
        if (account.id === action.data.id1) {
          return {
            ...account,
            balance: account.balance - action.data.amount
          };
        } else if (account.id === action.data.id2) {
          return {
            ...account,
            balance: account.balance + action.data.amount
          };
        }
        return account;
      });
    default:
      return state;
  }
}

function transactions(
  state = [
    {
      action: "Withdraw",
      id: "1000",
      amount: "1000",
      date: new Date("01/03/2013")
    },
    {
      action: "Transfer",
      id1: "1000",
      id2: "1001",
      amount: "10000",
      date: new Date("01/03/2015")
    }
  ],
  action
) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [...state, action.data];
    default:
      return state;
  }
}

function transactionFilter(
  state = { from: new Date("01/01/1971"), to: new Date("10/10/2020") },
  action
) {
  switch (action.type) {
    case TRANSACTION_FILTER_DATE:
      return action.data;
    default:
      return state;
  }
}

function accountView(state = "ALL", action) {
  switch (action.type) {
    case VIEW_ACCOUNT:
      return action.data;
    default:
      return state;
  }
}

export const bankApp = combineReducers({
  bank,
  transactions,
  transactionFilter,
  accountView
});

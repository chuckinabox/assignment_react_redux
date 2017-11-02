import { connect } from "react-redux";
import serialize from "form-serialize";
import BankSystem from "../components/BankSystem/BankSystem";
import { withdraw, deposit, viewAccount, addTransaction } from "../actions";

const getVisibleAccounts = (accounts, filter) => {
  if (filter === "ALL") {
    return accounts;
  } else {
    return accounts.filter(accounts => accounts.id === Number(filter));
  }
};

const mapStateToProps = state => {
  return {
    bank: getVisibleAccounts(state.bank, state.accountView)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    withdraw: e => {
      e.preventDefault();
      const form = e.target;
      let data = serialize(form, { hash: true });
      //data sanitizing
      data.amount = Number(data.amount);
      data.id = Number(data.id);
      if (isNaN(data.amount)) {
        data.amount = 0;
      }

      dispatch(withdraw(data));
      data.action = "Withdraw";
      dispatch(addTransaction(data));
      form.reset();
    },
    deposit: e => {
      e.preventDefault();
      const form = e.target;
      let data = serialize(form, { hash: true });
      //data sanitizing
      data.amount = Number(data.amount);
      data.id = Number(data.id);
      if (isNaN(data.amount)) {
        data.amount = 0;
      }

      dispatch(deposit(data));
      data.action = "Deposit";
      dispatch(addTransaction(data));
      form.reset();
    },
    setAccountToView: e => {
      e.preventDefault();
      const data = e.target.value;
      dispatch(viewAccount(data));
    }
  };
};

const BankSystemContainer = connect(mapStateToProps, mapDispatchToProps)(
  BankSystem
);

export default BankSystemContainer;

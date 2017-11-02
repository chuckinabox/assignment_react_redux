import { connect } from "react-redux";
import serialize from "form-serialize";
import Transactions from "../components/Transactions/Transactions";
import { setTransactionFilter } from "../actions";

const filterDates = (transactions, fromDate, toDate) => {
  return transactions.filter(
    oneT => oneT.date >= fromDate && oneT.date <= toDate
  );
};

const mapStateToProps = state => {
  return {
    transactions: filterDates(
      state.transactions,
      state.transactionFilter.from,
      state.transactionFilter.to
    ),
    datesFrom: state.transactionFilter.from,
    datesTo: state.transactionFilter.to
  };
};

const mapDispatchToProps = dispatch => {
  return {
    settingTransaction: e => {
      e.preventDefault();
      const form = e.target;
      let data = serialize(form, { hash: true });
      //Check if both inputs have dates
      if (data.from && data.to) {
        data.from = new Date(data.from);
        data.to = new Date(data.to);
        dispatch(setTransactionFilter(data));
        form.reset();
      }
    }
  };
};

const TransactionsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Transactions
);

export default TransactionsContainer;

import { connect } from "react-redux";
import serialize from "form-serialize";
import TransferForm from "../components/TransferForm/TransferForm";
import { transfer, addTransaction } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    transferSubmit: e => {
      e.preventDefault();
      const form = e.target;
      let data = serialize(form, { hash: true });
      data.id1 = Number(data.id1);
      data.id2 = Number(data.id2);
      data.amount = Number(data.amount);
      dispatch(transfer(data));
      data.action = "Transfer";
      dispatch(addTransaction(data));
      form.reset();
    }
  };
};

const TransferFormContainer = connect(null, mapDispatchToProps)(TransferForm);

export default TransferFormContainer;

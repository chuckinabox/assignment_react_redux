import { connect } from "react-redux";
import serialize from "form-serialize";
import { addItem } from "../actions";
import AddItem from "../components/AddItem/AddItem";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(addItem(data));
      form.reset();
    }
  };
};

const AddItemContainer = connect(null, mapDispatchToProps)(AddItem);

export default AddItemContainer;

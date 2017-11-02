import React from "react";
import PropTypes from "prop-types";
import Input from "../elements/Input";
import InputGroup from "../elements/InputGroup";
import Button from "../elements/Button";

const TransferForm = ({ transferSubmit }) => (
  <form className="container" onSubmit={transferSubmit}>
    <h3>Transfer Between Account</h3>
    <InputGroup name="id1" labelText="Account ID# From">
      <Input name="id1" />
    </InputGroup>
    <InputGroup name="id2" labelText="Account ID# To">
      <Input name="id2" />
    </InputGroup>
    <InputGroup name="amount" labelText="Amount To Transfer">
      <Input name="amount" />
    </InputGroup>
    <Button type="submit" color="primary">
      Transfer...
    </Button>
  </form>
);

TransferForm.propTypes = {
  transferSubmit: PropTypes.func.isRequired
};

export default TransferForm;

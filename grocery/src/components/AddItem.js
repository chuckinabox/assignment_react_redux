import React from "react";
import PropTypes from "prop-types";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const AddItem = ({ onSubmit }) => (
  <form className="container" onSubmit={onSubmit}>
    <h1>
      Add an Item{" "}
      <span className="glyphicon glyphicon-search" aria-hidden="true" />
    </h1>
    <InputGroup name="name" labelText="Name">
      <Input name="name" />
    </InputGroup>
    <InputGroup name="description" labelText="Description">
      <Input name="description" />
    </InputGroup>
    <InputGroup name="category" labelText="Category">
      <Input name="category" />
    </InputGroup>
    <InputGroup name="price" labelText="Price">
      <Input name="price" />
    </InputGroup>
    <Button type="submit" color="primary">
      Save Item
    </Button>
  </form>
);

AddItem.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddItem;

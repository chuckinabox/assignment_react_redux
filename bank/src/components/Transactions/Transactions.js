import React from "react";
import PropTypes from "prop-types";
import Input from "../elements/Input";
import InputGroup from "../elements/InputGroup";
import Button from "../elements/Button";

const Transactions = ({
  transactions,
  settingTransaction,
  datesFrom,
  datesTo
}) => {
  const allTransactions = transactions.map(oneT => {
    if (oneT.id) {
      return (
        <div className="card" key={oneT.date}>
          <p>{oneT.action}</p>
          <p>Account {oneT.id}</p>
          <p>${oneT.amount}</p>
          <p>
            {oneT.date.getMonth() + 1}/{oneT.date.getDay()}/{oneT.date.getFullYear()}{" "}
            @ {oneT.date.getHours()}:{oneT.date.getMinutes()}
          </p>
        </div>
      );
    } else if (oneT.id1 && oneT.id2) {
      return (
        <div className="card" key={oneT.date}>
          <p>{oneT.action}</p>
          <p>From: {oneT.id1}</p>
          <p>To: {oneT.id2}</p>
          <p>Amount: ${oneT.amount}</p>
          <p>
            {oneT.date.getMonth() + 1}/{oneT.date.getDay()}/{oneT.date.getFullYear()}{" "}
            @ {oneT.date.getHours()}:{oneT.date.getMinutes()}
          </p>
        </div>
      );
    } else {
      return <p>Error:</p>;
    }
  });
  return (
    <form className="container" onSubmit={settingTransaction}>
      <h3>Transactions</h3>
      <InputGroup name="from" labelText="Date From">
        <Input
          name="from"
          placeholder={
            datesFrom.getMonth() +
            1 +
            "/" +
            datesFrom.getDay() +
            "/" +
            datesFrom.getFullYear()
          }
        />
      </InputGroup>
      <InputGroup name="to" labelText="Date To">
        <Input
          name="to"
          placeholder={
            datesTo.getMonth() +
            1 +
            "/" +
            datesTo.getDay() +
            "/" +
            datesTo.getFullYear()
          }
        />
      </InputGroup>
      <Button type="submit" size="sm" color="primary">
        Filter Date
      </Button>
      {transactions.length > 0 ? allTransactions : <p>No Transactions</p>}
    </form>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
  settingTransaction: PropTypes.func.isRequired,
  datesFrom: PropTypes.object.isRequired,
  datesTo: PropTypes.object.isRequired
};

export default Transactions;

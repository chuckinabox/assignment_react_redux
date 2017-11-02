import React from "react";
import PropTypes from "prop-types";
import AccountCard from "./AccountCard";
import Button from "../elements/Button";

import TransferFormContainer from "../../containers/TransferFormContainer";
import TransactionsContainer from "../../containers/TransactionsContainer";

const BankSystem = ({
  bank,
  withdraw,
  deposit,
  setAccountToView,
  activeView
}) => {
  const accounts = bank.map(account => (
    <AccountCard
      account={account}
      key={account.id}
      withdraw={withdraw}
      deposit={deposit}
      setAccountToView={setAccountToView}
    />
  ));
  const noAccounts = <p className="text-muted">No Accounts</p>;

  return (
    <div className="BankSystem container">
      <h2>Accounts</h2>
      <Button color="primary" onClick={setAccountToView} value="ALL">
        Show All Accounts
      </Button>
      <div className="card-deck">{bank.length > 0 ? accounts : noAccounts}</div>
      <TransferFormContainer />
      <TransactionsContainer />
    </div>
  );
};

BankSystem.propTypes = {
  bank: PropTypes.array.isRequired,
  withdraw: PropTypes.func.isRequired,
  deposit: PropTypes.func.isRequired,
  setAccountToView: PropTypes.func.isRequired
};

export default BankSystem;

import React from "react";
import PropTypes from "prop-types";
import Button from "../elements/Button";
import Input from "../elements/Input";

const AccountCard = ({ account, deposit, withdraw, setAccountToView }) => {
  const { id, balance } = account;

  return (
    <div className="card">
      <Button href="#" size="sm" value={id} onClick={setAccountToView}>
        Account id: {id}
      </Button>
      <p>Balance: ${balance}</p>
      <form className="container" onSubmit={withdraw}>
        <Input type="hidden" name="id" value={id} />
        <Input placeholder="Withdraw" name="amount" />
        <Button color="warning" type="submit">
          Withdraw
        </Button>
      </form>
      <br />
      <form className="container" onSubmit={deposit}>
        <Input type="hidden" name="id" value={id} />
        <Input placeholder="Deposit" name="amount" />
        <Button color="success" type="submit">
          Deposit
        </Button>
      </form>
    </div>
  );
};

AccountCard.propTypes = {
  account: PropTypes.object.isRequired,
  deposit: PropTypes.func.isRequired,
  withdraw: PropTypes.func.isRequired,
  setAccountToView: PropTypes.func.isRequired
};

export default AccountCard;

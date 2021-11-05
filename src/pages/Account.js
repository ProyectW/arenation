import React from "react";
import AccountHeader from "../components/Header/AccountHeader";
import AccountSecurity from "../components/Account/AccountSecurity";
import AccountPay from "../components/Account/AccountPay";
export default class Account extends React.Component {
  render() {
    return (
      <div className="pt-16 pb-44">
        <AccountHeader place="metodos" />
        {/* <AccountSecurity /> */}
        <AccountPay/>
      </div>
    );
  }
}

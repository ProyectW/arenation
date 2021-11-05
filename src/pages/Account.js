import React from "react";
import AccountDetails from "../components/AccountDetails";
export default function Account(props) {
    return (
      <div className="pt-16 pb-44">
        <AccountDetails type={props.type} />
      </div>
    );
}

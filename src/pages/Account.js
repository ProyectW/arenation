import React from "react";
import AccountHeader from "../components/Header/AccountHeader";

export default class Account extends React.Component {
    render() {
        return (
            <div className="pt-16 pb-44">
                <AccountHeader place="cuenta"/>
            </div>
        );
    }
}

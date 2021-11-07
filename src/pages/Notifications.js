import React from "react";
import Tittle from "../components/Header/Tittle";
import Notification from "../components/Notification";

export default class Notifications extends React.Component {
  render() {
    return (
      <div className="pt-16 pb-44">
        <Tittle title="Notificaciones"/>
        <Notification/>
      </div>
    );
  }
}
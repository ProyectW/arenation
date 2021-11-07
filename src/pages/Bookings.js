import React from "react";
import {TittleButton} from "../components/Header/Tittle";

export default class Notifications extends React.Component {
  render() {
    return (
      <div className="pt-16 pb-44">
        <TittleButton title="Mis Reservas" text="Proximos" />
      </div>
    );
  }
}

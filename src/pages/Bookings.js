import React from "react";
import {TittleButton} from "../components/Header/Tittle";
import Booking from "../components/Booking";

export default class Notifications extends React.Component {
  render() {
    return (
      <div className="pt-16 pb-44">
        <TittleButton title="Mis Reservas" text="Próximos" />
        <Booking/>
      </div>
    );
  }
}

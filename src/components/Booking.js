import React from "react";
import iconEmptyBookings from "../assets/img/iconEmptyBookings.svg";
import Button from "./Controls/Buttons";

export default function Notification(props) {
  const reservas = null;

  if (reservas) {
    return (
      <div className="flex flex-col w-full px-8 sm:px-16 text-secondary-dark">
        {reservas.map((e) => {
          return (
            <div className="py-2">
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-full px-8 sm:px-16 text-secondary-dark">
        <div className="w-full flex flex-col items-center justify-center text-secondary-dark">
          <img className="mb-3" alt="" src={iconEmptyBookings} />
          <h1 className="font-semibold mb-2">No tienes próximas reservas</h1>
          <label className="mb-5">Aquí encontrarás las reservas que realices</label>
          <Button link="/arenas" type="normal" text="Explorar Escenarios"/>
        </div>
      </div>
    );
  }
}

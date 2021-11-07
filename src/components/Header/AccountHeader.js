import React from "react";

export default function AccountHeader(props) {
  if (props.place === "cuenta") {
    return (
      <div className="flex flex-col w-full px-8 py-8 sm:px-16 text-secondary-dark">
        <h1>Cuenta</h1>
        <label>{"Cuenta > "}</label>
      </div>
    );
  } else if (props.place === "info") {
    return (
      <div className="flex flex-col w-full px-8 py-8 sm:px-16 text-secondary-dark">
        <h1>Información personal</h1>
        <label>{"Cuenta > Información personal"}</label>
      </div>
    );
  } else if (props.place === "seguridad") {
    return (
      <div className="flex flex-col w-full px-8 py-8 sm:px-16 text-secondary-dark">
        <h1>Seguridad</h1>
        <label>{"Cuenta > Seguridad"}</label>
      </div>
    );
  } else if (props.place === "metodos") {
    return (
      <div className="flex flex-col w-full px-8 py-8 sm:px-16 text-secondary-dark">
        <h1>{"Métodos de pago"}</h1>
        <label>{"Cuenta > Métodos de pago"}</label>
      </div>
    );
  }
}

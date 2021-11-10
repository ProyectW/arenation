import React from "react";
import PayMethodCard from "./AccountComponents/PayMethodsCards";
import Button from "../Controls/Buttons";

export default function AccountPay(props) {
  const payMethodData = [
    {
      name: "PSE de mi tía",
      email: "mitia@gmail.com",
    },
    {
      name: "PSE de mi tía",
      email: "mitia@gmail.com",
    },
    {
      name: "PSE de mi tía",
      email: "mitia@gmail.com",
    },
  ];
  return (
    <div className="flex flex-col md:flex-col px-8 sm:px-16 gap-x-10 w-full">
      <h3>Agregar Métodos de pago</h3>
      <div>
        <p>
          Agregando métodos de pago podrás pagar las reservas que hagas desde
          nuestra plataforma de forma rápida y segura.
        </p>
        <div className="w-full flex flex-col pt-2">
          {payMethodData.map((method, index) => (
            <PayMethodCard
            key={index}
              methodName={method.name}
              methodEmail={method.email}
            />
          ))}
        </div>
      </div>
      <div className="w-full">
      <Button
            className="mt-3 w-full"
            type="normalWith"
            text="Agregar Método de Pago"
          />
      </div>
    </div>
  );
}

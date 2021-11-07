import React from "react";
import { FechaConDia } from "../utils/Fecha";
import Logo from "../assets/img/iconLogo.svg";
import Button from "./Controls/Buttons";

export default function Notification(props) {
  const notifications = [
    {
      comentario: "No olvides tu reversa, pronto llegará la hora",
      fecha: "2021/11/05",
    },
    {
      comentario: "Que tal te pareció la arena",
      fecha: "2021/11/05",
    },
    {
      comentario: "haz hecho u pago",
      fecha: "2021/11/05",
    },
    {
      comentario: "No olvides tu reversa, pronto llegará la hora",
      fecha: "2021/11/05",
    },
    {
      comentario: "Que tal te pareció la arena",
      fecha: "2021/11/05",
    },
    {
      comentario: "haz hecho u pago",
      fecha: "2021/11/05",
    },
    {
      comentario: "No olvides tu reversa, pronto llegará la hora",
      fecha: "2021/11/05",
    },
    {
      comentario: "Que tal te pareció la arena",
      fecha: "2021/11/05",
    },
    {
      comentario: "haz hecho u pago",
      fecha: "2021/11/05",
    },
  ];
  return (
    <div className="flex flex-col w-full px-8 py-8 sm:px-16 text-secondary-dark">
      {notifications.map((e) => {
        return (
          <div className="py-2">
            <Button
              type="infoBtnLogo"
              children={Logo}
              label={e.comentario}
              value={<FechaConDia fecha={e.fecha} />}
            />
          </div>
        );
      })}
    </div>
  );
}

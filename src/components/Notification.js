import React from "react";
import { FechaConDia } from "../utils/Fecha";
import Logo from "../assets/img/iconLogo.svg";
import iconEmptyNotifications from "../assets/img/iconEmptyNotifications.svg";
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

  if (notifications) {
    
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
  } else {
    return (
      <div className="flex flex-col w-full px-8 py-8 sm:px-16 text-secondary-dark">
        <div className="w-full flex flex-col items-center justify-center text-secondary-dark">
          <img alt="" src={iconEmptyNotifications}/>
          <h1 className="font-semibold">¡No hay nada aqui!</h1>
          <label>
            No te preocupes, te avisaremos cuando tengamos algo nuevo para ti
          </label>
        </div>
      </div>
    );
  }
}

import React from "react";
import { ReactComponent as IconMore } from "../../../assets/img/iconMore.svg";
import { ReactComponent as IconStart } from "../../../assets/img/iconStar.svg";
import { ReactComponent as IconMap } from "../../../assets/img/iconMap.svg";
import Divider from "../../Dividers/Divider";
import { FechaConDia } from "../../../utils/Fecha";
import { Transition, Menu } from "@headlessui/react";
import { Fragment } from "react";
import { ReactComponent as IconShare } from "../../../assets/img/iconShare.svg";

export default function PayArenaCard(props) {
  return (
    <div className="flex flex-col shadow-DropDown w-3/4 rounded-lg p-5">
      <div className="flex flex-col">
        <div className="flex flex-row items-center text-secondary-dark my-1">
          <h3 className="font font-semibold w-full">{props.name}</h3>
          <Menu as="div" className="flex justify-center items-center">
            <Menu.Button>
              <IconMore className="fill-current cursor-pointer mx-2" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute flex flex-col divide-y-2 divide-secondary-gray divide-opacity-20 rounded-md shadow-md pl-3 py-4 pr-4 bg-white focus:outline-none">
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <IconShare className="mx-1" />
                    <u>Compartir</u>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="flex flex-row my-1 items-center">
          <IconStart className="fill-current text-warning mr-1" />
          <label className="mr-1">4.5{props.puntuacion}</label>
          <Divider type="line-blue" />
          <IconMap />
          <label>Montería, Córdoba{props.ubicacion}</label>
        </div>
      </div>
      <div className="flex flex-col">
        <Divider type="normal-hor" />
        <h4 className="mt-2 mb-1">Fecha</h4>
        <label className="my-1">
          <FechaConDia fecha={props.fecha} />
        </label>
        <label className="flex flex-row items-center my-1">
          06:00PM{props.horaEntrada}
          <Divider type="line-dark" />
          08:00PM{props.horaSalida}
        </label>
        <Divider type="normal-hor" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <label className="w-full my-1">Hora de servicio</label>
          {/* <label>{`${props.horaSalida-props.horaEntrada} horas`}</label> */}
          <label className="flex w-full justify-end my-1">{props.horas}</label>
        </div>
        <div className="flex flex-row">
          <label className="w-full my-1">Valor del servicio por hora</label>
          {/* <label>{props.valor}</label> */}
          <label className="flex w-full justify-end my-1">{props.servicio}</label>
        </div>
        <div className="flex flex-row">
          <h4 className="w-full my-1">Total</h4>
          {/* <h4>{`${props.horasServicio*props.valor} horas`}</h4> */}
          <h4 className="flex w-full justify-end my-1">{props.valor}</h4>
        </div>
      </div>
    </div>
  );
}

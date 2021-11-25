import { React, useState } from "react";
import { Input } from "../Controls/Input";
import Button from "../Controls/Buttons";
import { SimpleDate } from "../Controls/DropDown";
import { ReactComponent as IconEdit } from "../../../src/assets/img/iconEdit.svg";
import Avatar from "../Avatars/Avatar";

export default function AccountConf(props) {
  const [date, setDate] = useState("");
  return(
    <div className="flex flex-col-reverse md:flex-row px-8 sm:px-16 gap-x-10">
      <div className="flex flex-col w-full md:w-2/3">
        <div className="flex flex-col">
          <form id="formI">
            <div className="py-1 my-2">
              <h3>Nombre</h3>
              <div className="flex flex-row gap-x-3 pb-2">
                <Input
                  label="Nombres"
                  placeholder="Nombres"
                  color="secondary-light"
                  className="w-full"
                  onChange={(e) => e.target.value}
                />
                <Input
                  label="Apellidos"
                  placeholder="Apellidos"
                  color="secondary-light"
                  className="w-full"
                  onChange={(e) => e.target.value}
                />
              </div>
            </div>
            <div className="py-1 my-2">
              <h3>Fecha de Nacimiento</h3>
              <SimpleDate
                placeholder="DD/MM/AAAA"
                label="Fecha"
                color="secondary-light secondary-light w-full"
                date={date}
                setDate={setDate}
              />
            </div>
            <div className="py-2">
              <h3>Número de telefono</h3>
              <Input
                type="tel"
                label="Número de telefono"
                placeholder="Ingresa un número de telefono"
                color="secondary-light"
                className="w-full"
                onChange={(e) => e.target.value}
              />
            </div>
            <div className="flex flex-row w-full gap-x-3">
              <Button
                link=""
                className="mt-3 w-full"
                type="normalWith"
                text="Guardar cambios"
                handleClick={()=>{
                  document.getElementById("formI").reset();
                  alert("Cambios guardados")
                }}
              />
              <Button
                handleClick={() => {
                  document.getElementById("formI").reset();
                }}
                className="mt-3 w-full"
                type="outlineWith"
                color="blue"
                textColor="primary-500"
                text="Descartar cambios"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <div className="shadow-DropDown rounded-xl w-full h-full py-8 px-4">
          <div className="h-2/4 border-b border-secondary-dark border-opacity-10 flex flex-col items-center">
            <div className="relative rounded-lg text-secondary-gray">
              <img
                src={
                  "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                }
                alt="User profile"
                className="object-cover rounded-lg w-20"
              />
              <IconEdit className="absolute cursor-pointer -right-2.5 -bottom-2.5 p-1 border-2 border-white bg-secondary-light rounded-full fill-current text-primary-500" />
            </div>
            <h5 className="mt-4 text-secondary-dark">Faber Hoyos{props.name}</h5>
          </div>
          <div className="h-2/4 flex flex-col items-center justify-end text-primary-500">
            <h3>2{props.reseñas}</h3>
            <label className="mt-1 text-secondary-gray">Reseñas</label>
          </div>
        </div>
      </div>
    </div>
  );
}

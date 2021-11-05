import React from "react";
import { Input } from "../Controls/Input";
import GoogleIcon from "../../assets/img/iconGoogleColor.svg";
import FacebookIcon from "../../assets/img/iconFacebookColor.svg";
import Button from "../Controls/Buttons";
import {useState}  from "react";


export default function AccountSecurity(props) {
    const [password, setPassword] = useState('');
  return (
    <div className="flex flex-col md:flex-col px-8 sm:px-16 gap-x-10 w-full">
      <form className="py-1 my-2 w-full">
        <h3>Contraseña</h3>
        <Input
          type="password"
          label="Contraseña actual"
          placeholder="Ingrese su contraseña actual"
          color="secondary-light"
          className="w-full mb-5"
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        <div className="flex flex-row gap-x-3 pb-2">
          <Input
            type="password"
            label="Nueva Contraseña"
            placeholder="Ingrese nueva contraseña"
            color="secondary-light"
            className="w-full"
            onChange={(e) => e.target.value}
            required
          />
          <Input
            type="password"
            label="Confirme Nueva Contraseña"
            placeholder="Confirme la nueva contraseña"
            color="secondary-light"
            className="w-full"
            onChange={(e) => e.target.value}
            required
          />
        </div>
        <div className="flex flex-row w-full gap-x-3">
          <Button
            className="mt-3 w-full"
            type="normalWith"
            text="Guardar cambios"
          />
          <Button
            className="mt-3 w-full"
            type="outlineWith"
            color="blue"
            textColor="primary-500"
            text="Descartar cambios"
          />
        </div>
      </form>
      <h3>Conectar Cuenta con Redes Sociales</h3>
      <div className="w-full flex flex-row gap-x-3">
        <Button
          className="my-3 w-full text-secondary-dark text-xs"
          type="iconBtnwith"
          text="Iniciar con Facebook"
          color="dark"
          children={FacebookIcon}
        />
        <Button
          className="my-3 w-full text-secondary-dark text-xs"
          type="iconBtnwith"
          text="Iniciar con Google"
          color="dark"
          children={GoogleIcon}
        />
      </div>
    </div>
  );
}

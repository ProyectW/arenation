import AccountConf from "./Account/AccountConf";
import AccountSecurity from "./Account/AccountSecurity";
import AccountHeader from "./Header/AccountHeader";
import { Input } from "./Controls/Input";
import Button from "./Controls/Buttons";

export default function AccountDetails(props) {
  if (props.type === "cuenta") {
    return (
      <>
        <AccountHeader place="cuenta" />
        <div className="px-8 sm:px-16">
          <Button
            link="/account/informacion"
            type="infoBtn"
            label="Información Personal"
            className="w-full cursor-pointer my-6"
            value="Modifica y actualiza tus datos personales, esto nos ayudará a contactarnos contigo cuando sea necesario."
          />
          <Button
            link="/account/seguridad"
            type="infoBtn"
            label="Seguridad"
            className="w-full cursor-pointer my-6"
            value="Cambiar la contraseña periodicamente te ayudará a proteger tu cuenta."
          />
          <Button
            link="/account/metodos"
            type="infoBtn"
            label="Métodos de pago"
            className="w-full cursor-pointer my-6"
            value="Agrega métodos de pago y administra tus gastos."
          />
        </div>
      </>
    );
  } else if (props.type === "info") {
    return (
      <>
        <AccountHeader place="info" />
        <AccountConf />
      </>
    );
  } else if (props.type === "seguridad") {
    return (
      <>
        <AccountHeader place="seguridad" />
        <AccountSecurity />
      </>
    );
  } else if (props.type === "metodos") {
    return (
      <>
        <AccountHeader place="metodos" />
        <AccountSecurity />
      </>
    );
  }
}

import { ReactComponent as IconPaymentDone } from "../../src/assets/img/iconPaymentDone.svg";
import { ReactComponent as IconPaymentWrong } from "../../src/assets/img/iconPaymentWrong.svg";
import Button from "./Controls/Buttons";

export default function AlertDone() {
  return (
    <div className="flex flex-col items-center ">
      <div className="my-2 md:w-1/3 flex flex-col items-center justify-center text-secondary-dark shadow-DropDown rounded-lg p-5 text-center">
        <IconPaymentDone />
        <h2 className="my-2">¡Pago Realizado!</h2>
        <label className="my-2">El pago se completó correctamente. En la bandeja de tu correo encontrarás el comprobante de pago. Disfruta tu juego!</label>
        <Button type="normalWith" text="Entendido" className="my-2 w-full"/>
      </div>
    </div>
  );
}

export function AlertWrong() {
  return (
    <div className="flex flex-col items-center ">
      <div className="my-2 md:w-1/3 flex flex-col items-center justify-center text-secondary-dark shadow-DropDown rounded-lg p-5 text-center">
        <IconPaymentWrong />
        <h2 className="my-2">¡Oh no!</h2>
        <label className="my-2">El pago no pudo completarse. Intenta nuevamente o contacta a soporte. Haremos lo posible para ayudarte.</label>
        <Button type="normalWith" text="Entendido" className="my-2 w-full"/>
        <u className="cursor-pointer">Reportar un error</u>
      </div>
    </div>
  );
}

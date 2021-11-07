import { ReactComponent as ImgAvatar } from "../../src/assets/img/imgAvatar.svg";
import Button from "./Controls/Buttons";

export default function OverlayPhoto() {
  return (
    <div className="flex flex-col items-center ">
      <div className="my-3 md:w-1/3 flex flex-col items-center text-secondary-dark shadow-DropDown rounded-lg p-5 text-center">
        <h2>Cambiar Foto de Perfil</h2>
        <label className="mt-3 mb-5">
          La foto de perfil te identificará entre el resto de usuarios. Si eres
          Local, te permitirá mostrar tu marca, lo que es muy importante.
        </label>
        <ImgAvatar />
        <div className="mt-5 flex flex-row w-full gap-2">
          <Button
            tipo="file"
            type="normalWith"
            text="Subir Imagen"
            className="w-full"
          />
          <Button
            type="outlineWith"
            color="blue"
            textColor="primary-500"
            text="Cancelar"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

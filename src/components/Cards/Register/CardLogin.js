import { React, useState, useRef, Fragment } from "react";
import { ReactComponent as CloseIcon } from "../../../assets/img/closeIcon.svg";
import GoogleIcon from "../../../assets/img/iconGoogleColor.svg";
import FacebookIcon from "../../../assets/img/iconFacebookColor.svg";
import Button from "../../Controls/Buttons";
import { Input } from "../../Controls/Input";
import { Dialog, Transition } from "@headlessui/react";

function CardLogin(props) {
  const [hide, setHide] = useState(true);

  return (
    <>
      {hide ? (
        <></>
      ) : (
        <>
          <div className="flex justify-center items-center w-full h-full z-10 fixed">
            <div className="w-full h-full z-30 bg-secondary-dark opacity-70"></div>
            <div className="p-2 w-1/4 h-max bg-white rounded-lg z-30 fixed">
              <div className="p-1 flex items-center border-b border-secondary-gray">
                <button
                  onClick={() => {
                    setHide(true);
                  }}
                >
                  <CloseIcon />
                </button>
                <h4 className="w-full text-center text-secondary-dark font-semibold">
                  Iniciar Sesión
                </h4>
              </div>
              <div className="p-1 mt-2">
                <form>
                  <label className="w-full text-secondary-dark font-semibold">
                    Bienvenido a Arenation
                  </label>
                  <div className="mt-3 p-1 flex flex-col w-full bg-secondary-light rounded-lg">
                    <Input
                      type="mail"
                      label="Correo electronico"
                      placeholder="Correo electronico"
                      color="secondary-light"
                    />
                  </div>
                  <div className="mt-3 mb-3 p-1 flex flex-col w-full bg-secondary-light rounded-lg">
                    <Input
                      type="password"
                      label="Contraseña"
                      placeholder="Contraseña"
                      color="secondary-light"
                    />
                  </div>
                  <Button className="w-full" type="normal" text="Continuar" />
                  <div className="my-2 w-full flex justify-end">
                    <u className="text-right font-semibold text-secondary-dark text-xs">
                      ¿Ha olvidado su contraseña?
                    </u>
                  </div>
                </form>
                <div className="flex items-center text-sm my-2">
                  <hr className="border-1 w-full my-2 border-secondary-gray" />
                  <label>O</label>
                  <hr className="border-1 w-full my-2 border-secondary-gray" />
                </div>
                <div className="w-full">
                  <Button
                    className="my-3 w-full text-secondary-dark text-xs"
                    type="iconBtn"
                    text="Iniciar con Facebook"
                    color="dark"
                    children={FacebookIcon}
                  />
                  <Button
                    className="my-3 w-full text-secondary-dark text-xs"
                    type="iconBtn"
                    text="Iniciar con Google"
                    color="dark"
                    children={GoogleIcon}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default function CardLoginP(props) {
    const cancelButtonRef = useRef(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Transition.Root show={props.isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-30 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={props.setIsOpen}
            >
                <div className="flex items-center justify-center min-h-screen px-8 sm:px-16 md:max-w-2xl mx-auto text-center sm:block ">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-secondary-dark bg-opacity-80 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom p-4 bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full">
                            <div className="flex items-center justify-center w-full relative pb-4 border-b-2 border-secondary-dark border-opacity-20">
                                <h4 className="">Iniciar Sesi&oacute;n</h4>
                                <CloseIcon
                                    className="fill-current cursor-pointer text-secondary-dark absolute left-0"
                                    onClick={() => props.setIsOpen(false)}
                                />
                            </div>
                            <div class="flex flex-col pt-4">
                                <h5>Bienvenido a Arenation</h5>
                                <form className="">
                                    <Input
                                        type="mail"
                                        label="Correo electrónico"
                                        placeholder="Correo electrónico"
                                        color="secondary-light"
                                        className="w-full mt-4"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                    />
                                    <Input
                                        type="password"
                                        label="Contraseña"
                                        placeholder="Contraseña"
                                        color="secondary-light"
                                        className="w-full mt-4"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                    />
                                    <Button
                                        type="normal"
                                        link="/"
                                        text="Continuar"
                                        className="w-full mt-4"
                                        handleClick={() =>
                                            props.setIsOpen(false)
                                        }
                                    />
                                    <div class="flex justify-end mt-2">
                                        <u className="text-right font-bold text-secondary-dark text-xs cursor-pointer">
                                            ¿Ha olvidado su contraseña?
                                        </u>
                                    </div>
                                </form>
                                <div className="flex items-center text-sm my-2">
                                    <hr className="border-2 w-full my-2 border-secondary-dark border-opacity-20" />
                                    <label className="px-1">O</label>
                                    <hr className="border-2 w-full my-2 border-secondary-dark border-opacity-20" />
                                </div>
                                <Button
                                    type="iconBtn"
                                    link="/"
                                    text="Iniciar con Facebook"
                                    color="dark"
                                    className="w-full mt-4"
                                    handleClick={() => props.setIsOpen(false)}
                                    children={FacebookIcon}
                                />
                                <Button
                                    type="iconBtn"
                                    link="/"
                                    text="Iniciar con Google"
                                    color="dark"
                                    className="w-full mt-4"
                                    handleClick={() => props.setIsOpen(false)}
                                    children={GoogleIcon}
                                />
                            </div>
                        </div>
                    </Transition.Child>
                </div>
                <Button
                  type="iconBtn"
                  link="/"
                  text="Continuar"
                  color="dark"
                  className="w-full mt-4"
                  handleClick={() => props.setIsOpen(false)}
                  children={FacebookIcon}
                />
                <Button
                  type="iconBtn"
                  link="/"
                  text="Continuar"
                  color="dark"
                  className="w-full mt-4"
                  handleClick={() => props.setIsOpen(false)}
                  children={GoogleIcon}
                />
      </Dialog>
    </Transition.Root>
  );
}

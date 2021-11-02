import { React, useState, useEffect } from "react";
import { ReactComponent as CloseIcon } from "../../../assets/img/closeIcon.svg";
import { ReactComponent as CheckIcon } from "../../../assets/img/iconCheck.svg";
import { ReactComponent as BackIcon } from "../../../assets/img/iconBack.svg";
import GoogleIcon from "../../../assets/img/iconGoogleColor.svg";
import FacebookIcon from "../../../assets/img/iconFacebookColor.svg";
import Button from "../../Controls/Buttons";
import { Input } from "../../Controls/Input";
import { SimpleDate } from "../../Controls/DropDown";

export default function CardSignUp(props) {
    const [hide, setHide] = useState(true);
    const [btnHide, setBtnHide] = useState(true);
    const [date, setDate] = useState("");
    const [check, setCheck] = useState(false);
    const [checkT, setCheckT] = useState(false);

    useEffect(() => {
        try {
            document
                .getElementById("register")
                .addEventListener("click", () => {
                    setHide(false);
                });
            document
                .getElementById("divClick")
                .addEventListener("click", () => {
                    setHide(true);
                    setBtnHide(true);
                });
        } catch (e) {
            return e;
        }
    });

    return (
        <>
            {hide ? (
                <></>
            ) : (
                <>
                    {btnHide ? (
                        <>
                            <div className="flex justify-center items-center w-full h-full z-10 fixed">
                                <div
                                    id="divClick"
                                    className="w-full h-full z-30 bg-secondary-dark opacity-70"
                                ></div>
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
                                            Registrarte
                                        </h4>
                                    </div>
                                    <div className="p-1 mt-2">
                                        <form id="formLogin">
                                            <label className="w-full text-secondary-dark font-semibold">
                                                Bienvenido a Arenation
                                            </label>
                                            <div className="mt-3 p-1 flex flex-col w-full bg-secondary-light rounded-lg">
                                                <Input
                                                    id="idCorreo"
                                                    type="email"
                                                    label="Correo electronico"
                                                    placeholder="Correo electronico"
                                                    color="secondary-light"
                                                    required={true}
                                                />
                                            </div>
                                            <Button
                                                link=""
                                                handleClick={() => {
                                                    const text =
                                                        document.getElementById(
                                                            "idCorreo"
                                                        );

                                                    if (text.value === "") {
                                                        text.placeholder =
                                                            "¡Requerido!";
                                                    } else {
                                                        return setBtnHide(
                                                            false
                                                        );
                                                    }
                                                }}
                                                className="mt-3 w-full"
                                                type="normal"
                                                text="Continuar"
                                            />
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
                    ) : (
                        <>
                            <div className="flex justify-center items-center w-full h-full z-10 fixed">
                                <div className="w-full h-full z-30 bg-secondary-dark opacity-70"></div>
                                <div className="p-2 w-1/3 h-max bg-white rounded-lg z-30 fixed">
                                    <div className="p-1 flex items-center border-b border-secondary-gray">
                                        <button
                                            onClick={() => {
                                                document
                                                    .getElementById(
                                                        "formRegister"
                                                    )
                                                    .reset();
                                                setBtnHide(true);
                                            }}
                                        >
                                            <BackIcon />
                                        </button>
                                        <h4 className="w-full text-center text-secondary-dark font-semibold">
                                            Registrarte
                                        </h4>
                                    </div>
                                    <div className="p-1 mt-2">
                                        <form id="formRegister">
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
                                            <div className="mt-3 p-1 flex flex-col w-full bg-secondary-light rounded-lg">
                                                <Input
                                                    id="pass"
                                                    type="password"
                                                    label="Contraseña"
                                                    placeholder="Contraseña"
                                                    color="secondary-light"
                                                    handleInputChange={(e) => {
                                                        const value =
                                                            e.target.value;
                                                        if (value.length > 8) {
                                                            setCheck(true);
                                                            if (
                                                                /[^A-Za-z\d]/.test(
                                                                    value
                                                                ) &&
                                                                value.match(
                                                                    /\d+/
                                                                ) != null
                                                            ) {
                                                                setCheckT(true);
                                                            } else {
                                                                setCheckT(
                                                                    false
                                                                );
                                                            }
                                                        } else {
                                                            setCheck(false);
                                                            setCheckT(false);
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <div className="mt-3 p-1 flex flex-col w-full bg-secondary-light rounded-lg">
                                                <Input
                                                    type="text"
                                                    label="Nombres"
                                                    placeholder="Nombres"
                                                    color="secondary-light"
                                                />
                                            </div>
                                            <div className="mt-3 p-1 flex flex-col w-full bg-secondary-light rounded-lg">
                                                <Input
                                                    type="text"
                                                    label="Apellidos"
                                                    placeholder="Apellidos"
                                                    color="secondary-light"
                                                />
                                            </div>
                                            <SimpleDate
                                                placeholder="DD/MM/AAAA"
                                                label="Fecha"
                                                color="secondary-light secondary-light w-full"
                                                date={date}
                                                setDate={setDate}
                                            ></SimpleDate>
                                            <i className="flex items-center">
                                                {check ? (
                                                    <CheckIcon />
                                                ) : (
                                                    <CloseIcon />
                                                )}
                                                <label className="text-secondary-dark text-xs">
                                                    Más de 8 dígitos
                                                </label>
                                            </i>
                                            <i className="flex items-center">
                                                {checkT ? (
                                                    <CheckIcon />
                                                ) : (
                                                    <CloseIcon />
                                                )}
                                                <label className="text-secondary-dark text-xs">
                                                    Contiene por lo menos un
                                                    número y un simbolo
                                                </label>
                                            </i>
                                            <Button
                                                className="mt-3 w-full"
                                                type="normal"
                                                text="Continuar"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
}

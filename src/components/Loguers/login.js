import React from "react";
import Button from "../Buttons/Buttons";
import CloseIcon from "../../assets/img/closeIcon.svg";

export default function Login(props) {
    return (
        <div className="z-50 bg-white rounded-lg shadow-md h-max w-96 p-5">
            <div className="flex p-3 border-b-2 w-full text-secondary-light">
                <img src={CloseIcon} alt="Icon Close" />
                <h4 className="text-secondary-dark text-center w-full">Registrate</h4>
            </div>
            <div className="p-3 w-full">
                <h5 className="text-secondary-dark">Bienvenido a Arenation</h5>
            </div>
            <div className="bg-secondary-light rounded-lg p-3 w-full">
                <form className="flex flex-col">
                    <label className="text-secondary-dark">Correo electronico</label>
                    <input className="bg-secondary-light" placeholder="Correo electronico"></input>
                    <div className="py-2 w-full">
                        <Button
                            type="normal"
                            /* handleClick={handleClick} */
                            text="Continuar"
                            className="text-white mr-2 w-full"
                            link=""
                        />
                    </div>
                </form>
            </div>
            <span></span>
        </div>
    );
}
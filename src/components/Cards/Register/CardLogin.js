import {React, useState} from "react";
import { ReactComponent as CloseIcon} from "../../../assets/img/closeIcon.svg";
import GoogleIcon from "../../../assets/img/iconGoogleColor.svg";
import FacebookIcon from "../../../assets/img/iconFacebookColor.svg";
import Button from "../../Controls/Buttons";
import {Input} from "../../Controls/Input";


export default function CardLogin(props) {

    const [hide,setHide] = useState(true);

    return(
        <>{hide ? (<></>):(<>
            <div className="flex justify-center items-center w-full h-full z-10 fixed">
            <div className="w-full h-full z-30 bg-secondary-dark opacity-70"></div>
            <div className="p-2 w-1/4 h-max bg-white rounded-lg z-30 fixed">
                <div className="p-1 flex items-center border-b border-secondary-gray">
                    <button onClick={()=>{setHide(true)}}><CloseIcon/></button>
                    <h4 className="w-full text-center text-secondary-dark font-semibold">Iniciar Sesión</h4>
                </div>
                <div className="p-1 mt-2">
                    <form>
                        <label className="w-full text-secondary-dark font-semibold">Bienvenido a Arenation</label>
                        <div className="mt-3 p-1 flex flex-col w-full bg-secondary-light rounded-lg">
                            <Input type="mail" label="Correo electronico" placeholder="Correo electronico" color="secondary-light"/>
                        </div>
                        <div className="mt-3 mb-3 p-1 flex flex-col w-full bg-secondary-light rounded-lg">
                            <Input type="password" label="Contraseña" placeholder="Contraseña" color="secondary-light"/>
                        </div>
                        <Button className="w-full" type="normal" text="Continuar"/>
                        <div className="my-2 w-full flex justify-end">
                            <u className="text-right font-semibold text-secondary-dark text-xs">¿Ha olvidado su contraseña?</u>
                        </div>
                    </form>
                    <div className="flex items-center text-sm my-2">
                        <hr className="border-1 w-full my-2 border-secondary-gray"/>
                        <label>O</label>
                        <hr className="border-1 w-full my-2 border-secondary-gray"/>
                    </div>
                    <div className="w-full">
                        <Button className="my-3 w-full text-secondary-dark text-xs" type="iconBtn" text="Iniciar con Facebook" color="dark" children={FacebookIcon}/>
                        <Button className="my-3 w-full text-secondary-dark text-xs" type="iconBtn" text="Iniciar con Google" color="dark" children={GoogleIcon}/>
                    </div>
                </div>
            </div>
        </div></>)}</>
    );
}
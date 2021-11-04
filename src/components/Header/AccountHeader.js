import React from "react";
import {Link } from "react-router-dom";

export default function AccountHeader(props) {
    
    if(props.place === "cuenta"){
        return(
            <div className="flex flex-col w-full px-8 py-8 sm:px-16 text-secondary-dark">
                <h1>Cuenta</h1>
                <div className="flex flex-row py-2 border-b border-secondary-gray">
                    <Link to="/account">
                        <label className="cursor-pointer">{"Cuenta > "}</label>
                    </Link>
                </div>
            </div>
        );
    }else if(props.place === "info"){
        return(
            <div className="flex flex-col w-full px-8 py-8 sm:px-16 text-secondary-dark">
                <h1>Información personal</h1>
                <div className="flex flex-row py-2 border-b border-secondary-gray">
                    <Link to="/account">
                        <label className="cursor-pointer">{"Cuenta > "}</label>
                    </Link>
                    <label>{"Información personal"}</label>
                </div>
            </div>
        );
    }else if(props.place === "seguridad"){
        return(
            <div className="flex flex-col w-full px-8 py-8 sm:px-16 text-secondary-dark">
                <h1>Seguridad</h1>
                <div className="flex flex-row py-2 border-b border-secondary-gray">
                    <Link to="/account">
                        <label className="cursor-pointer">{"Cuenta > "}</label>
                    </Link>
                    <label>{"Seguridad"}</label>
                </div>
            </div>
        );
    }else if(props.place === "metodos"){
        return(
            <div className="flex flex-col w-full px-8 py-8 sm:px-16 text-secondary-dark">
                <h1>Métodos de pago</h1>
                <div className="flex flex-row py-2 border-b border-secondary-gray">
                    <Link to="/account">
                        <label className="cursor-pointer">{"Cuenta > "}</label>
                    </Link>
                    <label>{"Métodos de pago"}</label>
                </div>
            </div>
        );
    }
}
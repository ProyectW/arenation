import React from "react";
import Logo from "../../assets/img/logo.svg";
import LogoFacebook from "../../assets/img/iconFacebook.svg";
import LogoInstagram from "../../assets/img/iconInstagram.svg";
import LogoTwitter from "../../assets/img/iconTwitter.svg";
import { Link } from "react-router-dom";

export default function FooterLocal(props) {
    return (
        <div className="px-8 md:px-12 flex flex-col items-center w-full bg-primary-800 text-white">
            <div className="flex items-center">
                <h1 className="py-12 text-center">
                    Anuncia tus escenarios deportivos y llega a más personas
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left w-full pb-12 border-b-2">
                <div className="md:w-1/3 flex flex-col pb-6 md:pb-0">
                    <h4>Navegación</h4>
                    <ul>
                        <li>
                            <Link to="">Inicio</Link>
                        </li>
                        <li>
                            <Link to="">Escenario deportivos</Link>
                        </li>
                        <li>
                            <Link to="">Ser Local</Link>
                        </li>
                    </ul>
                </div>
                <div className="md:w-1/3 flex flex-col pb-6 md:pb-0 items-center">
                    <h4>Aspectos Legales</h4>
                    <ul>
                        <li>
                            <Link to="">Información general</Link>
                        </li>
                        <li>
                            <Link to="">Politicas de privacidad</Link>
                        </li>
                        <li>
                            <Link to="">Términos de servicio</Link>
                        </li>
                    </ul>
                </div>
                <div className="md:w-1/3 flex flex-col items-end md:items-end">
                    <h4>Habla con nosotros</h4>
                    <ul>
                        <li>
                            <Link to="">support@arenation.com</Link>
                        </li>
                        <li>
                            <Link to="">+57 310 608 3446</Link>
                        </li>
                        <li>
                            <Link to="">Facebook</Link>
                        </li>
                        <li>
                            <Link to="">LinkedIn</Link>
                        </li>
                        <li>
                            <Link to="">Twitter</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center py-12">
                <div className="md:w-1/3 flex justify-start pb-6 md:pb-0">
                    <img src={Logo} alt="Arenation Logo" />
                </div>
                <div className="md:w-1/3 flex justify-center text-center pb-6 md:pb-0">
                    © 2021 Arenation. All Rights Reserved.
                </div>
                <div className="md: w-1/3 flex justify-center md:justify-end">
                    <Link to="">
                        <img
                            src={LogoFacebook}
                            alt="Facebook Logo"
                            className="p-2"
                        />
                    </Link>
                    <Link to="">
                        <img
                            src={LogoInstagram}
                            alt="Instagram Logo"
                            className="p-2"
                        />
                    </Link>
                    <Link to="">
                        <img
                            src={LogoTwitter}
                            alt="Twitter Logo"
                            className="p-2"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

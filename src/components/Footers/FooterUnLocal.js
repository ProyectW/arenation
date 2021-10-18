import Button from "../Buttons/Buttons";
import Logo from "../../assets/img/logo.svg";
import LogoFacebook from "../../assets/img/iconFacebook.svg";
import LogoInstagram from "../../assets/img/iconInstagram.svg";
import LogoTwitter from "../../assets/img/iconTwitter.svg";
import { Link } from "react-router-dom";

export default function FooterUnLogged(props) {
    return(
        <div className="pl-10 pr-10 flex flex-col items-center w-full h-screen bg-primary-800 text-white">
            <div className="h-1/4 flex items-center">
                <h1 className="p-5 text-center">Reserva escenarios deportivos desde cualquier lugar y en cualquier momento</h1>
            </div>
            <div className="h-1/4 w-full flex items-center justify-center">
                <Button
                    type="normal"
                    handleClick={handleClick}
                    text="Quiero ser local"
                    className="text-white mr-2"
                />
            </div>
            <div className="h-1/4 flex grid-cols-3 w-full">
            <div className="w-1/3 flex items-start flex-col">
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
                <div className="w-1/3 flex flex-col items-center">
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
                <div className="w-1/3 flex flex-col items-end">
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
            <div className="border-t w-full h-1/4 flex items-center">
                <div className="w-1/3 flex justify-start"><img src={Logo} alt="Arenation Logo" /></div>
                <div className="w-1/3 flex justify-center">© 2021 Arenation. All Rights Reserved. </div>
                <div className="w-1/3 flex justify-end">
                    <a href="#"><img src={LogoFacebook} alt="Facebook Logo" className="p-2"/></a>
                    <a href="#"><img src={LogoInstagram} alt="Instagram Logo"  className="p-2" /></a>
                    <a href="#"><img src={LogoTwitter} alt="Twitter Logo" className="p-2"/></a>                    
                </div>
            </div>
        </div>
    );
}

function handleClick(e) {
    console.log("Click!!");
}
import Button from "../Buttons/Buttons";
import Logo from "../../assets/img/logo.svg";
import LogoFacebook from "../../assets/img/iconFacebook.svg";
import LogoInstagram from "../../assets/img/iconInstagram.svg";
import LogoTwitter from "../../assets/img/iconTwitter.svg";

export default function FooterUnLogged(props) {
    return(
        <div className="pl-10 pr-10 flex flex-col items-center w-full h-screen bg-primary-800 text-white">
            <div className="h-1/3 flex items-center">
                <h1 className="p-5 text-center">Anuncia tus escenarios deportivos y llega a más personas</h1>
            </div>
            <div className="h-1/3 flex grid-cols-3 w-full">
                <div className="w-1/3 flex items-start flex-col">
                    <h4>Navegación</h4>
                    <ul>
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Escenario deportivos</a>
                        </li>
                        <li>
                            <a href="#">Ser Local</a>
                        </li>
                    </ul>
                </div>
                <div className="w-1/3 flex flex-col items-center">
                    <h4>Aspectos Legales</h4>
                    <ul>
                        <li>
                            <a href="#">Información general</a>
                        </li>
                        <li>
                            <a href="#">Politicas de privacidad</a>
                        </li>
                        <li>
                            <a href="#">Términos de servicio</a>
                        </li>
                    </ul>
                </div>
                <div className="w-1/3 flex flex-col items-end">
                    <h4>Habla con nosotros</h4>
                    <ul>
                        <li>
                            <a href="#">support@arenation.com</a>
                        </li>
                        <li>
                            <a href="#">+57 300 0000 000</a>
                        </li>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">LinkedIn</a>
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t w-full h-1/3 flex items-center">
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
//import Logo from "../assets/img/logo.svg";
import Button from "../Buttons/Buttons";
import Avatar from "../Avatars/Avatar";
import Logo from "../../assets/img/logo.svg";
//import { ReactComponent as MenuIcon } from "../../assets/img/menuIcon.svg";

export default function UnLoggedNavBar(props) {
    return (
        <nav className="bg-white shadow-md px-12 py-2 flex justify-between items-center z-10">
            <img src={Logo} alt="Arenation Logo" />
            <div className="flex items-center">
                <Button
                    type="normal"
                    handleClick={handleClick}
                    text="Registrate"
                    className="mr-2"
                />
                <Button
                    type="outline"
                    handleClick={handleClick}
                    text="Quiero ser local"
                    className="mr-2"
                />
                <Avatar isLogged={false} />
            </div>
        </nav>
    );
}

function handleClick(e) {
    console.log("Click!!");
}

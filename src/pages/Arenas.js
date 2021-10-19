import React from "react";
import Button from "../components/Controls/Buttons";
import facebookIcon from "../assets/img/solidIconFacebook.svg";
import googleIcon from "../assets/img/iconGoogle.svg";
import Input from "../components/Controls/Input";

export default class Arenas extends React.Component {
    render() {
        return (
            <div className="pt-16">
                <h1>Arenas</h1>
                <Button
                    type="badgeBtn"
                    link="/"
                    handleClick={this.handleClick}
                    text="Badge"
                    color="blue"
                    count={2}
                />
                <Button
                    type="iconBtn"
                    link="/"
                    handleClick={this.handleClick}
                    text="Badge"
                    color="blue"
                >
                    <img
                        src={facebookIcon}
                        alt="facebook"
                        className="w-6 mr-1"
                    />
                </Button>
                <Button
                    type="iconBtn"
                    link="/"
                    handleClick={this.handleClick}
                    text="Badge"
                    color="blue"
                >
                    <img src={googleIcon} alt="facebook" className="w-6 mr-1" />
                </Button>
                <form>
                    <div className="p-2 w-3/4">
                        <Input
                            type="email"
                            label="Correo electr&oacute;nico"
                            placeholder="Ingrese correo electr&oacute;nico"
                        />
                    </div>
                    <div className="p-2 w-3/4">
                        <Input
                            type="text"
                            label="Nombre"
                            placeholder="Ingrese primer nombre"
                        />
                    </div>
                    <div className="p-2 w-3/4">
                        <Input
                            type="password"
                            label="Contraseña"
                            placeholder="Ingrese contraseña"
                        />
                    </div>
                    <div className="p-2 w-3/4">
                        <Input
                            type="tel"
                            label="N&uacute;mero de tel&eacute;fono"
                            placeholder="Ingrese n&uacute;mero de tel&eacute;fono"
                        />
                    </div>
                </form>
            </div>
        );
    }

    handleClick() {
        console.log("Hey!");
    }
}

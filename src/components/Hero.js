import Input from "./Controls/Input";
import React from "react";
import { ReactComponent as SearchIcon } from "../assets/img/iconSearch.svg";
import { ReactComponent as ArrowIcon } from "../assets/img/iconArrow.svg";

import Button from "./Controls/Buttons";

export default class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = { location: "", sport: "1", date: "" };
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.habdleSportChange = this.handleSportChange.bind(this);
        this.habdleDateChange = this.handleDateChange.bind(this);
        this.handleClickSearch = this.handleClickSearch.bind(this);
        this.options = [
            { value: "1", text: "F&uacute;bol" },
            { value: "2", text: "Baloncesto" },
            { value: "3", text: "B&eacute;isbol" },
        ];
    }

    handleLocationChange(event) {
        this.setState({ location: event.target.value });
    }

    handleSportChange(event) {
        this.setState({ sport: event.target.value });
    }

    handleDateChange(event) {
        this.setState({ date: event.target.value });
    }

    handleClickSearch(event) {
        console.log(this.state);
    }
    render() {
        return (
            <>
                <div
                    style={{
                        backgroundImage: `url(${"https://images.unsplash.com/photo-1531861184681-f2de7dd72da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"})`,
                    }}
                    className="min-h-screen w-full bg-cover flex flex-col py-14 px-8 sm:px-16 lg:px-48 justify-center items-center filter text-secondary-dark"
                >
                    <h1 className="text-center pb-6 text-2xl md:text-4xl">
                        Reserva escenarios deportivos cuando quieras y desde
                        dónde quieras
                    </h1>
                    <div className="flex flex-col w-full md:flex-row bg-white p-4 rounded-2xl">
                        <Input
                            type="text"
                            placeholder="¿En d&oacute;nde quieres jugar?"
                            label="Ubicaci&oacute;n"
                            color="white w-full"
                            handleInputChange={this.handleLocationChange}
                        ></Input>
                        <Input
                            type="select"
                            placeholder="¿Qu&eacute; quieres jugar?"
                            label="Deporte"
                            color="white white w-full"
                            value={this.state.sport}
                            handleInputChange={this.handleSportChange}
                            options={this.options}
                        ></Input>
                        <Input
                            type="text"
                            placeholder="¿Qu&eacute; d&iacute;a quieres jugar?"
                            label="Fecha"
                            color="white white w-full"
                            handleInputChange={this.handleDateChange}
                        ></Input>
                        <button
                            onClick={this.handleClickSearch}
                            className="p-4 md:px-5 rounded-lg bg-primary-500 flex items-center justify-center"
                        >
                            <SearchIcon className="fill-current text-white" />
                        </button>
                    </div>
                    <h2 className="text-center py-4 text-xl md:text-3xl">
                        Reserva escenarios deportivos cuando quieras y desde
                        dónde quieras
                    </h2>
                    <Button
                        type="normal"
                        text="Ver todos los escenarios"
                        handleClick={this.handleClickSearch}
                    />
                    <ArrowIcon className="fill-current text-white pt-6 w-8 animate-bounce" />
                </div>
            </>
        );
    }
}

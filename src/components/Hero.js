import Input from "./Controls/Input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../assets/img/iconSearch.svg";
import { ReactComponent as ArrowIcon } from "../assets/img/iconArrow.svg";
import { ListBox, SimpleDatePicker } from "./Controls/DropDown";
import Button from "./Controls/Buttons";

export default function Hero() {
    const options = [
        { id: 1, text: "Fútbol" },
        { id: 2, text: "Baloncesto" },
        { id: 3, text: "Béisbol" },
    ];
    const [location, setLocation] = useState("");
    const [selectedSport, setSelectedSport] = useState(options[0]);
    const [date, setDate] = useState("");

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleDateChange = (e) => {
        setLocation(e.target.value);
    };
    const handleSearchClick = (e) => {
        console.log("click");
    };
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${"https://images.unsplash.com/photo-1531861184681-f2de7dd72da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"})`,
                }}
                className="min-h-screen w-full bg-cover flex flex-col py-14 px-8 sm:px-16 lg:px-48 justify-center items-center filter text-secondary-dark"
            >
                <h1 className="text-center pb-6 text-2xl md:text-4xl">
                    Reserva escenarios deportivos cuando quieras y desde dónde
                    quieras
                </h1>
                <div className="flex flex-col w-full md:flex-row bg-white p-4 rounded-2xl">
                    <Input
                        type="text"
                        placeholder="¿En d&oacute;nde quieres jugar?"
                        label="Ubicaci&oacute;n"
                        color="white w-full"
                        handleInputChange={handleLocationChange}
                    ></Input>
                    <ListBox
                        className="bg-white"
                        label="Deporte"
                        options={options}
                        setSelected={setSelectedSport}
                        selected={selectedSport}
                    />
                    <SimpleDatePicker
                        placeholder="¿Qu&eacute; d&iacute;a quieres jugar?"
                        label="Fecha"
                        color="white white w-full"
                        date={date}
                        setDate={setDate}
                    ></SimpleDatePicker>
                    <Link to="/arenas">
                        <button
                            onClick={handleSearchClick}
                            className="p-4 md:px-5 rounded-lg bg-primary-500 flex items-center justify-center"
                        >
                            <SearchIcon className="fill-current text-white" />
                        </button>
                    </Link>
                </div>
                <h2 className="text-center py-4 text-xl md:text-3xl">
                    Reserva escenarios deportivos cuando quieras y desde dónde
                    quieras
                </h2>
                <Button
                    type="normal"
                    text="Ver todos los escenarios"
                    handleClick={handleSearchClick}
                    link="/"
                />
                <ArrowIcon className="fill-current text-white pt-6 w-8 animate-bounce" />
            </div>
        </>
    );
}

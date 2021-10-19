import Button from "../Controls/Buttons";
import Avatar from "../Avatars/Avatar";
import Logo from "../../assets/img/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/img/menuIcon.svg";
import { ReactComponent as CloseIcon } from "../../assets/img/closeIcon.svg";
import { Link, NavLink } from "react-router-dom";
import { Transition, Menu } from "@headlessui/react";

import { Fragment, useState } from "react";

export default function LocalNavBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white bg-opacity-100 shadow-md fixed left-0 right-0 z-10">
            <div className="px-8 py-2 sm:px-16 flex justify-between items-center">
                <Link to="/">
                    <img src={Logo} alt="Arenation Logo" />
                </Link>
                <div className="hidden md:flex items-center justify-center">
                    <NavLink
                        to="/arenas"
                        className="font-semibold text-secondary-gray pr-2"
                        activeStyle={{
                            color: "#1045FF",
                        }}
                    >
                        Anuncios
                    </NavLink>
                    <NavLink
                        to="/Bookings"
                        className="font-semibold text-secondary-gray pr-2"
                        activeStyle={{
                            color: "#1045FF",
                        }}
                    >
                        Reservas
                    </NavLink>
                    <NavLink
                        to="/Dashboard"
                        className="font-semibold text-secondary-gray pr-2"
                        activeStyle={{
                            color: "#1045FF",
                        }}
                    >
                        Dashboard
                    </NavLink>{" "}
                    <NavLink
                        to="/Schedule"
                        className="font-semibold text-secondary-gray"
                        activeStyle={{
                            color: "#1045FF",
                        }}
                    >
                        Calendario
                    </NavLink>
                </div>
                <div className="hidden md:flex items-center">
                    <Menu as="div" className="flex justify-center items-center">
                        <Menu.Button>
                            <Avatar
                                isLogged={true}
                                avatar={props.userData.avatar}
                            />
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className=" flex flex-col divide-y-2 divide-secondary-gray divide-opacity-20 origin-top-right absolute right-16 top-20 rounded-md shadow-md pl-3 py-4 pr-4 bg-white focus:outline-none">
                                <div className="flex flex-col">
                                    <Link to="/" className="py-1">
                                        Cambiar a visitante
                                    </Link>
                                    <Link to="/" className="pb-2">
                                        Mi cuenta
                                    </Link>
                                </div>
                                <div className="flex flex-col">
                                    <Link to="/" className="py-1">
                                        Cerrar sesi&oacute;n
                                    </Link>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                <button
                    className="p-3 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {!isOpen ? (
                        <MenuIcon className="fill-current text-primary-500 w-7" />
                    ) : (
                        <CloseIcon className="fill-current text-primary-500 w-7" />
                    )}
                </button>
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden px-8 sm:px-16 py-4 ">
                        <div className="flex flex-col divide-y-2 divide-secondary-gray divide-opacity-20 justify-center items-end bg-white p-4 rounded-2xl">
                            <div className="flex items-center justify-end">
                                <a href="/" className="pr-2 cursor-pointer">
                                    {props.userData.userName}{" "}
                                    {props.userData.userLastname}
                                </a>
                                <Avatar
                                    isLogged={true}
                                    avatar={props.userData.avatar}
                                    className="mb-2"
                                />
                            </div>
                            <div className="flex flex-col items-end justify-center divide-y-2 divide-secondary-gray divide-opacity-20  w-full text-secondary-dark">
                                <div className="flex flex-col  text-right w-full">
                                    <NavLink
                                        to="/arenas"
                                        className="py-1"
                                        activeStyle={{
                                            color: "#1045FF",
                                        }}
                                    >
                                        Anuncios
                                    </NavLink>
                                    <NavLink
                                        to="/Bookings"
                                        className="pb-1"
                                        activeStyle={{
                                            color: "#1045FF",
                                        }}
                                    >
                                        Reservas
                                    </NavLink>
                                    <NavLink
                                        to="/Dashboard"
                                        className="pb-1"
                                        activeStyle={{
                                            color: "#1045FF",
                                        }}
                                    >
                                        Dashboard
                                    </NavLink>{" "}
                                    <NavLink
                                        to="/Schedule"
                                        className="py-1"
                                        activeStyle={{
                                            color: "#1045FF",
                                        }}
                                    >
                                        Calendario
                                    </NavLink>
                                </div>
                                <div className="flex flex-col text-right w-full">
                                    <Link to="/" className="py-1">
                                        Cambiar a visitante
                                    </Link>
                                    <Link to="/" className="pb-2">
                                        Mi cuenta
                                    </Link>
                                    <Link to="/" className="pb-2">
                                        Cerrar sesi&oacute;n
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full pt-2">
                                <Button
                                    type="outline"
                                    handleClick={handleClick}
                                    text="Quiero ser local"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

function handleClick(e) {
    console.log("Click!!");
}

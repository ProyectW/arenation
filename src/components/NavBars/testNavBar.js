import Button from "../Buttons/Buttons";
import Avatar from "../Avatars/Avatar";
import Logo from "../../assets/img/logo.svg";
import { useState } from "react";
import { ReactComponent as MenuIcon } from "../../assets/img/menuIcon.svg";
import { ReactComponent as CloseIcon } from "../../assets/img/closeIcon.svg";
import { Transition } from "@headlessui/react";

export default function Nav(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img src={Logo} alt="Arenation Logo" />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
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
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <MenuIcon className="fill-current text-secondary-dark w-7" />
                            ) : (
                                <CloseIcon className="fill-current text-secondary-dark w-7" />
                            )}
                        </button>
                    </div>
                </div>
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
                    <div className="md:hidden" id="mobile-menu">
                        <div
                            ref={ref}
                            className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                        >
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
                    </div>
                )}
            </Transition>
        </nav>
    );
}

function handleClick(e) {
    console.log("Click!!");
}

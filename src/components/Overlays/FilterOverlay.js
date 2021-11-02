import { React, useState, useRef, Fragment } from "react";
import { ReactComponent as CloseIcon } from "../../assets/img/closeIcon.svg";
import { Dialog, Transition } from "@headlessui/react";
import { AutocompleteInput } from "../Controls/Input";

export default function FilterOverlay(props) {
    const [inputValue, setInputValue] = useState("");
    const handleButtonClick = () => {
        props.setValue(inputValue);
    };
    return (
        <Transition.Root show={props.isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-30 inset-0 overflow-y-auto"
                onClose={props.setIsOpen}
            >
                <div className="flex items-center justify-center min-h-screen px-8 sm:px-16 md:max-w-2xl mx-auto text-center sm:block ">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-secondary-dark bg-opacity-80 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom p-4 bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full">
                            <div className="flex items-center justify-center w-full relative pb-4 border-b-2 border-secondary-dark border-opacity-20">
                                <h4 className="">Filtros</h4>
                                <CloseIcon
                                    className="fill-current cursor-pointer text-secondary-dark absolute left-0"
                                    onClick={() => props.setIsOpen(false)}
                                />
                                <span className="font-semibold absolute right-0 underline cursor-pointer">
                                    Borrar
                                </span>
                            </div>
                            <div class="flex flex-col pt-4">
                                <div className="w-full pb-4 border-b-2 border-secondary-dark border-opacity-20 flex flex-col">
                                    <h5>Ciudad</h5>
                                    <AutocompleteInput
                                        type="text"
                                        label="Ciudad"
                                        placeholder="¿En dónde quieres jugar?"
                                        color="secondary-light"
                                        handleInputChange={(value) =>
                                        }
                                        className="w-full"
                                        suggestions={
                                            props.state.city.citySuggestions
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

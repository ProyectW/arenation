import { React, useState, Fragment} from "react";
import { ReactComponent as CloseIcon } from "../../assets/img/closeIcon.svg";
import { ReactComponent as CheckIcon } from "../../assets/img/iconCheck.svg";
import { Dialog, Transition } from "@headlessui/react";
import { AutocompleteInput } from "../Controls/Input";
import { ListBox } from "../Controls/DropDown";
import { MultiRangeSlider } from "../Controls/Slider";
import { Input } from "../Controls/Input";

export default function FilterOverlay(props) {
    const [inputCityValue, setInputCityValue] = useState(
        props.state.city.isFilledCity ? props.state.city.isFilledCity : ""
    );
    const handleChange = (e, value) => {
        props.state.price.handlePriceRangeChange(e, value);
    };

    const handleOnChangeChecked = (e, item) => {
        props.state.facility.setCheckedFacilities(
            props.state.facility.checkedFacilities.map((chkItem) => {
                if (item.id === chkItem.id) {
                    chkItem.isChecked = e.target.checked;
                }
                return chkItem;
            })
        );
    };
    return (
        <Transition.Root show={props.isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-30 inset-0 overflow-y-auto md:hidden"
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
                        <div className="inline-block align-bottom p-4 bg-white rounded-2xl text-left shadow-xl transform transition-all sm:my-8 sm:align-middle w-full">
                            <div className="flex items-center justify-center w-full relative pb-4 border-b-2 border-secondary-dark border-opacity-10">
                                <h4 className="">Filtros</h4>
                                <CloseIcon
                                    className="fill-current cursor-pointer text-secondary-dark absolute left-0"
                                    onClick={() => props.setIsOpen(false)}
                                />
                                <span
                                    className="font-semibold absolute right-0 underline cursor-pointer"
                                    onClick={props.handleClearButtonClick}
                                >
                                    Borrar
                                </span>
                            </div>
                            <div class="flex flex-col pt-4">
                                <div className="w-full pb-4 border-b-2 border-secondary-dark border-opacity-10 flex flex-col">
                                    <h5>Ciudad</h5>
                                    <div className="flex w-full">
                                        <AutocompleteInput
                                            type="text"
                                            label="Ciudad"
                                            placeholder="¿En dónde quieres jugar?"
                                            color="secondary-light"
                                            handleInputChange={(value) =>
                                                setInputCityValue(value)
                                            }
                                            className="w-full"
                                            suggestions={
                                                props.state.city.citySuggestions
                                            }
                                            value={
                                                props.state.city.isFilledCity
                                            }
                                        />
                                        <button
                                            className="bg-primary-500 p-4 ml-4 h-16 rounded-lg"
                                            onClick={() => {
                                                props.state.city.setIsFilledCity(
                                                    inputCityValue
                                                );
                                            }}
                                        >
                                            <CheckIcon className="text-white fill-current" />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full py-4 border-b-2 border-secondary-dark border-opacity-10 flex flex-col">
                                    <h5>Deporte</h5>
                                    <ListBox
                                        className="bg-secondary-light"
                                        label="Deporte"
                                        zIndex="z-50"
                                        selected={
                                            props.state.sport.selectedSport
                                        }
                                        setSelected={
                                            props.state.sport.setSelectedSport
                                        }
                                        options={props.state.sport.sportOptions}
                                    />
                                </div>
                                <div className="w-full py-4 border-b-2 border-secondary-dark border-opacity-10 flex flex-col">
                                    <h5>Precio</h5>
                                    <MultiRangeSlider
                                        step={1000}
                                        min={
                                            props.state.price.rangePriceData
                                                .minValue
                                        }
                                        max={
                                            props.state.price.rangePriceData
                                                .maxValue
                                        }
                                        value={props.state.price.rangePrice}
                                        onChange={handleChange}
                                        ariaLabel={props.ariaLabel}
                                    />
                                    <div className="flex flex-col sm:flex-row">
                                        <Input
                                            type="text"
                                            color="secondary-light"
                                            label="Precio Mínimo"
                                            value={`$${Intl.NumberFormat(
                                                "en-US"
                                            ).format(
                                                props.state.price.rangePrice[0]
                                            )}`}
                                            className="w-full mb-2 sm:mr-2 sm:mb-0"
                                            readOnly
                                        />
                                        <Input
                                            type="text"
                                            color="secondary-light"
                                            label="Precio Máximo"
                                            value={`$${Intl.NumberFormat(
                                                "en-US"
                                            ).format(
                                                props.state.price.rangePrice[1]
                                            )}`}
                                            className="w-full"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="w-full py-4 border-b-2 border-secondary-dark border-opacity-10 flex flex-col">
                                    <h5>Superficie</h5>
                                    <ListBox
                                        className="bg-secondary-light"
                                        label="Superficie"
                                        zIndex="z-50"
                                        selected={
                                            props.state.surface.selectedSurface
                                        }
                                        setSelected={
                                            props.state.surface
                                                .setSelectedSurface
                                        }
                                        options={
                                            props.state.surface.arenaOptions
                                        }
                                    />
                                </div>
                                <div className="w-full py-4 border-b-2 border-secondary-dark border-opacity-10 flex flex-col">
                                    <h5>Facilidades</h5>
                                    <ul className="flex flex-col">
                                        {props.state.facility.checkedFacilities.map(
                                            (item) => (
                                                <li
                                                    key={item.id}
                                                    className="mb-2"
                                                >
                                                    <div className="flex items-center">
                                                        <div>
                                                            <input
                                                                type="checkbox"
                                                                id={item.id}
                                                                name={item.name}
                                                                value={
                                                                    item.name
                                                                }
                                                                checked={
                                                                    item.isChecked
                                                                }
                                                                onChange={(e) =>
                                                                    handleOnChangeChecked(
                                                                        e,
                                                                        item
                                                                    )
                                                                }
                                                                className="cursor-pointer form-tick appearance-none h-6 w-6 border-2 border-secondary-dark rounded-md checked:fill-current checked:bg-primary-500 checked:border-primary-500 focus:outline-none"
                                                            />
                                                        </div>

                                                        <label
                                                            htmlFor={item.id}
                                                            className="pl-2 cursor-pointer"
                                                        >
                                                            {item.name}
                                                        </label>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

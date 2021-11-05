import {
    ButtonAutocompleteDropDown,
    ButtonListBox,
    ButtonRangeSlider,
    ButtonCheckboxGroup,
} from "./DropDown";
import React, { useState } from "react";
import Button from "../Controls/Buttons";
import FilterOverlay from "../Overlays/FilterOverlay";
import { ReactComponent as MarkerIcon } from "../../assets/img/iconMap.svg";

export default function SearchResultsHeader(props) {
    const iconMarker = (
        <MarkerIcon className="text-secondary-dark fill-current" />
    );
    const citySuggestions = [
        {
            text: "Montería",
            icon: iconMarker,
        },
        {
            text: "Sahagún",
            icon: iconMarker,
        },
        {
            text: "San Pelayo",
            icon: iconMarker,
        },
        {
            text: "San Carlos",
            icon: iconMarker,
        },
        {
            text: "Cereté",
            icon: iconMarker,
        },
        {
            text: "Montelíbano",
            icon: iconMarker,
        },
    ];

    const sportOptions = [
        { id: 1, name: "Fútbol", icon: iconMarker },
        { id: 2, name: "Beisbol", icon: iconMarker },
    ];

    const rangePriceData = { minValue: 60000, maxValue: 200000 };

    const arenaOptions = [
        { id: 1, name: "Césped Natural" },
        { id: 2, name: "Césped Sintético" },
        { id: 3, name: "Cemento" },
        { id: 4, name: "Arena" },
    ];
    const facilitiesData = [
        {
            id: 1,
            name: "Baños",
        },
        {
            id: 2,
            name: "Vestuarios",
        },
        {
            id: 3,
            name: "Duchas",
        },
        {
            id: 4,
            name: "Bar",
        },
        {
            id: 5,
            name: "Bar",
        },
        {
            id: 6,
            name: "Restarante",
        },
    ];

    // Filters States
    const [isFilledCity, setIsFilledCity] = useState("");
    //Sport states
    const [selectedSport, setSelectedSport] = useState("");
    //Price Range State
    const [rangePrice, setRangePrice] = useState([
        rangePriceData.minValue,
        rangePriceData.maxValue,
    ]);
    // Arena's Surface
    const [selectedSurface, setSelectedSurface] = useState("");
    // Facilities State
    const [checkedFacilities, setCheckedFacilities] = useState(
        facilitiesData.map((facility) => {
            return {
                id: facility.id,
                name: facility.name,
                isChecked: false,
            };
        })
    );
    const [isFilterOverlayOpen, setIsFilterOverlayOpen] = useState(false);

    // Handlers
    const handlePriceRangeChange = (event, newValue) => {
        setRangePrice(newValue);
    };

    // Reset Filters
    const resetAllFilters = () => {
        setIsFilledCity("");
        setSelectedSport("");
        setRangePrice([rangePriceData.minValue, rangePriceData.maxValue]);
        setSelectedSurface("");
        setCheckedFacilities(
            facilitiesData.map((facility) => {
                return {
                    id: facility.id,
                    name: facility.name,
                    isChecked: false,
                };
            })
        );
    };

    return (
        <>
            <div className="px-8 py-8 sm:px-16 flex flex-col w-full">
                <span className="text-sm font-medium">{`${props.filter.resultCount} resultados encontrados`}</span>
                <h1>
                    {`Arenas ${
                        selectedSport ? "de " + selectedSport.name : ""
                    } ${isFilledCity ? "En " + isFilledCity : ""}`}
                </h1>
                <div className="hidden md:flex pt-4">
                    <ButtonAutocompleteDropDown
                        value={isFilledCity}
                        setValue={setIsFilledCity}
                        textInitialValue="Ciudad"
                        inputLabel="Ciudad"
                        inputPlaceholder="¿En dónde quieres jugar?"
                        suggestions={citySuggestions}
                    />
                    <ButtonListBox
                        selected={selectedSport}
                        setSelected={setSelectedSport}
                        textInitialValue="Deporte"
                        options={sportOptions}
                        className="ml-2"
                    />
                    <ButtonRangeSlider
                        textInitialValue="Precio"
                        step={1000}
                        min={rangePriceData.minValue}
                        max={rangePriceData.maxValue}
                        value={rangePrice}
                        onChange={handlePriceRangeChange}
                        ariaLabel="Price range slider"
                        className="ml-2"
                        inputLabelMin="Precio Mínimo"
                        inputLabelMax="Precio Maximo"
                    />
                    <ButtonListBox
                        selected={selectedSurface}
                        setSelected={setSelectedSurface}
                        textInitialValue="Superficie"
                        options={arenaOptions}
                        className="ml-2"
                    />
                    <ButtonCheckboxGroup
                        checkedItems={checkedFacilities}
                        setCheckedItems={setCheckedFacilities}
                        className="ml-2"
                        text="Servicios"
                    />
                    <Button
                        type="outlineWith"
                        text="Borrar Filtros"
                        color="dark"
                        textColor="secondary-dark"
                        className="ml-2"
                        handleClick={resetAllFilters}
                    />
                </div>
                <div className="flex md:hidden pt-4">
                    <Button
                        type="outlineWith"
                        color="dark"
                        textColor="secondary-dark"
                        text="Filtros"
                        handleClick={() => setIsFilterOverlayOpen(true)}
                    />
                    <FilterOverlay
                        state={{
                            city: {
                                isFilledCity: isFilledCity,
                                setIsFilledCity: setIsFilledCity,
                                citySuggestions: citySuggestions,
                            },
                            sport: {
                                selectedSport: selectedSport,
                                setSelectedSport: setSelectedSport,
                                sportOptions: sportOptions,
                            },
                            price: {
                                rangePrice: rangePrice,
                                setRangePrice: setRangePrice,
                                handlePriceRangeChange: handlePriceRangeChange,
                                rangePriceData: rangePriceData,
                            },
                            surface: {
                                selectedSurface: selectedSurface,
                                setSelectedSurface: setSelectedSurface,
                                arenaOptions: arenaOptions,
                            },
                            facility: {
                                checkedFacilities: checkedFacilities,
                                setCheckedFacilities: setCheckedFacilities,
                            },
                        }}
                        isOpen={isFilterOverlayOpen}
                        setIsOpen={setIsFilterOverlayOpen}
                        valuePrice={rangePrice}
                        handleClearButtonClick={resetAllFilters}
                    />
                </div>
            </div>
        </>
    );
}

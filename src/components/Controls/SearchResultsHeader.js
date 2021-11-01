import {
    ButtonAutocompleteDropDown,
    ButtonListBox,
    ButtonRangeSlider,
    ButtonCheckboxGroup,
} from "./DropDown";
import React, { useState } from "react";
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
            isChecked: true,
        },
        {
            id: 2,
            name: "Vestuarios",
            isChecked: false,
        },
        {
            id: 3,
            name: "Duchas",
            isChecked: false,
        },
        {
            id: 4,
            name: "Bar",
            isChecked: true,
        },
        {
            id: 5,
            name: "Bar",
            isChecked: false,
        },
        {
            id: 6,
            name: "Restarante",
            isChecked: false,
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
    const [checkedFacilities, setCheckedFacilities] = useState(facilitiesData);
    // Handlers
    const handlePriceRangeChange = (event, newValue) => {
        setRangePrice(newValue);
    };
    const handleCheckFacilities = (e) => {
        const updatedChecked = checkedFacilities;
        updatedChecked.forEach((facility) => {
            if ("" + facility.id === e.target.id) {
                facility.isChecked = !e.target.checked;
                console.log(
                    facility.name +
                        "-" +
                        facility.isChecked +
                        "/" +
                        e.target.id +
                        "-" +
                        e.target.checked
                );
            }
        });

        setCheckedFacilities(updatedChecked);
        console.log(updatedChecked);
    };
    return (
        <>
            <div className="px-8 py-8 sm:px-16 flex flex-col w-full">
                <span className="text-sm font-medium">{`${props.filter.resultCount} resultados encontrados`}</span>
                <h1>
                    {`Arenas ${
                        props.filter.sport ? "de " + props.filter.sport : ""
                    } ${props.filter.city ? "En " + props.filter.city : ""}`}
                </h1>
                <div className="flex pt-4">
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
                        onClickCheck={handleCheckFacilities}
                        className="ml-2"
                        text="Servicios"
                    />
                </div>
            </div>
        </>
    );
}

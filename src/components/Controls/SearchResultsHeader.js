import { ButtonAutocompleteDropDown, ButtonListBox } from "./DropDown";
import React, { useEffect, useState } from "react";
import { ReactComponent as MarkerIcon } from "../../assets/img/iconMap.svg";
// import { MultiRangeSlider } from "./Slider";

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
        { id: 1, sport: "Fútbol", icon: iconMarker },
        { id: 2, sport: "Beisbol", icon: iconMarker },
    ];
    // Filters States
    const [isFilledCity, setIsFilledCity] = useState("");
    //Sport states
    const [selectedSport, setSelectedSport] = useState("");
    useEffect(() => console.log(selectedSport));
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
                </div>

                <div className="p-4 border-2">
                    {/* <MultiRangeSlider minValue={0} maxValue={200000} /> */}
                </div>
            </div>
        </>
    );
}

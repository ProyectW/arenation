import { ButtonAutocompleteDropDown } from "./DropDown";
import React, { useState } from "react";
import { ReactComponent as MarkerIcon } from "../../assets/img/iconMap.svg";
export default function SearchResultsHeader(props) {
    // Filters States
    const [isFilledCity, setIsFilledCity] = useState("");
    const iconMarker = (
        <MarkerIcon className="text-secondary-dark fill-current" />
    );

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
                        suggestions={[
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
                        ]}
                    />
                </div>
            </div>
        </>
    );
}

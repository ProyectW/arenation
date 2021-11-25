import React, { useEffect, useState } from "react";

function Input(props) {
    const [isHidden, setHidden] = useState(true);
    const [inputState, setInputState] = useState(props.value);
    useEffect(() => setInputState(props.value), [props.value]);

    const handlePassClick = () => {
        setHidden(!isHidden);
    };

    if (props.type === "password") {
        return (
            <div
                color="white w-full"
                className={`flex p-2 bg-${props.color} text-secondary-dark rounded-lg items-center ${props.className}`}
            >
                <div className="flex flex-col w-full">
                    <label className="font-semibold text-secondary-dark text-sm">
                        {props.label}
                    </label>
                    <input
                        id={props.id}
                        type={isHidden ? "password" : "text"}
                        placeholder={props.placeholder}
                        className={`py-1 bg-${props.color} placeholder-secondary-gray focus:outline-none`}
                        onChange={props.handleInputChange}
                        required={props.required}
                    />
                </div>
                <span
                    className="text-sm font-noto font-semibold cursor-pointer"
                    onClick={handlePassClick}
                >
                    <u>{isHidden ? "ver" : "ocultar"}</u>
                </span>
            </div>
        );
    } else if (props.type === "tel") {
        return (
            <div
                className={`flex p-2 bg-${props.color} text-secondary-dark rounded-lg items-center divide divide-x-2 divide-secondary-gray divide-opacity-20`}
            >
                <span className="pr-2 text-secondary-gray">+57</span>
                <div className="flex flex-col w-full pl-2">
                    <label className="font-semibold text-secondary-dark text-sm">
                        {props.label}
                    </label>
                    <input
                        type="tel"
                        placeholder={props.placeholder}
                        className={`py-1 bg-${props.color} placeholder-secondary-gray focus:outline-none`}
                        onChange={props.handleInputChange}
                        required
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div
                className={`flex flex-col p-2 bg-${props.color} text-secondary-dark rounded-lg ${props.className}`}
            >
                <label className="font-semibold text-secondary-dark text-sm">
                    {props.label}
                </label>
                <input
                    id={props.id}
                    placeholder={props.placeholder}
                    className={`py-1 bg-${props.color}  placeholder-secondary-gray focus:outline-none text-base text-secondary-dark`}
                    onChange={props.handleInputChange}
                    readOnly={props.readOnly}
                    required={props.required}
                    value={inputState}
                />
            </div>
        );
    }
}

function AutocompleteInput(props) {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [inputValue, setInputValue] = useState(props.value);

    useEffect(() => {
        if (props.value === "") {
            setInputValue("");
        }
    }, [props.value]);
    const onChange = (e) => {
        const input = e.target.value;

        // Filtramos las recomendaciones que contienen la entrada
        const linked = props.suggestions.filter(
            (suggestion) =>
                suggestion.text.toLowerCase().indexOf(input.toLowerCase()) > -1
        );

        setInputValue(e.target.value);
        setFilteredSuggestions(linked);
        setShowSuggestions(true);
        props.handleInputChange(inputValue);
    };

    const onClick = (e) => {
        setFilteredSuggestions([]);
        setInputValue(e.target.innerText);
        setShowSuggestions(false);
        props.handleInputChange(e.target.innerText);
    };

    const SuggestionsList = () => {
        return filteredSuggestions.length ? (
            <ul className="flex flex-col justify-center pt-2">
                {filteredSuggestions.map((suggestion) => {
                    return (
                        <li
                            className="cursor-pointer flex items-center pt-1"
                            key={suggestion.text}
                            onClick={onClick}
                        >
                            {suggestion.icon}
                            <span className="pl-1">{suggestion.text}</span>
                        </li>
                    );
                })}
            </ul>
        ) : (
            ""
        );
    };

    return (
        <div className={`flex flex-col ${props.className}`}>
            <div
                className={`flex flex-col p-2 bg-${props.color} text-secondary-dark rounded-lg`}
            >
                <label className="font-semibold text-secondary-dark text-sm">
                    {props.label}
                </label>
                <input
                    type="text"
                    placeholder={props.placeholder}
                    className={`py-1 bg-${props.color}  placeholder-secondary-gray focus:outline-none text-base text-secondary-dark`}
                    //onChange={props.onChange}
                    onChange={onChange}
                    value={inputValue ? inputValue : ""}
                />
            </div>
            {showSuggestions && inputValue && <SuggestionsList />}
        </div>
    );
}

export { Input, AutocompleteInput };

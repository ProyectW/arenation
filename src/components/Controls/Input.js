import React, { useState } from "react";

export default function Input(props) {
    const [isHidden, setHidden] = useState(true);

    const handlePassClick = () => {
        setHidden(!isHidden);
    };

    if (props.type === "password") {
        return (
            <div className="flex p-2 bg-secondary-light text-secondary-dark rounded-lg items-center">
                <div className="flex flex-col w-full">
                    <label className="font-semibold text-secondary-dark text-sm">
                        {props.label}
                    </label>
                    <input
                        type={isHidden ? "password" : "text"}
                        placeholder={props.placeholder}
                        className="py-1 bg-secondary-light placeholder-secondary-gray focus:outline-none"
                        onChange={props.handleInputChange}
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
            <div className="flex p-2 bg-secondary-light text-secondary-dark rounded-lg items-center divide divide-x-2 divide-secondary-gray divide-opacity-20">
                <span className="pr-2 text-secondary-gray">+57</span>
                <div className="flex flex-col w-full pl-2">
                    <label className="font-semibold text-secondary-dark text-sm">
                        {props.label}
                    </label>
                    <input
                        type="tel"
                        placeholder={props.placeholder}
                        className="py-1 bg-secondary-light placeholder-secondary-gray focus:outline-none"
                        onChange={props.handleInputChange}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col p-2 bg-secondary-light text-secondary-dark rounded-lg">
                <label className="font-semibold text-secondary-dark text-sm">
                    {props.label}
                </label>
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    className="py-1 bg-secondary-light placeholder-secondary-gray focus:outline-none"
                    onChange={props.handleInputChange}
                />
            </div>
        );
    }
}

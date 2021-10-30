import { useState, useRef } from "react";
function MultiRangeSlider(props) {
    const [minVal, setMinVal] = useState(props.min);
    const [maxVal, setMaxVal] = useState(props.max);
    const minValRef = useRef(null);
    const maxValRef = useRef(null);

    const handleChange = (e) => {
        const value = Math.min(+e.target.value, maxVal - 1);
        setMinVal(value);
        e.target.value = value.toString();
    };

    return (
        <>
            <input
                type="range"
                min={props.minValue}
                max={props.maxValue}
                value={minVal}
                ref={minValRef}
                onChange={handleChange}
                className="pointer-events-none absolute h-0 w-52 outline-none z-0"
            />
            <input
                type="range"
                min={props.minValue}
                max={props.maxValue}
                className="pointer-events-none absolute h-0 w-52 outline-none z-10"
            />
            <div className="relative w-52">
                <div className="rounded h-2 absolute bg-primary-500 w-full z-0"></div>
                <div className="rounded h-2 absolute bg-primary-100 z-10"></div>
            </div>
        </>
    );
}

export { MultiRangeSlider };

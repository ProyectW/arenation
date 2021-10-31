import { Listbox, Transition, Popover } from "@headlessui/react";
import { ReactComponent as UpDownIcon } from "../../assets/img/iconUpDown.svg";
import { Fragment, useState } from "react";
import { AutocompleteInput } from "./Input";
import { ReactComponent as CheckIcon } from "../../assets/img/iconCheck.svg";
/*DatePicker Imports*/
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "./css/DropDown.css";
import DatePicker from "react-modern-calendar-datepicker";
import { utils } from "react-modern-calendar-datepicker";

function ListBox(props) {
    return (
        <div
            className={`flex flex-col p-2 ${props.className} text-secondary-dark rounded-lg w-full`}
        >
            <label className="font-semibold text-secondary-dark text-sm">
                {props.label}
            </label>
            <Listbox value={props.selected} onChange={props.setSelected}>
                <div className="py-1 focus:outline-none">
                    <Listbox.Button className="flex justify-between w-full focus:outline-none">
                        <span>{props.selected.text}</span>
                        <UpDownIcon className="fill-current text-secondary-gray w-4" />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute flex flex-col bg-white mt-6 max-h-48 leading-6 rounded-lg py-4 pl-4 pr-8 shadow-xl overflow-auto focus:outline-none z-10">
                            {props.options.map((sportItem) => (
                                <Listbox.Option
                                    key={sportItem.id}
                                    className={({ active }) =>
                                        `${
                                            active
                                                ? "text-primary-500"
                                                : "text-secondary-dark"
                                        } cursor-pointer select-none`
                                    }
                                    value={sportItem}
                                >
                                    {sportItem.text}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
            {/* <select
            value={props.value}
            onChange={props.handleInputChange}
            className="outline-none py-1"
        >
            {props.options.map((element, index) => (
                <option value={index} key={index}>
                    {element.text}
                </option>
            ))}
        </select> */}
        </div>
    );
}

function ButtonAutocompleteDropDown(props) {
    const [inputValue, setInputValue] = useState("");
    const handleButtonClick = () => {
        props.setValue(inputValue);
    };
    return (
        <>
            <Popover as="div">
                <Popover.Button
                    className={`text-${
                        props.value ? "primary-500" : "secondary-dark"
                    } font-semibold outline-${
                        props.value ? "blue" : "dark"
                    } px-5 py-3 rounded-lg ${props.className}`}
                >
                    {props.value ? props.value : props.textInitialValue}
                </Popover.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Popover.Panel className="absolute flex flex-col bg-white mt-6 max-h-48 leading-6 rounded-lg p-4 shadow-md overflow-auto focus:outline-none z-10">
                        <div className="flex">
                            <AutocompleteInput
                                icon={props.listIcon}
                                type="text"
                                label={props.inputLabel}
                                placeholder={props.inputPlaceholder}
                                color="secondary-light"
                                handleInputChange={(value) =>
                                    setInputValue(value)
                                }
                                className="w-full"
                                suggestions={[
                                    "Montería",
                                    "Sahagún",
                                    "San Pelayo",
                                    "San Carlos",
                                    "Cereté",
                                    "Montelibano",
                                ]}
                            />
                            <button
                                className="bg-primary-500 p-4 ml-4 h-16 rounded-lg"
                                onClick={handleButtonClick}
                            >
                                <CheckIcon className="text-white fill-current" />
                            </button>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    );
}

function SimpleDatePicker(props) {
    const myCustomLocale = {
        // months list by order
        months: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ],

        // week days by order
        weekDays: [
            {
                name: "Domingo", // used for accessibility
                short: "D", // displayed at the top of days' rows
                isWeekend: true, // is it a formal weekend or not?
            },
            {
                name: "Lunes",
                short: "L",
            },
            {
                name: "Martes",
                short: "M",
            },
            {
                name: "Miércoles",
                short: "M",
            },
            {
                name: "Jueves",
                short: "J",
            },
            {
                name: "Viernes",
                short: "V",
            },
            {
                name: "Sábado",
                short: "S",
                isWeekend: true,
            },
        ],

        // just play around with this number between 0 and 6
        weekStartingIndex: 0,

        // return a { year: number, month: number, day: number } object
        getToday(gregorainTodayObject) {
            return gregorainTodayObject;
        },

        // return a native JavaScript date here
        toNativeDate(date) {
            return new Date(date.year, date.month - 1, date.day);
        },

        // return a number for date's month length
        getMonthLength(date) {
            return new Date(date.year, date.month, 0).getDate();
        },

        // return a transformed digit to your locale
        transformDigit(digit) {
            return digit;
        },

        // texts in the date picker
        nextMonth: "Next Month",
        previousMonth: "Previous Month",
        openMonthSelector: "Open Month Selector",
        openYearSelector: "Open Year Selector",
        closeMonthSelector: "Close Month Selector",
        closeYearSelector: "Close Year Selector",
        defaultPlaceholder: "Select...",

        // for input range value
        from: "from",
        to: "to",

        // used for input value when multi dates are selected
        digitSeparator: ",",

        // if your provide -2 for example, year will be 2 digited
        yearLetterSkip: 0,

        // is your language rtl or ltr?
        isRtl: false,
    };
    const Input = ({ ref }) => (
        <input
            readOnly
            ref={ref}
            value={
                props.date
                    ? `${myCustomLocale.months[props.date.month - 1]} ${
                          props.date.day
                      } de ${props.date.year}`
                    : ""
            }
            placeholder={props.placeholder}
            className={`py-1 placeholder-secondary-gray focus:outline-none z-0 ${props.className}`}
        />
    );

    return (
        <div
            className={`flex flex-col p-2 ${props.className} text-secondary-dark rounded-shadow-xl w-full`}
        >
            <label className="font-semibold text-secondary-dark text-sm">
                {props.label}
            </label>
            <DatePicker
                value={props.date}
                onChange={props.setDate}
                renderInput={Input}
                colorPrimary="#1045FF"
                minimumDate={utils().getToday()}
                locale={myCustomLocale}
            />
            {/* <input
                type="date"
                placeholder={"¿Cuando desea jugar?"}
                className={`py-1 bg-${props.color} placeholder-secondary-gray focus:outline-none`}
            /> */}
        </div>
    );
}

function SimpleDate(props) {
    const myCustomLocale = {
        // months list by order
        months: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ],

        // week days by order
        weekDays: [
            {
                name: "Domingo", // used for accessibility
                short: "D", // displayed at the top of days' rows
                isWeekend: true, // is it a formal weekend or not?
            },
            {
                name: "Lunes",
                short: "L",
            },
            {
                name: "Martes",
                short: "M",
            },
            {
                name: "Miércoles",
                short: "M",
            },
            {
                name: "Jueves",
                short: "J",
            },
            {
                name: "Viernes",
                short: "V",
            },
            {
                name: "Sábado",
                short: "S",
                isWeekend: true,
            },
        ],

        // just play around with this number between 0 and 6
        weekStartingIndex: 0,

        // return a { year: number, month: number, day: number } object
        getToday(gregorainTodayObject) {
            return gregorainTodayObject;
        },

        // return a native JavaScript date here
        toNativeDate(date) {
            return new Date(date.year, date.month - 1, date.day);
        },

        // return a number for date's month length
        getMonthLength(date) {
            return new Date(date.year, date.month, 0).getDate();
        },

        // return a transformed digit to your locale
        transformDigit(digit) {
            return digit;
        },

        // texts in the date picker
        nextMonth: "Next Month",
        previousMonth: "Previous Month",
        openMonthSelector: "Open Month Selector",
        openYearSelector: "Open Year Selector",
        closeMonthSelector: "Close Month Selector",
        closeYearSelector: "Close Year Selector",
        defaultPlaceholder: "Select...",

        // for input range value
        from: "from",
        to: "to",

        // used for input value when multi dates are selected
        digitSeparator: ",",

        // if your provide -2 for example, year will be 2 digited
        yearLetterSkip: 0,

        // is your language rtl or ltr?
        isRtl: false,
    };
    const Input = ({ ref }) => (
        <input
            readOnly
            ref={ref}
            value={
                props.date
                    ? `${myCustomLocale.months[props.date.month - 1]} ${
                          props.date.day
                      } de ${props.date.year}`
                    : ""
            }
            placeholder={props.placeholder}
            className={`py-1 placeholder-secondary-gray focus:outline-none z-0 bg-secondary-light`}
        />
    );

    return (
        <div
            className={`mt-2 flex flex-col p-2 ${props.className} text-secondary-dark bg-secondary-light rounded-lg w-full`}
        >
            <label className="font-semibold text-secondary-dark text-sm bg-secondary-light">
                {props.label}
            </label>
            <DatePicker
                value={props.date}
                onChange={props.setDate}
                renderInput={Input}
                colorPrimary="#1045FF"
                locale={myCustomLocale}
            />
        </div>
    );
}

export { SimpleDate, SimpleDatePicker, ListBox, ButtonAutocompleteDropDown };

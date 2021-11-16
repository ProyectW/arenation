import { ReactComponent as ChevronIcon } from "../../assets/img/chevronLeftIcon.svg";
import { MonthDayYear, getDayOfWeek } from "../../utils/Fecha";
import useDateSwiper from "../../utils/CustomHooks/useDateSwiper";
import { ReactComponent as IconStar } from "../../assets/img/iconStar.svg";
import { Input } from "../../components/Controls/Input";
export default function SelectedArenaSchedule(props) {
    const { rangeDate, moveAWeekToPast, moveAWeekToFuture } = useDateSwiper(
        new Date()
    );
    return (
        <div className="flex flex-col w-full px-8 py-8 sm:px-16  text-secondary-dark">
            <div className="border-b border-secondary-dark border-opacity-10 py-5 mb-8">
                <h2 className="flex flex-row items-center">
                    Seleccione Fecha y Hora de Reserva
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-2/3 rounded-2xl">
                    <ScheduleHeader
                        rangeDate={rangeDate}
                        moveAWeekToPast={moveAWeekToPast}
                        moveAWeekToFuture={moveAWeekToFuture}
                    />
                    <div className="flex flex-col w-full overflow-x-auto">
                        <ScheduleDayContainer rangeDate={rangeDate} />
                        <ScheduleTimeContainer
                            rangeDate={rangeDate}
                            scheduleData={props.schedule}
                            pricesData={props.prices}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col lg:w-1/3 shadow-DropDown md:ml-8 p-6 rounded-2xl justify-between">
                    <div className="flex justify-between items-center">
                        <div className="flex items-start">
                            <h3>{`$${"70,000"}`}</h3>
                            <span className="text-sm font-semibold pt-1">
                                /hora
                            </span>
                        </div>
                        <div className="flex items-center">
                            <IconStar className="fill-current text-warning" />
                            <h3>{`${4.1}`}</h3>
                        </div>
                    </div>
                    <div className="flex flex-col py-4">
                        <Input
                            color="secondary-light"
                            label="Fecha"
                            placeholder="Fecha de reserva"
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ScheduleHeader(props) {
    return (
        <div className="bg-secondary-light rounded-2xl p-4 flex items-center justify-between md:justify-start">
            <button onClick={() => props.moveAWeekToPast()}>
                <ChevronIcon className="fill-current text-secondary-dark mr-2" />
            </button>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <h5 className="text-base">
                    {MonthDayYear(props.rangeDate.minDate)}
                </h5>
                <hr className="ml-2 border-2 rounded w-2 mx-1 border-secondary-dark" />
                <h5 className="text-base">
                    {MonthDayYear(props.rangeDate.maxDate)}
                </h5>
            </div>

            <button onClick={() => props.moveAWeekToFuture()}>
                <ChevronIcon className="fill-current text-secondary-dark transform rotate-180 ml-2" />
            </button>
        </div>
    );
}

function ScheduleDayContainer(props) {
    return (
        <div className="bg-secondary-light rounded-2xl py-4 my-2 grid grid-cols-7 gap-2 min-w-max">
            {getListDatesFromRange(props.rangeDate).map((date, i) => (
                <div
                    key={i}
                    className={`flex flex-col justify-center items-center min-w-max px-2 ${
                        isToday(date)
                            ? "text-primary-500"
                            : "text-secondary-dark"
                    }`}
                >
                    <span className="font-semibold">{getDayOfWeek(date)}</span>
                    <h2>{date.getDate()}</h2>
                </div>
            ))}
        </div>
    );
}

function ScheduleTimeContainer(props) {
    const initialTime = 6;
    const endTime = 23;
    const getArrayByRange = (start, end) => {
        return Array(end - start + 1)
            .fill()
            .map((_, idx) => start + idx);
    };
    return (
        <div className="rounded-lg grid grid-cols-7 gap-4 min-w-max max-h-96 overflow-y-auto">
            {getListDatesFromRange(props.rangeDate).map((date) => (
                <div
                    key={date.getDay()}
                    className="grid grid-flow-row gap-2 justify-center items-center w-max"
                >
                    {getArrayByRange(initialTime, endTime).map(
                        (element, idx) => (
                            <TimeCard
                                timeElement={element}
                                key={idx}
                                timeElementData={
                                    props.scheduleData[date.getDay()]
                                }
                                dayOfWeek={date.getDay()} //En la UI el primer dia es Lunes (pos 0)
                                pricesData={props.pricesData}
                            />
                        )
                    )}
                </div>
            ))}
        </div>
    );
}

function TimeCard(props) {
    if (
        props.timeElementData.serviceState &&
        props.timeElementData.serviceHours.includes(props.timeElement)
    ) {
        return (
            <div
                className="text-center bg-primary-500 text-white p-2 w-20 rounded-lg"
                key={props.key}
            >
                <p className="text-sm">
                    {toString(props.timeElement).length > 1
                        ? `${props.timeElement}:00`
                        : `0${props.timeElement}:00`}
                </p>
                <p>
                    {`$${Intl.NumberFormat("en-US").format(
                        getPrice(
                            props.pricesData,
                            props.dayOfWeek,
                            props.timeElement
                        )
                    )}`}
                </p>
                <p className="text-sm">{"60 min"}</p>
            </div>
        );
    } else {
        return (
            <div
                className="text-center bg-secondary-light text-secondary-dark p-2 w-20 rounded-lg"
                key={props.key}
            >
                <p className="text-sm">
                    {toString(props.timeElement).length > 1
                        ? `${props.timeElement}:00`
                        : `0${props.timeElement}:00`}
                </p>
                <p>{"Cerrado"}</p>
                <p className="text-sm">{"60 min"}</p>
            </div>
        );
    }
}

function getListDatesFromRange(rangeDate) {
    const dateList = [];
    let currentDate = rangeDate.minDate;
    while (currentDate <= rangeDate.maxDate) {
        dateList.push(currentDate);
        currentDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() + 1
        );
    }

    return dateList;
}

function isToday(date) {
    const currentDate = new Date();
    return (
        currentDate.getFullYear() === date.getFullYear() &&
        currentDate.getMonth() === date.getMonth() &&
        currentDate.getDate() === date.getDate()
    );
}

function getPrice(pricesData, dayOfWeek, timeOfDay) {
    console.log("DayOfWeek " + dayOfWeek + "\nTimeOfDay" + timeOfDay);
    let price = 0;
    if (pricesData.isFixedPrice) {
        price = pricesData.fixedPrice;
    } else {
        pricesData.priceSchedule.forEach((priceScheduleObj) => {
            if (
                priceScheduleObj.dayOfWeek.includes(dayOfWeek) &&
                priceScheduleObj.hoursOfDay.includes(timeOfDay)
            ) {
                console.log(typeof priceScheduleObj.price);
                price = priceScheduleObj.price;
            }
        });
    }

    return price;
}

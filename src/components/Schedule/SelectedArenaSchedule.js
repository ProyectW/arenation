import { ReactComponent as ChevronIcon } from "../../assets/img/chevronLeftIcon.svg";
import { MonthDayYear, getDayOfWeek } from "../../utils/Fecha";
import useDateSwiper from "../../utils/CustomHooks/useDateSwiper";
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
                    <div className="flex flex-col min-w-max overflow-x-auto">
                        <ScheduleDayContainer rangeDate={rangeDate} />
                        <ScheduleTimeContainer
                            rangeDate={rangeDate}
                            scheduleData={props.schedule}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/3">Hol</div>
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
            {getListDatesFromRange(props.rangeDate).map((date, i) => (
                <div
                    key={i}
                    className="grid grid-flow-row gap-2 justify-center items-center w-max"
                >
                    {getArrayByRange(initialTime, endTime).map(
                        (element, idx) => (
                            <div className="text-center bg-secondary-light text-secondary-dark p-2 w-20 rounded-lg">
                                <p className="text-sm">
                                    {toString(element).length > 1
                                        ? `${element}:00`
                                        : `0${element}:00`}
                                </p>
                                <p>{"Cerrado"}</p>
                                <p className="text-sm">{"60 min"}</p>
                            </div>
                        )
                    )}
                </div>
            ))}
        </div>
    );
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

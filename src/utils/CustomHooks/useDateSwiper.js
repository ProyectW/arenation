import { useState } from "react";
export default function useDateSwiper(currentDate = new Date()) {
    const [rangeDate, setRangeDate] = useState({
        minDate: currentDate,
        maxDate: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() + 6
        ),
    });

    const moveAWeekToFuture = () =>
        setRangeDate({
            minDate: new Date(
                rangeDate.maxDate.getFullYear(),
                rangeDate.maxDate.getMonth(),
                rangeDate.maxDate.getDate() + 1
            ),
            maxDate: new Date(
                rangeDate.maxDate.getFullYear(),
                rangeDate.maxDate.getMonth(),
                rangeDate.maxDate.getDate() + 7
            ),
        });

    const moveAWeekToPast = () => {
        let dayDiff = Math.ceil(
            (rangeDate.minDate - currentDate) / (1000 * 60 * 60 * 24)
        );
        if (dayDiff >= 7) {
            setRangeDate({
                minDate: new Date(
                    rangeDate.minDate.getFullYear(),
                    rangeDate.minDate.getMonth(),
                    rangeDate.minDate.getDate() - 7
                ),
                maxDate: new Date(
                    rangeDate.minDate.getFullYear(),
                    rangeDate.minDate.getMonth(),
                    rangeDate.minDate.getDate() - 1
                ),
            });
        }
    };
    return { rangeDate, moveAWeekToPast, moveAWeekToFuture };
}

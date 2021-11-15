export default function Fecha(props) {
    const date = new Date(props.fecha);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const mes = [
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
    ];

    return day + " de " + mes[month] + " del " + year;
}

export function FechaDiaMes(props) {
    const date = new Date(props.fecha);

    const day = date.getDate();
    const month = date.getMonth();

    const mes = [
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
    ];

    return day + " de " + mes[month];
}

export function FechaMesYear(props) {
    const date = new Date(props.fecha);

    const month = date.getMonth();
    const year = date.getFullYear();

    const mes = [
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
    ];

    return mes[month] + " del " + year;
}

export function FechaYear(props) {
    const date = new Date(props.fecha);

    const year = date.getFullYear();

    return year;
}

export function MonthDayYear(date) {
    const spanishMonth = [
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
    ];
    const customDate = new Date(date);
    return `${
        spanishMonth[customDate.getMonth()]
    } ${customDate.getDate()}, ${customDate.getFullYear()}`;
}

export function getDayOfWeek(date) {
    const spanishDays = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
    ];
    return spanishDays[date.getDay()];
}

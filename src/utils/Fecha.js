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

export function FechaConDia(props) {
  const date = new Date(props.fecha);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dia = date.getDay();

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
  const diaS = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  return diaS[dia] + ", " + day + " de " + mes[month] + " del " + year;
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

import React, { useState } from "react";
import SearchResultsHeader from "../components/Controls/SearchResultsHeader";
import Favorite from "../components/Favorite";
import AlertDone from "../components/AlertsPayments";
import { AlertWrong } from "../components/AlertsPayments";
import OverlayPhoto from "../components/OverlayProfilePhoto";

export default function Notifications() {
  const [city, setCity] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000000);
  const [sport, setSport] = useState("");
  const ArenasResults = [
    {
      name: "Estadio Caracas",
      location: "Cereté, Córdoba",
      spacesAvailable: 4,
      score: 4.2,
      price: 120000,
      isFav: true,
    },
    {
      name: "Cancha San Martín",
      location: "San Pelayo, Córdoba",
      spacesAvailable: 1,
      score: 4.6,
      price: 25000,
      isFav: true,
    },
    {
      name: "Cancha Camp Nou",
      location: "Sahagún, Córdoba",
      spacesAvailable: 7,
      score: 3.9,
      price: 30000,
      isFav: true,
    },
    {
      name: "Estadio Caracas",
      location: "Cereté, Córdoba",
      spacesAvailable: 4,
      score: 4.2,
      price: 120000,
      isFav: true,
    },
    {
      name: "Cancha San Martín",
      location: "San Pelayo, Córdoba",
      spacesAvailable: 1,
      score: 4.6,
      price: 25000,
      isFav: false,
    },
    {
      name: "Cancha Camp Nou",
      location: "Sahagún, Córdoba",
      spacesAvailable: 7,
      score: 3.9,
      price: 30000,
      isFav: false,
    },
  ];

  let resultCount = ArenasResults.length;

  let cant = 0;
  ArenasResults.map((arena) => {
    if (arena.isFav === true) {
      cant = cant + 1;
    }
    resultCount = cant;
  });

  const filterOptions = {
    resultCount: resultCount,
  };

  return (
    <div className="pt-16 pb-44">
      <div>
        <SearchResultsHeader
          filter={filterOptions}
          setCity={setCity}
          setMin={setMin}
          setMax={setMax}
          setSport={setSport}
        />
      </div>
      <Favorite arenas={ArenasResults} city={city} />
    </div>
  );
}

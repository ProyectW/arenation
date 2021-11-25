import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SearchResultsHeader from "../components/Controls/SearchResultsHeader";
import ArenaCard from "../components/ArenaCard";

export default function Arenas() {
  const ArenasResults = [
    {
      name: "Cancha Astral",
      location: "Montería, Córdoba",
      spacesAvailable: 4,
      score: 4.2,
      price: 120000,
      isFav: false,
      sport: "Fútbol",
    },
    {
      name: "Cancha Astral",
      location: "Montería, Córdoba",
      spacesAvailable: 1,
      score: 4.6,
      price: 25000,
      isFav: true,
      sport: "Fútbol",
    },
    {
      name: "Cancha Camp Nou",
      location: "Sahagún, Córdoba",
      spacesAvailable: 7,
      score: 3.9,
      price: 30000,
      isFav: false,
      sport: "Fútbol",
    },
    {
      name: "Estadio Caracas",
      location: "Cereté, Córdoba",
      spacesAvailable: 4,
      score: 4.2,
      price: 120000,
      isFav: false,
      sport: "Fútbol",
    },
    {
      name: "Cancha San Martín",
      location: "San Pelayo, Córdoba",
      spacesAvailable: 1,
      score: 4.6,
      price: 25000,
      isFav: true,
      sport: "Fútbol",
    },
    {
      name: "Cancha Camp Nou",
      location: "Sahagún, Córdoba",
      spacesAvailable: 7,
      score: 3.9,
      price: 30000,
      isFav: false,
      sport: "Beisbol",
    },
    {
      name: "Estadio Caracas",
      location: "Cereté, Córdoba",
      spacesAvailable: 4,
      score: 4.2,
      price: 120000,
      isFav: false,
      sport: "Fútbol",
    },
    {
      name: "Cancha San Martín",
      location: "San Pelayo, Córdoba",
      spacesAvailable: 1,
      score: 4.6,
      price: 25000,
      isFav: true,
      sport: "Fútbol",
    },
    {
      name: "Cancha Camp Nou",
      location: "Sahagún, Córdoba",
      spacesAvailable: 7,
      score: 3.9,
      price: 30000,
      isFav: false,
      sport: "Beisbol",
    },
    {
      name: "Estadio Caracas",
      location: "Cereté, Córdoba",
      spacesAvailable: 4,
      score: 4.2,
      price: 120000,
      isFav: false,
      sport: "Fútbol",
    },
    {
      name: "Cancha San Martín",
      location: "San Pelayo, Córdoba",
      spacesAvailable: 1,
      score: 4.6,
      price: 25000,
      isFav: true,
      sport: "Fútbol",
    },
    {
      name: "Cancha Camp Nou",
      location: "Sahagún, Córdoba",
      spacesAvailable: 7,
      score: 3.9,
      price: 30000,
      isFav: false,
      sport: "Beisbol",
    },
  ];

  const [city, setCity] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000000);
  const [sport, setSport] = useState("");
  const ciudad = useParams();
  console.log("ciudad: ", ciudad.city);

  let resultCount = ArenasResults.length;

  let cant = 0;
  ArenasResults.map((arena, i) => {
    const locacion = arena.location.indexOf(city);
    if (locacion !== -1) {
      cant = cant + 1;
    }
    resultCount = cant;
  });

  const filterOptions = {
    sport: "Fútbol",
    city: "San Pelayo",
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
      <div className="px-8 py-8 sm:px-16 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
        {ArenasResults.map((arena, i) => {
          let locacion;
          if (ciudad.city !== undefined) {
            locacion = arena.location.indexOf(ciudad.city);
          } else {
            locacion = arena.location.indexOf(city);
          }
          if (locacion !== -1) {
              return <ArenaCard fav={true} arenaData={arena} key={i} />;
          }
        })}
      </div>
    </div>
  );
}

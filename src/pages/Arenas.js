import React from "react";
import SearchResultsHeader from "../components/Controls/SearchResultsHeader";
import ArenaCard from "../components/ArenaCard";

export default class Arenas extends React.Component {
    render() {
        const filterOptions = {
            sport: "Fútbol",
            city: "San Pelayo",
            resultCount: 20,
        };
        const ArenasResults = [
            {
                name: "Estadio Caracas",
                location: "Cereté, Córdoba",
                spacesAvailable: 4,
                score: 4.2,
                price: 120000,
                isFav: false,
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
                isFav: false,
            },
            {
                name: "Estadio Caracas",
                location: "Cereté, Córdoba",
                spacesAvailable: 4,
                score: 4.2,
                price: 120000,
                isFav: false,
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
                isFav: false,
            },
        ];
        return (
            <div className="pt-16 pb-44">
                <div>
                    <SearchResultsHeader filter={filterOptions} />
                </div>
                <div className="px-8 py-8 sm:px-16 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
                    {ArenasResults.map((arena, i) => (
                        <ArenaCard fav={true} arenaData={arena} key={i} />
                    ))}
                </div>
            </div>
        );
    }
}

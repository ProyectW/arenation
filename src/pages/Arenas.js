import React from "react";
import SearchResultsHeader from "../components/Controls/SearchResultsHeader";
import ArenaCard from "../components/ArenaCard";
import ArenaHeader from "../components/Header/ArenaHeader";

export default class Arenas extends React.Component {
    render() {
        const filterOptions = {
            sport: "Fútbol",
            city: "San Pelayo",
            resultCount: 20,
        };

        return (
            <div className="pt-16 pb-44">
                <div><SearchResultsHeader filter={filterOptions} /></div>
                <div className="px-8 py-8 sm:px-16">
                    <ArenaHeader
                        name = "Cancha Nuevo Milenio"
                        puntuacion = "4.1"
                        ubicacion = "Montería, Córdoba"
                        favorito={true}
                    />
                </div>
                <div className="px-8 py-8 sm:px-16 grid grid-cols-4">
                    <ArenaCard favorito={true}/>
                    <ArenaCard favorito={true}/>
                    <ArenaCard favorito={true}/>
                    <ArenaCard favorito={false}/>
                    <ArenaCard favorito={false}/>
                    <ArenaCard favorito={false}/>
                    <ArenaCard favorito={false}/>
                    <ArenaCard favorito={false}/>
                </div>
            </div>
        );
    }
}

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

        return (
            <div className="pt-16 pb-44">
                <div><SearchResultsHeader filter={filterOptions} /></div>
                <div className="w-full grid grid-cols-4">
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

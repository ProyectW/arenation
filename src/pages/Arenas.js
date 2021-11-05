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
                <div>
                    <SearchResultsHeader filter={filterOptions} />
                </div>
                <div className="px-8 py-8 sm:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    <ArenaCard favorito={true} />
                    <ArenaCard favorito={true} />
                    <ArenaCard favorito={true} />
                    <ArenaCard favorito={false} />
                    <ArenaCard favorito={false} />
                    <ArenaCard favorito={false} />
                    <ArenaCard favorito={false} />
                    <ArenaCard favorito={false} />
                </div>
            </div>
        );
    }
}

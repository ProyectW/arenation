import React from "react";
import SearchResultsHeader from "../components/Controls/SearchResultsHeader";

export default class Arenas extends React.Component {
    render() {
        const filterOptions = {
            sport: "Fútbol",
            city: "San Pelayo",
            resultCount: 20,
        };

        return (
            <div className="pt-16 pb-44">
                <SearchResultsHeader filter={filterOptions} />
            </div>
        );
    }
}

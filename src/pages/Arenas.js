import React from "react";
import SearchResultsHeader from "../components/Controls/SearchResultsHeader";

export default class Arenas extends React.Component {
    render() {
        const filterOptions = {
            sport: "Fútbol",
            city: "Montería",
            resultCount: 20,
        };
        return (
            <div className="pt-16">
                <SearchResultsHeader filter={filterOptions} />
            </div>
        );
    }
}

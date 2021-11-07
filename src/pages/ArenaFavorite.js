import React from "react";
import SearchResultsHeader from "../components/Controls/SearchResultsHeader";
import Favorite from "../components/Favorite";

export default class Notifications extends React.Component {
  render() {
    const arenas = [
      { favorite: true },
      { favorite: true },
      { favorite: true },
      { favorite: true },
      { favorite: true },
    ];
    const filterOptions = {
      resultCount: 20,
    };
    return (
      <div className="pt-16 pb-44">
        <div>
          <SearchResultsHeader filter={filterOptions} />
        </div>
        <Favorite arenas={arenas} />
      </div>
    );
  }
}

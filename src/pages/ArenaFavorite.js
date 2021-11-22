import React from "react";
import SearchResultsHeader from "../components/Controls/SearchResultsHeader";
import Favorite from "../components/Favorite";
import AlertDone from "../components/AlertsPayments";
import {AlertWrong} from "../components/AlertsPayments";
import OverlayPhoto from "../components/OverlayProfilePhoto";

export default class Notifications extends React.Component {
  render() {
    
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
    const filterOptions = {
      resultCount: 20,
    };
    return (
      <div className="pt-16 pb-44">
        <div>
          <SearchResultsHeader filter={filterOptions} />
        </div>
        <Favorite arenas={ArenasResults} />
      </div>
    );
  }
}

import React from "react";
import iconEmptyFavorites from "../assets/img/iconEmptyFavorites.svg";
import Button from "./Controls/Buttons";
import ArenaCard from "./ArenaCard";

export default function Favorite(props) {
  if (props.arenas) {
    return (
      <div className="px-8 py-8 sm:px-16 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
        {props.arenas.map((e) => {
          if (e.isFav === true) {
            const locacion = e.location.indexOf(props.city);
            if (locacion !== -1) {
              return <ArenaCard fav={true} arenaData={e} />;
            }
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-full px-8 sm:px-16 text-secondary-dark">
        <div className="w-full flex flex-col items-center justify-center text-secondary-dark">
          <img className="mb-3" alt="" src={iconEmptyFavorites} />
          <h1 className="font-semibold mb-2">Aún no tienes arenas favoritas</h1>
          <label className="mb-5">
            Aquí encontrarás las arenas que agregues como favoritas
          </label>
          <Button link="/arenas" type="normal" text="Explorar Escenarios" />
        </div>
      </div>
    );
  }
}

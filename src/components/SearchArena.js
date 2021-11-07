import React from "react";
import iconEmptyArenas from "../assets/img/iconEmptyArenas.svg";
import Button from "./Controls/Buttons";
import ArenaCard from "./ArenaCard";

export default function Favorite(props) {
  if (props.arenas) {
    return (
      <div className="px-8 py-8 sm:px-16 grid grid-cols-3 justify-items-center">
        {props.arenas.map((e) => {
            return(<ArenaCard favorito={true}/>);
        })}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-full px-8 sm:px-16 text-secondary-dark">
        <div className="w-full flex flex-col items-center justify-center text-secondary-dark">
          <img className="mb-3" alt="" src={iconEmptyArenas} />
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
import React from "react";
import { ReactComponent as IconStar } from "../../../src/assets/img/iconStar.svg";
import { ReactComponent as IconMap } from "../../../src/assets/img/iconMap.svg";
import { ReactComponent as IconHeart } from "../../../src/assets/img/iconHeart.svg";
import { ReactComponent as IconShare } from "../../../src/assets/img/iconShare.svg";
import { ReactComponent as IconHearFull } from "../../../src/assets/img/iconHearFull.svg";
import {useState} from "react";

export default function ArenaHeader(props) {
    const [favorito, setFavorito] = useState(props.favorito);
    return(
        <div className="flex flex-col w-full">
            <div className="w-full">
                <h1>{props.name}</h1>
            </div>
            <div className="w-full flex flex-row items-center">
                <div className="flex w-full items-center justify-start text-secondary-dark">
                    <IconStar className="fill-current text-warning"/>
                    {props.puntuacion}
                    <hr className="border-2 rounded w-3 mx-1 border-primary-500"></hr>
                    <IconMap className="fill-current"/>
                    {props.ubicacion}
                </div>
                <div className="w-full flex items-center justify-end text-secondary-dark">
                    <IconShare className="mx-1"/>
                    <u>Compartir</u>
                    {favorito ? (
                        <IconHearFull onClick={()=>setFavorito(!favorito)} className="cursor-pointer ml-2 mr-1"/>
                    ) : (
                        <IconHeart onClick={()=>setFavorito(!favorito)} className="cursor-pointer ml-2 mr-1"/>
                    )}
                    <u>Favorito</u>
                </div>
            </div>
        </div>
    );
}
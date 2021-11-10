import React from "react";
import { ReactComponent as IconStar } from "../../../src/assets/img/iconStar.svg";
import { ReactComponent as IconMap } from "../../../src/assets/img/iconMap.svg";
import { ReactComponent as IconHeart } from "../../../src/assets/img/iconHeart.svg";
import { ReactComponent as IconShare } from "../../../src/assets/img/iconShare.svg";
import { ReactComponent as IconHearFull } from "../../../src/assets/img/iconHearFull.svg";
import { useState, useEffect } from "react";

export default function ArenaHeader(props) {
    const [favorite, setFavorite] = useState(props.isFav);

    /* 
    Esto corrige el antipatron de copiar el
    estado desde los props
    Source:
    https://es.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    */
    useEffect(() => {
        setFavorite(props.isFav);
    }, [props.isFav]);
    return (
        <div className="flex flex-col w-full px-8 pt-8 sm:px-16">
            <div className="w-full">
                <h1>{props.name}</h1>
            </div>
            <div className="w-full flex flex-row items-center mt-2">
                <div className="flex w-full items-center justify-start text-secondary-dark">
                    <IconStar className="fill-current text-warning" />
                    {props.score}
                    <hr className="border-2 rounded w-3 mx-1 border-primary-500"></hr>
                    <IconMap className="fill-current text-secondary-dark" />
                    {props.location}
                </div>
                <div className="w-full flex items-center justify-end text-secondary-dark">
                    <IconShare className="mx-1 fill-current text-secondary-dark" />
                    <u>Compartir</u>
                    {favorite ? (
                        <IconHearFull
                            onClick={() => setFavorite(!favorite)}
                            className="cursor-pointer ml-2 mr-1 fill-current text-danger"
                        />
                    ) : (
                        <IconHeart
                            onClick={() => setFavorite(!favorite)}
                            className="cursor-pointer ml-2 mr-1"
                        />
                    )}
                    <u>Favorito</u>
                </div>
            </div>
        </div>
    );
}

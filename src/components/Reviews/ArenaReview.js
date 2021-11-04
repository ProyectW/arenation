import React from "react";
import Avatar from "../Avatars/Avatar";
import { ReactComponent as IconStar } from "../../../src/assets/img/iconStar.svg";

export default function ArenaReview(props) {
    return(
        <div className="flex flex-col w-full px-8 py-8 sm:px-16  text-secondary-dark">
            <div className="border-b border-secondary-gray py-5">
                <h2  className="flex flex-row items-center">Reseñas
                    <hr className="ml-2 border-2 rounded w-3 mx-1 border-secondary-dark"/>
                    <IconStar width="36" className="mx-1 fill-current text-warning" />
                    {props.puntuacion}
                </h2>
            </div>
            <div className="my-5 grid grid-cols-2">
                {
                    props.comentarios.map((e)=>{
                        return(
                            <div className="px-5 py-2">
                                <div className="flex flex-row">
                                    <Avatar
                                        isLogged={true}
                                        avatar={`https://es.gravatar.com/userimage/194712154/18f91faeb0511ab57432decc5d49e6f2.jpg?size=${36}`}
                                    />
                                    <div className="ml-2 flex flex-col">
                                        <label className="text-secondary-dark">{e.nombre}</label>
                                        <label className="text-secondary-gray">{e.fecha}</label>
                                    </div>
                                </div>
                                <div className="my-2">
                                    <p>{e.comentario}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="text-secondary-dark">
                <u className="cursor-pointer">Mostrar más</u>
            </div>
        </div>
    );
}
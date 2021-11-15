import React from "react";
import Avatar from "../Avatars/Avatar";
import { ReactComponent as IconStar } from "../../../src/assets/img/iconStar.svg";
import Fecha from "../../utils/Fecha";

export default function ArenaReview(props) {
    return (
        <div className="flex flex-col w-full px-8 py-8 sm:px-16  text-secondary-dark">
            <div className="border-b border-secondary-dark border-opacity-10 py-5">
                <h2 className="flex flex-row items-center">
                    Reseñas
                    <hr className="ml-2 border-2 rounded w-3 mx-1 border-secondary-dark" />
                    <IconStar
                        width="36"
                        className="mx-1 fill-current text-warning"
                    />
                    {props.score}
                </h2>
            </div>
            <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                {props.comments.map((e) => {
                    return (
                        <div className="py-2">
                            <div className="flex flex-row">
                                <Avatar isLogged={true} src={e.userAvatar} />
                                <div className="ml-2 flex flex-col">
                                    <label className="text-secondary-dark">
                                        {e.userName}
                                    </label>
                                    <label className="text-secondary-gray">
                                        <Fecha fecha={e.date} />
                                    </label>
                                </div>
                            </div>
                            <div className="my-2">
                                <p>{e.comment}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="text-secondary-dark">
                <u className="cursor-pointer">Mostrar más</u>
            </div>
        </div>
    );
}

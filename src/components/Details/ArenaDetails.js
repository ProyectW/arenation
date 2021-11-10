import React from "react";
import Avatar from "../Avatars/Avatar";
import { ReactComponent as ChuloIcon } from "../../assets/img/iconChulo.svg";

export default function ArenaDetalis(props) {
    return (
        <div className="flex flex-col w-full px-8 sm:px-16  text-secondary-dark">
            <div className="flex flex-col pb-2 border-b border-secondary-dark border-opacity-10">
                <h2>
                    Escenario de {props.arenaType} con {props.surface}
                </h2>
                <div className="flex flex-row items-center py-2">
                    <Avatar
                        className="mr-2"
                        isLogged={true}
                        src={props.localManagerAvatar}
                    />
                    <p className="font-medium">{props.localManagerName}</p>
                </div>
            </div>
            <div className="w-full my-3 text-secondary-dark text-justify">
                <p>{props.description}</p>
            </div>
            <div className="w-full text-secondary-dark">
                <h3>Facilidades</h3>
                <ul>
                    {props.facilities.map((e) => {
                        return (
                            <li className="flex">
                                <ChuloIcon />
                                {e}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

import React from "react";
import Avatar from "../Avatars/Avatar";
import { ReactComponent as ChuloIcon } from "../../assets/img/iconChulo.svg";

export default function ArenaDetalis(props) {
    return(
        <div className="flex flex-col w-full px-8 py-8 sm:px-16  text-secondary-dark">
            <div className="flex flex-col border-b border-secondary-gray py-3">
                <h2>Escenario de {props.cancha} con {props.cesped}</h2>
                <div className="flex flex-row items-center">
                    <Avatar
                        className="mr-2"
                        isLogged={true}
                        avatar={`https://es.gravatar.com/userimage/194712154/18f91faeb0511ab57432decc5d49e6f2.jpg?size=${36}`}
                    />
                    {props.local}
                </div>
            </div>
            <div className="w-full my-3 text-secondary-dark text-justify">
                <p>{props.descripcion}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus tortor nibh etiam pretium id tincidunt elit vulputate aliquet. Quis sodales porttitor diam nunc netus egestas. Mi sit sit ultrices pulvinar enim sem vestibulum. In potenti consectetur molestie dis amet dui placerat vestibulum enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus tortor nibh etiam pretium id tincidunt elit vulputate aliquet. Quis sodales porttitor diam nunc netus egestas. Mi sit sit ultrices pulvinar enim sem vestibulum. In potenti consectetur molestie dis amet dui placerat vestibulum enim.
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus tortor nibh etiam pretium id tincidunt elit vulputate aliquet. Quis sodales porttitor diam nunc netus egestas. Mi sit sit ultrices pulvinar enim sem vestibulum. In potenti consectetur molestie dis amet dui placerat vestibulum enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus tortor nibh etiam pretium id tincidunt elit vulputate aliquet. Quis sodales porttitor diam nunc netus egestas. Mi sit sit ultrices pulvinar enim sem vestibulum. In potenti consectetur molestie dis amet dui placerat vestibulum enim.
                </p>
            </div>
            <div className="w-full text-secondary-dark">
                <h3>Facilidades</h3>
                <ul>
                {props.facilidades.map((e)=>{
                    return(<li className="flex"><ChuloIcon/>{e}</li>);
                })}</ul>
            </div>
        </div>
    );
}
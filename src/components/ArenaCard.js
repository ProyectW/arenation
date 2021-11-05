import { ReactComponent as IconHeart } from "../../src/assets/img/iconHeart.svg";
import { ReactComponent as IconHearFull } from "../../src/assets/img/iconHearFull.svg";
import { ReactComponent as IconMap } from "../../src/assets/img/iconMap.svg";
import { ReactComponent as IconCalendar } from "../../src/assets/img/iconCalendar.svg";
import { ReactComponent as IconStar } from "../../src/assets/img/iconStar.svg";
import {useState} from "react";
import { Link } from "react-router-dom";

export default function ArenaCard(props) {
    const [favorito, setFavorito] = useState(props.favorito);
    return (
        <>
            <Link to="arenas/selected">
                <div className="cursor-pointer shadow-DropDown rounded-xl p-2 w-max mx-3">
                    <div className="relative w-72 rounded-lg p-1 m-1" 
                    style={{
                        backgroundImage: `url(${"https://civideportes.com.co/wp-content/uploads/2019/10/C%C3%B3mo-hacer-una-cancha-de-f%C3%BAtbol.jpg"})`,
                    }}>
                        <div className="w-full flex justify-end">
                            <buttom onClick={()=>setFavorito(!favorito)} className="cursor-pointer p-2">
                            {favorito ? (
                                <IconHearFull />
                            ) : (
                                <IconHeart/>
                            )}
                                
                            </buttom>
                        </div>
                        <img
                            className="h-72 rounded-lg object-cover"
                            alt=""
                            src={
                                ""
                            }
                        ></img>
                    </div>
                    <h3 className="p-1">{props.nombre}</h3>
                    <div className="p-1 text-secondary-gray text-sm h2 w-full flex flex-row ">
                        <IconMap />
                        {props.ubicacion}
                    </div>
                    <div className="p-1 text-primary-500 text-sm h2 w-full flex flex-row items-center">
                        <IconCalendar />
                        <p>Quedan {props.disponible} espacios disponibles</p>
                    </div>
                    <div className="p-1 text-sm w-full flex flex-row items-center">
                        <div className="flex flex-row w-full items-center">
                            <IconStar className="fill-current text-warning" />
                            {props.puntuacion}
                        </div>
                        <div className="w-full flex justify-end">
                            <span className="font-semibold">desde $</span>
                            <span className="font-semibold">{props.precio}</span>
                            <span className="text-secondary-gray">/hora</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

import { ReactComponent as IconHeart } from "../../src/assets/img/iconHeart.svg";
import { ReactComponent as IconHearFull } from "../../src/assets/img/iconHearFull.svg";
import { ReactComponent as IconMap } from "../../src/assets/img/iconMap.svg";
import { ReactComponent as IconCalendar } from "../../src/assets/img/iconCalendar.svg";
import { ReactComponent as IconStar } from "../../src/assets/img/iconStar.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ArenaCard(props) {
    const [fav, setFav] = useState(props.arenaData.isFav);
    return (
        <>
            {/* Pass Arena ID as Atribute*/}
            <Link to="arenas/selected">
                <div
                    className="cursor-pointer shadow-DropDown rounded-xl p-4 w-full"
                    key={props.arenaData.name}
                >
                    <div
                        className="relative w-full rounded-lg p-1 bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: `url(${"https://civideportes.com.co/wp-content/uploads/2019/10/C%C3%B3mo-hacer-una-cancha-de-f%C3%BAtbol.jpg"})`,
                        }}
                    >
                        <div className="w-full flex justify-end">
                            <button
                                onClick={() => setFav(!fav)}
                                className="cursor-pointer p-2"
                            >
                                {fav ? (
                                    <IconHearFull className="fill-current text-danger" />
                                ) : (
                                    <IconHeart className="fill-current text-secondary-dark" />
                                )}
                            </button>
                        </div>
                        <img
                            className="h-72 rounded-lg object-cover"
                            alt=""
                            src={""}
                        ></img>
                    </div>
                    <h3 className="pt-2">{props.arenaData.name}</h3>
                    <div className="py-2 text-secondary-gray text-sm h2 w-full flex items-center">
                        <IconMap className="fill-current text-secondary-gray h-5 w-5 mr-1" />
                        {props.arenaData.location}
                    </div>
                    <div className="py-2 text-primary-500 text-sm w-full flex items-center">
                        <IconCalendar className="fill-current text-primary-500 h-5 w-5 mr-1" />
                        <p>
                            Quedan {props.arenaData.spacesAvailable} espacios
                            disponibles
                        </p>
                    </div>
                    <div className="pt-2 text-sm w-full flex flex-row items-center">
                        <div className="flex flex-row w-full items-center">
                            <IconStar className="fill-current text-warning h-5 w-5 mr-1" />
                            {props.arenaData.score}
                        </div>
                        <div className="w-full flex justify-end items-center">
                            <span className="font-semibold">{`desde $${Intl.NumberFormat(
                                "en-US"
                            ).format(props.arenaData.price)}`}</span>
                            <span className="text-secondary-gray">/hora</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

import { ReactComponent as IconHeart} from "../../src/assets/img/iconHeart.svg";
import { ReactComponent as IconMap} from "../../src/assets/img/iconMap.svg";
import { ReactComponent as IconCalendar} from "../../src/assets/img/iconCalendar.svg";
import { ReactComponent as IconStar} from "../../src/assets/img/iconStar.svg";

export default function ArenaCard(props) {
    return(
        <div className="shadow-md rounded-xl p-2 w-max">
            <div className="w-72 rounded-lg p-1 m-1">
                <div className="w-full flex justify-end">
                    <buttom className="fixed p-2">
                            <IconHeart/>
                    </buttom>
                </div>
                <img className="h-72 rounded-lg" alt="" src={"https://civideportes.com.co/wp-content/uploads/2019/10/C%C3%B3mo-hacer-una-cancha-de-f%C3%BAtbol.jpg"}>
                </img>
            </div>
            <h3 className="p-1">{props.nombre}</h3>
            <div className="p-1 text-secondary-gray text-sm h2 w-full flex flex-row ">
                <IconMap/>
                {props.ubicacion}
            </div>
            <div className="p-1 text-primary-500 text-sm h2 w-full flex flex-row items-center">
                <IconCalendar/>
                <p>Quedan {props.disponible} espacios disponibles</p>
            </div>
            <div className="p-1 text-sm w-full flex flex-row items-center">
                <div className="flex flex-row w-full items-center">
                    <IconStar className="fill-current text-warning"/>
                    {props.puntuacion}
                </div>
                <div className="w-full flex justify-end">
                    <span className="font-semibold">desde $</span>
                    <span className="font-semibold">{props.precio}</span>
                    <span className="text-secondary-gray">/hora</span>
                </div>
            </div>
        </div>
    );
}